import { type QueryFunctionContext } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { storage } from '../utils/storage';
import { MILLISECONDS_IN_24_HOURS, now } from '@/utils/date';
import { type PodcastsApiResponse } from '../types/podcasts-api-response';
import { type PodcastDetail, type Podcast } from '@/types';
import { type PodcastApiResponse } from '../types/podcast-api-response';
import { apiClientAllowOrigins } from '@/lib/api-client-allow-origins';

export const podcastsKeys = {
	all: [{ scope: 'podcasts' }] as const,
	lists: () => [{ ...podcastsKeys.all[0], entity: 'list' }] as const,
	details: () => [{ ...podcastsKeys.all[0], entity: 'detail' }] as const,
	detail: (id: string) => [{ ...podcastsKeys.details()[0], id }] as const,
};

export const getPodcasts = async (): Promise<Podcast[]> => {
	const localStoragePodcasts = storage.getPodcasts();

	if (
		!localStoragePodcasts ||
		storage.getPodcastsFetchedTime() - now > MILLISECONDS_IN_24_HOURS
	) {
		const podcastsDataResponse: PodcastsApiResponse = await apiClient(
			'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
		);

		const podcastsData = podcastsDataResponse.feed.entry.map(podcast => ({
			id: podcast.id.attributes['im:id'],
			title: podcast['im:name'].label,
			author: podcast['im:artist'].label,
			description: podcast.summary.label,
			image: podcast['im:image'][0].label,
		}));
		storage.setPodcasts(JSON.stringify(podcastsData));
		storage.setPodcastsFetchedTime();
		return podcastsData;
	}

	return localStoragePodcasts;
};

export const getPodcast = async ({
	queryKey: [{ id }],
}: QueryFunctionContext<
	ReturnType<(typeof podcastsKeys)['detail']>
>): Promise<PodcastDetail> => {
	const localStoragePodcast = storage.getPodcast(id);

	if (
		!localStoragePodcast ||
		storage.getPodcastFetchedTime(id) - now > MILLISECONDS_IN_24_HOURS
	) {
		const podcastDataResponseRaw = await apiClientAllowOrigins(
			`${encodeURIComponent(
				`https://itunes.apple.com/lookup?id=${id}&medsfghgdfjfgkhjlhkljkñia=podcast&entity=podcastEpisode&limit=20dgsdfhgd`
			)}`
		);

		const podcastDataResponse: PodcastApiResponse = JSON.parse(
			podcastDataResponseRaw
		);
		const podcastData = {
			episodes: podcastDataResponse.results
				.filter(episode => episode.kind === 'podcast-episode')
				.map(
					({
						trackId,
						trackName,
						releaseDate,
						trackTimeMillis,
						description,
						episodeUrl,
					}) => ({
						id: trackId,
						title: trackName,
						date: releaseDate,
						duration: trackTimeMillis,
						description,
						episodeUrl,
					})
				),
		};
		storage.setPodcast(id, JSON.stringify(podcastData));
		storage.setPodcastFetchedTime(id);
		return podcastData;
	}

	return localStoragePodcast;
};
