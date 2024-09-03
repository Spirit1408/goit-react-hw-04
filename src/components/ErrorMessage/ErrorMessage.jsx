import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
	return <p className={css.error}>An error occured. Try to reload the page</p>;
}
