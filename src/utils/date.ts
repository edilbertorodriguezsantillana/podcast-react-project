export const now = Date.now();
export const MILLISECONDS_IN_24_HOURS = 24 * 60 * 60 * 1000;

export const msToTime = (ms: number) => {
	try {
		return new Date(ms).toISOString().slice(11, 16);
	} catch (e) {
		return 'No duration available';
	}
};
