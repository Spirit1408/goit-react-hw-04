import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (query, page = 1) => {
	const response = await axios.get("/search/photos", {
		params: {
			query,
			per_page: 12,
			page,
			orientation: "landscape",
		},
		headers: {
			Authorization: `Client-ID 1qBuXkzbud4-K2PGZcYpqifewpMk7eQ4mHbh1BT2Wxg`,
		},
	});

	return {
		images: response.data.results,
		totalPages: Math.ceil(response.headers.get("X-Total") / 12),
	};
};
