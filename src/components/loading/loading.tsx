import React from 'react';
import { useIsFetching } from '@tanstack/react-query';
import './loading.css';

export const Loading = () => {
	const isLoadingCounter = useIsFetching({
		predicate: query => query.state.status === 'loading',
	});

	const isLoadingAnyQuery = isLoadingCounter > 0;

	return isLoadingAnyQuery ? (
		<div aria-label='loading...' className='pulse-loading' />
	) : null;
};
