export const apiClient = (url: string) =>
	fetch(url)
		.then(response => {
			if (response.ok) return response.json();
			throw new Error('Network response was not ok.');
		})
		.then(data => data);
