const overlay = document.getElementById('overlay');
  const fullImage = document.getElementById('fullImage');

  document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
      fullImage.src = img.src;
      overlay.classList.add('active');
    });
  });

  function closeImage() {
    overlay.classList.remove('active');
    fullImage.src = '';
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === fullImage) {
      closeImage();
    }
  });

    window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});