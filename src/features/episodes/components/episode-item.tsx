import React from 'react';
import { type Episode } from '@/types';
import { msToTime } from '@/utils/date';
import { Link } from 'react-router-dom';
import '../styles/episode-item.css';

type EpisodeItemProps = Pick<Episode, 'id' | 'title' | 'date' | 'duration'>;

export const EpisodeItem = ({
	id,
	title,
	date,
	duration,
}: EpisodeItemProps) => {
	return (
		<tr className='episode-item__tr'>
			<th scope='row' className='episode-item__th'>
				<Link to={`episode/${id}`}>{title}</Link>
			</th>
			<td>{new Date(date).toLocaleDateString('es-ES')}</td>
			<td className='episode-item__duration-td'>{msToTime(duration)}</td>
		</tr>
	);
};
