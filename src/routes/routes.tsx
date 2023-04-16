import { Fallback } from '@/providers/fallback';
import React, { lazy } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Home = lazy(async () => await import('@/pages/home'));
const PodcastsRoutes = lazy(
	async () => await import('@/features/podcasts/routes')
);

const AppProtected = () => (
	<Fallback>
		<Outlet />
	</Fallback>
);

export const routes = [
	{
		path: '/',
		element: <AppProtected />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'podcast/*', element: <PodcastsRoutes /> },
		],
	},
	{ path: '*', element: <Navigate to='.' /> },
];
