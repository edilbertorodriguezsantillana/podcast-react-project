export type Podcast = {
	id: string;
	title: string;
	author: string;
	description: string;
	image: string;
};

export type Episode = {
	id: number;
	title: string;
	date: string;
	duration: number;
	description: string | undefined;
	episodeUrl: string | undefined;
};

export type PodcastDetail = {
	episodes: Episode[];
};
