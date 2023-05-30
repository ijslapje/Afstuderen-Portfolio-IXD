const images = document.querySelectorAll('.slideshow img');
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

images.forEach((image) => {
  image.addEventListener('click', () => {
    modal.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
    modal.style.display = 'block';
  });
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});
