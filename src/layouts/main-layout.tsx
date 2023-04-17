import React, { type ReactNode } from 'react';

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
	return <div>{children}</div>;
};
