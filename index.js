import galleryItems from './gallery-items';

const gallery = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');


const imageList = galleryItems
  .map(({ original, preview, description }) => {
    return `<li class="gallery__item">
            <a class="gallery__link"
            href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a></li>`;
  })
  .join('');

gallery.insertAdjacentHTML('afterbegin', imageList);
