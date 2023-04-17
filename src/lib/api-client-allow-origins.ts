export const apiClientAllowOrigins = (url: string) =>
	fetch(`https://api.allorigins.win/get?url=${url}`)
		.then(response => {
			if (response.ok) return response.json();
			throw new Error('Network response was not ok.');
		})
		.then(data => data.contents);
