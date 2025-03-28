function showGallery(galleryId) {
    const galleries = document.querySelectorAll('.gallery');
    galleries.forEach(gallery => {
        gallery.classList.add('hidden');
    });
    const selectedGallery = document.getElementById(galleryId);
    selectedGallery.classList.remove('hidden');
}

function toggleGallery() {
    const galleries = document.querySelectorAll('.gallery');
    galleries.forEach(gallery => {
        gallery.classList.toggle('hidden');
    });
}

function openModal(image) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = image.src; // Set the source of the modal image to the clicked image
    modal.style.display = 'flex'; // Show the modal
}

function closeModal() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none'; // Hide the modal
    }