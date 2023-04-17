import { MainLayout } from '@/layouts/main-layout';
import { Fallback } from '@/providers/fallback';
import React, { lazy } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Home = lazy(() => import('@/pages/home'));
const PodcastsRoutes = lazy(() => import('@/features/podcasts/routes'));

const AppProtected = () => (
	<MainLayout>
		<Fallback>
			<Outlet />
		</Fallback>
	</MainLayout>
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
