import React from 'react';
import { type Episode } from '@/types';
import '../styles/episode-card.css';
import * as DOMPurify from 'dompurify';
import { marked } from 'marked';

type EpisodeCardProps = Pick<Episode, 'title' | 'description' | 'episodeUrl'>;

export const EpisodeCard = ({
	title,
	description,
	episodeUrl,
}: EpisodeCardProps) => {
	return (
		<div className='episode-card'>
			<h2 className='episode-card__title'>{title}</h2>
			{description && (
				<p
					className='episode-card__description'
					dangerouslySetInnerHTML={{
						__html: DOMPurify.sanitize(marked.parse(description)),
					}}
				/>
			)}
			<audio className='episode-card__audio-player' controls>
				<source src={episodeUrl} type='audio/mpeg' />
				Your browser does not support the audio element.
			</audio>
		</div>
	);
};
