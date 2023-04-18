import React from 'react';
import { type Episode } from '@/types';
import { EpisodeItem } from './episode-item';
import '../styles/episodes.css';

type EpisodesProps = {
	episodes: Episode[];
};

export const Episodes = ({ episodes }: EpisodesProps) => {
	return (
		<table>
			<thead>
				<tr className='episodes__tr-thead'>
					<th scope='col'>Title</th>
					<th scope='col'>Date</th>
					<th scope='col' className='episodes__duration-th'>
						Duration
					</th>
				</tr>
			</thead>
			<tbody>
				{episodes.map(({ id, title, date, duration }) => (
					<EpisodeItem
						key={id}
						id={id}
						title={title}
						date={date}
						duration={duration}
					/>
				))}
			</tbody>
		</table>
	);
};
