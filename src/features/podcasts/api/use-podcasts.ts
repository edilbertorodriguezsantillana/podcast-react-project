import { useQuery } from '@tanstack/react-query';

import { podcastsKeys, getPodcasts } from './config';

export const usePodcasts = () =>
	useQuery({
		queryKey: podcastsKeys.lists(),
		queryFn: getPodcasts,
		staleTime: Infinity,
	});
