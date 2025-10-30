// Get DOM elements
const thumbnails = document.querySelectorAll('.thumbnail'); // ← Fixed: 'thumbnail', not 'thumnail'
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close'); // ← Fixed: 'closeBtn', not 'closebtn'

// Function to open lightbox
function openLightbox(src) { // ← Fixed: 'src', not 'srcc'
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
}

// Function to close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Add click event listeners to all thumbnails
thumbnails.forEach(thumbnail => { // ← Fixed: 'thumbnail', not 'thumnbail'
    thumbnail.addEventListener('click', () => {
        const largeSrc = thumbnail.getAttribute('data-large');
        openLightbox(largeSrc);
    });
});

// Close lightbox when clicking the X
closeBtn.addEventListener('click', closeLightbox);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});