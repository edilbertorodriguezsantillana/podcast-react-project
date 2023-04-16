import React from 'react';
import { AppProvider } from './providers/app-provider';
import { AppRoutes } from './routes';

export const App = () => {
	return (
		<AppProvider>
			<AppRoutes />
		</AppProvider>
	);
};
