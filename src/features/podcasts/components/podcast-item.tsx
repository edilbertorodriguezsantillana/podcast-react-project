import React from 'react';
import { type Podcast } from '@/types';
import { Link } from 'react-router-dom';
import '../styles/podcast-item.css';

type PodcastItemProps = Omit<Podcast, 'description'>;

export const PodcastItem = ({ id, title, author, image }: PodcastItemProps) => {
	return (
		<div className='podcast-item'>
			<Link to={`/podcast/${id}`}>
				<div className='podcast-item__image-container'>
					<img className='podcast-item__image' src={image} />
				</div>
				<div className='podcast-item__content'>
					<h2 className='podcast-item__title'>{title.toUpperCase()}</h2>
					<div className='podcast-item__author'>Author: {author}</div>
				</div>
			</Link>
		</div>
	);
};
