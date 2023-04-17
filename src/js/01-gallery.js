import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const listGalleryRef = document.querySelector('.gallery');
const newImages = creatingNewImages(galleryItems);

listGalleryRef.innerHTML = newImages;
listGalleryRef.addEventListener('click', onClickImage);

function creatingNewImages(items) {
	return items.map(({ original, preview, description }) =>
		`<li class='gallery__item'>
			<a class='gallery__link' href='${original}'>
				<img 
					class='gallery__image'
					src='${preview}'
					alt='${description}'
				/>
			</a>
		</li>`
	).join('');
};

function onClickImage(event) {
	event.preventDefault();

	if (!event.target.classList.contains('gallery__image')) {
		return;
	};
};

const instanceLightBox = new SimpleLightbox('a', {
	captionsData: 'alt',
	captionsDelay: 250,
});

console.log(galleryItems);
