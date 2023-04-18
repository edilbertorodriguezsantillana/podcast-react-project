import React, { type ReactNode } from 'react';
import './styles/main-layout.css';
import { Header } from '@/components/header';

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<main className='main-container'>
			<Header />
			{children}
		</main>
	);
};
