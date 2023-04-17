import { PodcastLayout } from '@/layouts/podcast-layout';
import { Fallback } from '@/providers/fallback';
import React, { lazy } from 'react';
import { Route, Routes, Outlet, Navigate } from 'react-router-dom';

const Podcast = lazy(() => import('@/pages/podcast'));
const Episode = lazy(() => import('@/pages/episode'));

const PodcastsRoutesLoad = () => (
	<PodcastLayout>
		<Fallback>
			<Outlet />
		</Fallback>
	</PodcastLayout>
);

const ArticlesRoutes = () => (
	<Routes>
		<Route path=':podcastId' element={<PodcastsRoutesLoad />}>
			<Route index element={<Podcast />} />
			<Route path='episode/:episodeId' element={<Episode />} />
			<Route path='*' element={<Navigate to='.' />} />
		</Route>
	</Routes>
);

export default ArticlesRoutes;
