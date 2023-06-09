export interface PodcastApiResponse {
	resultCount: number;
	results: Result[];
}

export interface Result {
	wrapperType: string;
	kind: string;
	artistId?: number;
	collectionId: number;
	trackId: number;
	artistName?: string;
	collectionName: string;
	trackName: string;
	collectionCensoredName?: string;
	trackCensoredName?: string;
	artistViewUrl: string;
	collectionViewUrl: string;
	feedUrl: string;
	trackViewUrl: string;
	artworkUrl30?: string;
	artworkUrl60: string;
	artworkUrl100?: string;
	collectionPrice?: number;
	trackPrice?: number;
	collectionHdPrice?: number;
	releaseDate: string;
	collectionExplicitness?: string;
	trackExplicitness?: string;
	trackCount?: number;
	trackTimeMillis: number;
	country: string;
	currency?: string;
	primaryGenreName?: string;
	artworkUrl600: string;
	genreIds?: string[];
	genres: any[];
	previewUrl?: string;
	closedCaptioning?: string;
	artistIds?: number[];
	episodeGuid?: string;
	description?: string;
	shortDescription?: string;
	episodeUrl?: string;
	episodeContentType?: string;
	artworkUrl160?: string;
	episodeFileExtension?: string;
}
