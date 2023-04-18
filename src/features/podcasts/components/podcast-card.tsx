import React from 'react';
import { type Podcast } from '@/types';
import '../styles/podcast-card.css';
import { Link } from 'react-router-dom';

type PodcastCardProps = Podcast;

export const PodcastCard = ({
	id,
	image,
	title,
	author,
	description,
}: PodcastCardProps) => {
	return (
		<div className='podcast-card'>
			<Link to={`/podcast/${id}`} className='podcast-card__image-container'>
				<img className='podcast-card__image' src={image} />
			</Link>
			<Link to={`/podcast/${id}`} className='podcast-card__info'>
				<h1 className='podcast-card__title'>{title}</h1>
				<h2 className='podcast-card__author'>by {author}</h2>
			</Link>
			<div className='podcast-card__description'>
				<h2 className='podcast-card__description-title'>Description:</h2>
				<p className='podcast-card__description-paragraph'>{description}</p>
			</div>
		</div>
	);
};
