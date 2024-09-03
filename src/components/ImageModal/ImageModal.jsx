import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, image }) {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel="Image Modal"
			className={css.modal}
			overlayClassName={css.overlay}
		>
			<div className={css.imageContainer}>
				<img
					src={image.urls.regular}
					alt={image.description}
					className={css.image}
				/>
			</div>
		</Modal>
	);
}
