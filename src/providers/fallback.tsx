import { Error } from '@/components/error';
import React, { type ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface FallbackProps {
	children: ReactNode;
}

export const Fallback = ({ children }: FallbackProps) => (
	<Suspense fallback={<div>Loading...</div>}>
		<ErrorBoundary FallbackComponent={Error}>{children}</ErrorBoundary>
	</Suspense>
);
