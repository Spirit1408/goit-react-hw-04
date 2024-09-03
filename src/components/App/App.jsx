import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { fetchImages } from "../../unsplash-api";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [selectedImage, setSelectedImage] = useState(null);

	const handleSearch = async (query) => {
		try {
			setImages([]);
			setLoading(true);
			setError(false);
			setQuery(query);
			setPage(1);

			const { images, totalPages } = await fetchImages(query);

			setImages(images);
			setTotalPages(totalPages);
		} catch (error) {
			setError(true);
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	const loadMore = async () => {
		try {
			setLoading(true);
			const nextPage = page + 1;
			const { images } = await fetchImages(query, nextPage);

			setImages((prevImages) => [...prevImages, ...images]);
			setPage(nextPage);

			if (nextPage >= totalPages) {
				toast.success("No more images to show!");
			}
		} catch (error) {
			setError(true);
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	const handleClickOnImage = (image) => {
		setSelectedImage(image);
	};

	const closeModal = () => {
		setSelectedImage(null);
	};

	return (
		<>
			<Toaster />

			<SearchBar onSearch={handleSearch} />

			{error && <ErrorMessage />}

			{images.length > 0 && (
				<ImageGallery
					items={images}
					query={query}
					handleClick={handleClickOnImage}
				/>
			)}

			{loading && <Loader />}

			{images.length > 0 && page < totalPages && !loading && (
				<LoadMoreBtn onClick={loadMore} />
			)}

			{selectedImage && (
				<ImageModal
					isOpen={!!selectedImage}
					onClose={closeModal}
					image={selectedImage}
				/>
			)}
		</>
	);
}
