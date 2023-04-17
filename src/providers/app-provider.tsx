import { queryClient } from '@/lib/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import React, { type ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Fallback } from './fallback';

interface AppProviderProps {
	children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<Fallback>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>{children}</BrowserRouter>
			</QueryClientProvider>
		</Fallback>
	);
};
