import { Fallback } from '@/providers/fallback';
import React, { lazy } from 'react';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';

const Podcast = lazy(async () => await import('@/pages/podcast'));
const Episode = lazy(async () => await import('@/pages/episode'));

const PodcastsRoutesLoad = () => (
	<Fallback>
		<Outlet />
	</Fallback>
);

const ArticlesRoutes = () => (
	<Routes>
		<Route path='/' element={<PodcastsRoutesLoad />}>
			<Route index element={<Podcast />} />
			<Route path=':podcastId' element={<Podcast />} />
			<Route path=':podcastId/episode/:episodeId' element={<Episode />} />
			<Route path='*' element={<Navigate to='.' />} />
		</Route>
	</Routes>
);

export default ArticlesRoutes;
