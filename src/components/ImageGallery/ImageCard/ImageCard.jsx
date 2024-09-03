import css from "./ImageCard.module.css";
import { PiUserSquareFill } from "react-icons/pi";
import { BsDownload } from "react-icons/bs";

export default function ImageCard({ item, clickOnImage }) {
	console.log(item);
	return (
		<div className={css.cardWrapper}>
			<div className={css.imageWrapper}>
				<img
					className={css.image}
					src={item.urls.small}
					alt={item.description}
					onClick={() => clickOnImage(item)}
				/>
			</div>
			<div className={css.attrsListWrapper}>
				<ul className={css.attrsList}>
					<li>
						<h3 className={css.title}>Likes</h3>
						<p className={css.text}>{item.likes}</p>
					</li>
					<li>
						<h3 className={css.title}>Author</h3>
						<p className={css.text}>
							{item.user.first_name} {item.user.last_name}
						</p>
					</li>
					<li>
						<h3 className={css.title}>Profile</h3>
						<a
							href={item.user.links.html}
							target="_blank"
							rel="noopener noreferrer"
						>
							<PiUserSquareFill size={25} />
						</a>
					</li>
					<li>
						<h3 className={css.title}>Download</h3>
						<a
							href={item.links.download}
							target="_blank"
							rel="noopener noreferrer"
						>
							<BsDownload size={20} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
