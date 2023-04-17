import { now } from '@/utils/date';

const podcastsStorageKey = 'podcasts';
const podcastsFetchedTimeStorageKey = 'podcastsFetchedTime';
const podcastStorageKey = (id: string) => `podcast-${id}`;
const podcastFetchedTimeStorageKey = (id: string) =>
	`podcastsFetchedTime-${id}`;

export const storage = {
	getPodcasts: () =>
		JSON.parse(localStorage.getItem(podcastsStorageKey) as string),
	setPodcasts: (podcasts: string) =>
		localStorage.setItem(podcastsStorageKey, podcasts),
	getPodcastsFetchedTime: () =>
		Number(localStorage.getItem(podcastsFetchedTimeStorageKey)),
	setPodcastsFetchedTime: () =>
		localStorage.setItem(podcastsFetchedTimeStorageKey, String(now)),
	getPodcast: (id: string) =>
		JSON.parse(localStorage.getItem(podcastStorageKey(id)) as string),
	setPodcast: (id: string, podcast: string) =>
		localStorage.setItem(podcastStorageKey(id), podcast),
	getPodcastFetchedTime: (id: string) =>
		Number(localStorage.getItem(podcastFetchedTimeStorageKey(id))),
	setPodcastFetchedTime: (id: string) =>
		localStorage.setItem(podcastFetchedTimeStorageKey(id), String(now)),
};
