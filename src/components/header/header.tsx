import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header>
			<div className='header-container'>
				<Link to={'/'}>
					<h2 className='header-container__title'>Podcaster</h2>
				</Link>
				<p>Loading</p>
			</div>
		</header>
	);
};
