export const PODCASTS_API_URL =
	'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
export const PODCAST_1535809341_API_URL =
	'https://api.allorigins.win/get?url=https://itunes.apple.com/lookup?id=1535809341&medsfghgdfjfgkhjlhkljkñia=podcast&entity=podcastEpisode&limit=20dgsdfhgd';

export const podcastIdTest = '1535809341';
export const podcastTitleTest = 'The Joe Budden Podcast';
export const podcastAuthorTest = 'The Joe Budden Network';

export const podcastTitleSecondItemTest = 'This Little Light';

export const episodeIdTest = '1000605224134';
export const episodeTitleTest = 'Introducing This Little Light with Flea';

export const podcastsApiResponse = {
	feed: {
		author: {
			name: {
				label: 'iTunes Store',
			},
			uri: {
				label: 'http://www.apple.com/itunes/',
			},
		},
		entry: [
			{
				'im:name': {
					label: podcastTitleTest,
				},
				'im:image': [
					{
						label:
							'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png',
						attributes: {
							height: '55',
						},
					},
					{
						label:
							'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png',
						attributes: {
							height: '60',
						},
					},
					{
						label:
							'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
						attributes: {
							height: '170',
						},
					},
				],
				summary: {
					label:
						'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
				},
				'im:price': {
					label: 'Get',
					attributes: {
						amount: '0',
						currency: 'USD',
					},
				},
				'im:contentType': {
					attributes: {
						term: 'Podcast',
						label: 'Podcast',
					},
				},
				rights: {
					label: '© All rights reserved',
				},
				title: {
					label: 'The Joe Budden Podcast - The Joe Budden Network',
				},
				link: {
					attributes: {
						rel: 'alternate',
						type: 'text/html',
						href: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
					},
				},
				id: {
					label:
						'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
					attributes: {
						'im:id': podcastIdTest,
					},
				},
				'im:artist': {
					label: podcastAuthorTest,
					attributes: {
						href: 'https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2',
					},
				},
				category: {
					attributes: {
						'im:id': '1310',
						term: 'Music',
						scheme:
							'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
						label: 'Music',
					},
				},
				'im:releaseDate': {
					label: '2023-04-12T00:30:00-07:00',
					attributes: {
						label: 'April 12, 2023',
					},
				},
			},
			{
				'im:name': {
					label: podcastTitleSecondItemTest,
				},
				'im:image': [
					{
						label:
							'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/55x55bb.png',
						attributes: {
							height: '55',
						},
					},
					{
						label:
							'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/60x60bb.png',
						attributes: {
							height: '60',
						},
					},
					{
						label:
							'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/170x170bb.png',
						attributes: {
							height: '170',
						},
					},
				],
				summary: {
					label:
						'Hosted by Flea, founding member and bassist of the Red Hot Chili Peppers, This Little Light is a podcast about falling in love with music. Flea interviews musical guests from all genres to discuss the teachers who guided them, the influences that inspired them, and how the lessons they learned as young musicians have shaped their creativity, resilience, and careers. Guests range from legends to rising stars, and include Rick Rubin, Patti Smith, Thundercat Margo Price, and Cynthia Erivo. The podcast is produced by Cadence13 and Parallel, with proceeds benefiting the Silverlake Conservatory of Music, a Los Angeles-based non-profit that Flea co-founded in 2001.',
				},
				'im:price': {
					label: 'Get',
					attributes: {
						amount: '0',
						currency: 'USD',
					},
				},
				'im:contentType': {
					attributes: {
						term: 'Podcast',
						label: 'Podcast',
					},
				},
				rights: {
					label:
						'© 2023 Cadence13, LLC and Waypoint Wellness, LLC.  All Rights Reserved.',
				},
				title: {
					label: 'This Little Light - Cadence13 and Parallel',
				},
				link: {
					attributes: {
						rel: 'alternate',
						type: 'text/html',
						href: 'https://podcasts.apple.com/us/podcast/this-little-light/id1678378239?uo=2',
					},
				},
				id: {
					label:
						'https://podcasts.apple.com/us/podcast/this-little-light/id1678378239?uo=2',
					attributes: {
						'im:id': '1678378239',
					},
				},
				'im:artist': {
					label: 'Cadence13 and Parallel',
				},
				category: {
					attributes: {
						'im:id': '1525',
						term: 'Music Interviews',
						scheme:
							'https://podcasts.apple.com/us/genre/podcasts-music-music-interviews/id1525?uo=2',
						label: 'Music Interviews',
					},
				},
				'im:releaseDate': {
					label: '2023-04-06T00:01:00-07:00',
					attributes: {
						label: 'April 6, 2023',
					},
				},
			},
		],
		updated: {
			label: '2023-04-17T11:09:57-07:00',
		},
		rights: {
			label: 'Copyright 2008 Apple Inc.',
		},
		title: {
			label: 'iTunes Store: Top Podcasts in Music',
		},
		icon: {
			label: 'http://itunes.apple.com/favicon.ico',
		},
		link: [
			{
				attributes: {
					rel: 'alternate',
					type: 'text/html',
					href: 'https://podcasts.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=179537&popId=3',
				},
			},
			{
				attributes: {
					rel: 'self',
					href: 'https://mzstoreservices-int-st.itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
				},
			},
		],
		id: {
			label:
				'https://mzstoreservices-int-st.itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
		},
	},
};

export const podcast1535809341ApiResponse =
	'\n\n\n{\n "resultCount":6,\n "results": [\n{"wrapperType":"track", "kind":"podcast", "collectionId":1678378239, "trackId":1678378239, "artistName":"Cadence13 and Parallel", "collectionName":"This Little Light", "trackName":"This Little Light", "collectionCensoredName":"This Little Light", "trackCensoredName":"This Little Light", "collectionViewUrl":"https://podcasts.apple.com/us/podcast/this-little-light/id1678378239?uo=4", "feedUrl":"https://feeds.megaphone.fm/this-little-light", "trackViewUrl":"https://podcasts.apple.com/us/podcast/this-little-light/id1678378239?uo=4", "artworkUrl30":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/30x30bb.jpg", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/60x60bb.jpg", "artworkUrl100":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/100x100bb.jpg", "collectionPrice":0.00, "trackPrice":0.00, "collectionHdPrice":0, "releaseDate":"2023-04-06T07:01:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"explicit", "trackCount":5, "trackTimeMillis":2653, "country":"USA", "currency":"USD", "primaryGenreName":"Music Interviews", "contentAdvisoryRating":"Explicit", "artworkUrl600":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/600x600bb.jpg", "genreIds":["1525", "26", "1310"], "genres":["Music Interviews", "Podcasts", "Music"]}, \n{"country":"USA", "previewUrl":"https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chtbl.com/track/42D75/traffic.megaphone.fm/CAD2262521578.mp3?updated=1681161310", "artworkUrl160":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/160x160bb.jpg", "episodeFileExtension":"mp3", "episodeContentType":"audio", "closedCaptioning":"none", "collectionId":1678378239, "collectionName":"This Little Light", "artworkUrl600":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/600x600bb.jpg", "genres":[{"name":"Music Interviews", "id":"1525"}], "episodeGuid":"17552aec-ca86-11ed-bc57-33ba7750e588", \n"description":"Thundercat’s music education and evolution, from 1. Messing with his dad’s Billy Cobham records with his brother Ronald → 2. Growing up with two musician parents, and going to gigs with his dad → 3. Befriending Kamasi Washington and their teacher Reggie Andrews taking them under his wing → 4. Forming the Young Jazz Giants and gigging all over town, including at Laker games → 5. Joining a boy band and touring Europe as a teenager → 6. Playing in Suicidal Tendencies and learning how to be tough on stage → 7. Being encouraged to make his own records by his friend Flying Lotus\\n\\nThundercat (Stephen Bruner) is a multiple Grammy Award-winning bassist, vocalist, producer, and composer from Los Angeles. His most recent album, It Is What It Is, released in the spring of 2020, won Best Progressive R&B Album at the 63rd Grammy Awards and features musical contributions from Ty Dolla $ign, Childish Gambino, Lil B, Kamasi Washington, Steve Lacy, Steve Arrington, BADBADNOTGOOD, Louis Cole, Pedro Martins, and Zack Fox. Thundercat produced the record with his longtime partner Flying Lotus. That album followed Bruner’s game-changing third album, Drunk (2017), which completed his transition from virtuoso bassist to bona fide star and cemented his reputation as a unique voice that transcends genre. Previous releases include The Golden Age of Apocalypse (2011) and Apocalypse (2013), followed by EP The Beyond / Where The Giants Roam featuring the modern classic “Them Changes.” He was later “at the creative epicenter” (per Rolling Stone) of the 21st century’s most influential hip-hop album, Kendrick Lamar’s To Pimp a Butterfly, which earned him a Grammy for his collaboration on the track “These Walls.” He has continued to collaborate with Lamar, in addition to recent collaborations with Silk Sonic (Bruno Mars and Anderson .Paak), Haim, H.E.R., and Kaytranada, as well as contributing bass and vocals for “Black Gold,” the theme song of Netflix’s anime series Yasuke (scored by Flying Lotus), and an original song for the final season and soundtrack of HBO’s Insecure. In addition to music, Thundercat recently made his acting debut with a recurring role as The Modifier in the Star Wars series The Book of Boba Fett, appeared as the face of recent fashion/brand campaigns with Kerwin Frost x Beats and Salehe Bembury x New Balance, and was a guest at Paris Fashion Week and other events from Spanish luxury designer Loewe. The name Thundercat refers to the cartoon he’s loved since childhood and an extension of his wide-eyed, vibrant, often superhuman approach to his craft. \\n\\nFollow Silverlake Conservatory of Music at @silverlake_conservatory \\nFor more information on Parallel, visit parallel.la\\nFollow Cadence13 at @cadence13\\nFollow Thundercat at @thundercatmusic\\nFollow Flea at @flea333\\n \\nTo learn more about listener data and our privacy practices visit: https://www.audacyinc.com/privacy-policy\\n  \\n Learn more about your ad choices. Visit https://podcastchoices.com/adchoices", "trackId":1000608744027, "trackName":"Thundercat", "artistIds":[], "shortDescription":"", "collectionViewUrl":"https://itunes.apple.com/us/podcast/this-little-light/id1678378239?mt=2&uo=4", "trackViewUrl":"https://podcasts.apple.com/us/podcast/thundercat/id1678378239?i=1000608744027&uo=4", "trackTimeMillis":3900000, "contentAdvisoryRating":"Explicit", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/60x60bb.jpg", "releaseDate":"2023-04-13T07:01:00Z", "feedUrl":"https://feeds.megaphone.fm/this-little-light", "episodeUrl":"https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chtbl.com/track/42D75/traffic.megaphone.fm/CAD2262521578.mp3?updated=1681161310", "kind":"podcast-episode", "wrapperType":"podcastEpisode"}, \n{"country":"USA", "previewUrl":"https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chtbl.com/track/42D75/traffic.megaphone.fm/CAD9399940052.mp3?updated=1680663106", "artworkUrl160":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/160x160bb.jpg", "episodeFileExtension":"mp3", "episodeContentType":"audio", "closedCaptioning":"none", "collectionId":1678378239, "collectionName":"This Little Light", "artworkUrl600":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/600x600bb.jpg", "genres":[{"name":"Music Interviews", "id":"1525"}], "episodeGuid":"173e43a4-ca86-11ed-bc57-d7a411d79b34", \n"description":"Patti Smith’s music education and evolution, from 1. Being transfixed by Little Richard’s Tutti Frutti walking down the street with her mom → 2. Wanting to become an opera singer after hearing Eleanor Steber’s “Un Bel Di” on the radio → 3. Starting to write poetry at the advice of Bobby Neuwirth → 4. Writing songs for Blue Oyster Cult → 5. Embracing the scene at the Chelsea Hotel, hanging with Janis Joplin → 6. Meeting Jimi Hendrix on the steps at Electric Lady Studios → 7. Raising her kids with her husband Fred in Michigan, away from the pressures of the music industry → 8. Receiving important advice from William S. Burroughs → 9. Remembering a class with her eighth grade music teacher that’s stayed with her throughout her career\\n\\nPatti Smith is the author of the National Book Award winner, Just Kids, as well as Woolgathering, M Train, Year of the Monkey, and Devotion. Her seminal album Horses has been hailed as one of the top 100 albums of all time. In 2005, the French Ministry of Culture awarded Smith the title of Commandeur des Arts et des Lettres. Inducted into the Rock & Roll Hall of Fame in 2007, Smith is also the recipient of the ASCAP Founders Award, Sweden’s Polar Prize for significant achievements in music, and the 2020 PEN Literary Service Award. In 2022 she received the French Legion of Honor and the Pegasus Award for Poetry. She resides in New York City.\\n\\nFollow Silverlake Conservatory of Music at @silverlake_conservatory \\nFor more information on Parallel, visit parallel.la\\nFollow Cadence13 at @cadence13\\nFollow Patti Smith at @thisispattismith\\nFollow Flea at @flea333\\n \\nTo learn more about listener data and our privacy practices visit: https://www.audacyinc.com/privacy-policy\\n  \\n Learn more about your ad choices. Visit https://podcastchoices.com/adchoices", "trackId":1000607661173, "trackName":"Patti Smith", "artistIds":[], "shortDescription":"", "collectionViewUrl":"https://itunes.apple.com/us/podcast/this-little-light/id1678378239?mt=2&uo=4", "trackViewUrl":"https://podcasts.apple.com/us/podcast/patti-smith/id1678378239?i=1000607661173&uo=4", "trackTimeMillis":2653000, "contentAdvisoryRating":"Explicit", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/60x60bb.jpg", "releaseDate":"2023-04-06T07:01:00Z", "feedUrl":"https://feeds.megaphone.fm/this-little-light", "episodeUrl":"https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chtbl.com/track/42D75/traffic.megaphone.fm/CAD9399940052.mp3?updated=1680663106", "kind":"podcast-episode", "wrapperType":"podcastEpisode"}, \n{"country":"USA", "previewUrl":"https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chtbl.com/track/42D75/traffic.megaphone.fm/CAD3340510551.mp3?updated=1680127825", "artworkUrl160":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/160x160bb.jpg", "episodeFileExtension":"mp3", "episodeContentType":"audio", "closedCaptioning":"none", "collectionId":1678378239, "collectionName":"This Little Light", "artworkUrl600":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/600x600bb.jpg", "genres":[{"name":"Music Interviews", "id":"1525"}], "episodeGuid":"1726d660-ca86-11ed-bc57-df468bf305c7", \n"description":"Finneas’ music education and evolution, from 1. Realizing music could be a career after seeing Green Day in concert at age 11 → 2. Falling in love with music as a kid in the backseat of his parents’ minivan → 3. Learning his first song on piano to impress a girl → 4. Forming a band with his high school friends and recording one of their first songs with his sister Billie Eilish → 5. Signing their first record deal at age 18 and 13 respectively → 6. Evolving into a producer → 7. Finneas’ advice to aspiring musicians\\n\\nAcademy Award- and GRAMMY Award-winning singer, songwriter, multi-instrumentalist, and composer FINNEAS has quietly emerged as an unassumingly ubiquitous presence in popular music and culture. He introduced a heartfelt and hypnotic style on 2019’s debut Blood Harmony EP highlighted by the gold-certified “Let’s Fall in Love for the Night.” 2021 saw him unveil his full-length debut, The Optimist [Interscope Records]. It arrived to widespread acclaim from Rolling Stone, DIY, The Line of Best Fit, and NME. At the same time, he landed on the covers of publications such as V Man, L’Officiel Hommes USA, Billboard, and Mix Magazine and late-night television shows a la Tonight Show Starring Jimmy Fallon and Jimmy Kimmel LIVE!. He packed houses on headline tours and performed at festivals such as Coachella. His catalog grew to encompass popular collaborations with Ashe, Ringo Starr, and Lizzy McAlpine in addition to producing and/or co-writing tracks Justin Bieber, Halsey, Demi Lovato, Kid Cudi, girl in red, James Bay, Selena Gomez, Camila Cabello, and Tove Lo. He achieved stratospheric success for his work with his sister Billie Eilish, including eight GRAMMY Awards, headline sets at Coachella and Glastonbury, and an Academy Award and a Golden Globe Award both in the category of “Best Original Song” for “No Time To Die” from No Time To Die—which he co-wrote and co-produced. He expanded his oeuvre as a sought-after composer. His filmography boasts original scores for HBO Max’s award-winning The Fallout and BJ Novak’s Vengeance. For the Disney PIXAR animated hit Turning Red, he and Billie wrote all of the music for the film’s boyband 4*Town. Not to mention, he produced the tracks, contributed vocals, and inhabited the role of Jesse. FINNEAS continues to evolve, expand, and engage in 2023 and beyond.\\n\\nFollow Silverlake Conservatory of Music at @silverlake_conservatory \\nFor more information on Parallel, visit parallel.la\\nFollow Cadence13 at @cadence13\\nFollow Finneas at @finneas \\nFollow Flea at @flea333\\n \\nTo learn more about listener data and our privacy practices visit: https://www.audacyinc.com/privacy-policy\\n  \\n Learn more about your ad choices. Visit https://podcastchoices.com/adchoices", "trackId":1000606556604, "trackName":"Finneas", "artistIds":[], "shortDescription":"", "collectionViewUrl":"https://itunes.apple.com/us/podcast/this-little-light/id1678378239?mt=2&uo=4", "trackViewUrl":"https://podcasts.apple.com/us/podcast/finneas/id1678378239?i=1000606556604&uo=4", "trackTimeMillis":3679000, "contentAdvisoryRating":"Explicit", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/60x60bb.jpg", "releaseDate":"2023-03-30T07:05:00Z", "feedUrl":"https://feeds.megaphone.fm/this-little-light", "episodeUrl":"https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chtbl.com/track/42D75/traffic.megaphone.fm/CAD3340510551.mp3?updated=1680127825", "kind":"podcast-episode", "wrapperType":"podcastEpisode"}, \n{"country":"USA", "previewUrl":"https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chtbl.com/track/42D75/traffic.megaphone.fm/CAD3099037887.mp3?updated=1680127893", "artworkUrl160":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/160x160bb.jpg", "episodeFileExtension":"mp3", "episodeContentType":"audio", "closedCaptioning":"none", "collectionId":1678378239, "collectionName":"This Little Light", "artworkUrl600":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/600x600bb.jpg", "genres":[{"name":"Music Interviews", "id":"1525"}], "episodeGuid":"1819a5f2-ca86-11ed-bc57-2766a155c576", \n"description":"Rick Rubin’s music education and evolution, from 1. Falling in love with the Beatles’ Rock and Roll Music at three or four years old and chasing that feeling of transcendence the rest of his life → 2. Growing up in “uncool” Long Island and liking all genres without caring what anyone thought → 3. Rick’s taste evolving and recording with his high school noisy punk rock band, Hose → 4. Intro to hip hop at NYU, buying records and going to Negril → 5. Evolving into a producer who approaches music as a fan, not a musician → 6. Rick’s advice to aspiring musicians\\n \\nRick Rubin is a nine-time GRAMMY Award-winning producer, named one of the 100 most influential people in the world by TIME and the most successful producer in any genre by Rolling Stone. The author of the book The Creative Act: A Way of Being, he has collaborated with artists from Tom Petty to Adele, Johnny Cash to the Red Hot Chili Peppers, Beastie Boys to Slayer, Kanye West to the Strokes, and System of a Down to Jay-Z.\\n\\nFollow Silverlake Conservatory of Music at @silverlake_conservatory \\nFor more information on Parallel, visit parallel.la\\nFollow Cadence13 at @cadence13\\nFollow Rick Rubin at @rickrubin \\nFollow Flea at @flea333\\n \\nTo learn more about listener data and our privacy practices visit: https://www.audacyinc.com/privacy-policy\\n  \\n Learn more about your ad choices. Visit https://podcastchoices.com/adchoices", "trackId":1000606556393, "trackName":"Rick Rubin", "artistIds":[], "shortDescription":"", "collectionViewUrl":"https://itunes.apple.com/us/podcast/this-little-light/id1678378239?mt=2&uo=4", "trackViewUrl":"https://podcasts.apple.com/us/podcast/rick-rubin/id1678378239?i=1000606556393&uo=4", "trackTimeMillis":2351000, "contentAdvisoryRating":"Explicit", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/60x60bb.jpg", "releaseDate":"2023-03-30T07:01:00Z", "feedUrl":"https://feeds.megaphone.fm/this-little-light", "episodeUrl":"https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chtbl.com/track/42D75/traffic.megaphone.fm/CAD3099037887.mp3?updated=1680127893", "kind":"podcast-episode", "wrapperType":"podcastEpisode"}, \n{"country":"USA", "previewUrl":"https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chtbl.com/track/42D75/traffic.megaphone.fm/CAD8556787702.mp3?updated=1679428256", "artworkUrl160":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/160x160bb.jpg", "episodeFileExtension":"mp3", "episodeContentType":"audio", "closedCaptioning":"none", "collectionId":1678378239, "collectionName":"This Little Light", "artworkUrl600":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/600x600bb.jpg", "genres":[{"name":"Music Interviews", "id":"1525"}], "episodeGuid":"ff024fae-c820-11ed-bfc9-afb1f5412c09", \n"description":"Hosted by Flea, founding member and bassist of the Red Hot Chili Peppers, This Little Light is a podcast about falling in love with music. Flea interviews musical guests from all genres to discuss the teachers who guided them, the influences that inspired them, and how the lessons they learned as young musicians have shaped their creativity, resilience, and careers. This Little Light, a production of Cadence13 and Parallel, launching on March 30 with new episodes dropping weekly, is available for free wherever you get your podcasts.\\n \\nTo learn more about listener data and our privacy practices visit: https://www.audacyinc.com/privacy-policy\\n  \\n Learn more about your ad choices. Visit https://podcastchoices.com/adchoices", "trackId":1000605224134, "trackName":"Introducing This Little Light with Flea", "artistIds":[], "shortDescription":"", "collectionViewUrl":"https://itunes.apple.com/us/podcast/this-little-light/id1678378239?mt=2&uo=4", "trackViewUrl":"https://podcasts.apple.com/us/podcast/introducing-this-little-light-with-flea/id1678378239?i=1000605224134&uo=4", "trackTimeMillis":90000, "contentAdvisoryRating":"Explicit", "artworkUrl60":"https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/f6/cf/66/f6cf66f5-8696-1903-f3b3-e95c507c8e9c/mza_5620205623101925377.jpg/60x60bb.jpg", "releaseDate":"2023-03-21T19:45:00Z", "feedUrl":"https://feeds.megaphone.fm/this-little-light", "episodeUrl":"https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chtbl.com/track/42D75/traffic.megaphone.fm/CAD8556787702.mp3?updated=1679428256", "kind":"podcast-episode", "wrapperType":"podcastEpisode"}]\n}\n\n\n';
