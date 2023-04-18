import { PODCASTS_API_URL, podcastsApiResponse } from '@/test/config';
import { rest } from 'msw';

export const podcastsHandlers = [
	rest.get(PODCASTS_API_URL, (req, res, ctx) =>
		res(ctx.json(podcastsApiResponse))
	),
];
