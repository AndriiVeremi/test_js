const lazyImages = document.querySelectorAll('img[loading="lazy"]');

lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoaded, { once: true });
})

function onImageLoaded(evt) {
    evt.target.classList.add('appear')
}