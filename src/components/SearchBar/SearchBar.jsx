import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar({ onSearch }) {
	const handleSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const query = form.elements.query.value;

		if (query === "") {
			toast.error(`Field shouldn't be empty`, { position: "top-right" });
			return;
		}

		onSearch(query);

		form.reset();
	};

	return (
		<header className={css.searchBar}>
			<form className={css.searchForm} onSubmit={handleSubmit}>
				<div className={css.inputContainer}>
					<button className={css.submitBtn} type="submit">
						<IoSearchOutline size={20} />
					</button>
					<input
						className={css.searchInput}
						type="text"
						name="query"
						autoComplete="off"
						placeholder="Search images and photos"
					/>
				</div>
			</form>
		</header>
	);
}
