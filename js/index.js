import galleryItems from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');

const lightboxImage = document.querySelector('.lightbox__image');
const lightboxOverlay = document.querySelector('.lightbox__overlay');

gallery.addEventListener('click', openModal);
lightboxOverlay.addEventListener('click', closeModal);

//создание галер
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
//



//кнопка
const btnClose = document.querySelector(
  ".js-lightbox button[data-action='close-lightbox']",
);
//

//
btnClose.addEventListener('click', closeModal);

function openModal(event) {
  if (event.target.getAttribute('class') != 'gallery__image') {
    return;
  }
  event.preventDefault();
  lightbox.classList.add('is-open');
  lightboxImage.src = event.target.dataset.source;
  lightboxImage.alt = event.target.alt;
}
//

//Закрытие модалки
function closeModal({type, code}) {
  if (type === 'keydown') {
  } 
  else {
    clearImageAtributOnModal();
  }
}

const clearImageAtributOnModal = () => {
  lightbox.classList.remove('is-open');
};
//

