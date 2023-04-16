import React, { type ReactNode, Suspense } from 'react';

interface FallbackProps {
	children: ReactNode;
}

export const Fallback = ({ children }: FallbackProps) => (
	<Suspense fallback={<div>Error</div>}>{children}</Suspense>
);
