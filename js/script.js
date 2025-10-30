/* ============================================ */
/* JOYDEV BALA ART GALLERY - JAVASCRIPT */
/* This file handles the image modal (popup) functionality */
/* ============================================ */

/**
 * Opens the modal and displays the clicked image in full size
 * @param {string} imageSrc - The path to the image file
 */
function openModal(imageSrc) {
    // Get the modal element
    var modal = document.getElementById('imageModal');
    // Get the image element inside the modal
    var modalImg = document.getElementById('modalImage');
    
    // Set the modal image source to the clicked image
    modalImg.src = imageSrc;
    // Display the modal
    modal.style.display = 'block';
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
}

/**
 * Closes the modal and hides the full-size image
 */
function closeModal() {
    // Get the modal element
    var modal = document.getElementById('imageModal');
    // Hide the modal
    modal.style.display = 'none';
    
    // Restore body scrolling
    document.body.style.overflow = 'auto';
}

/**
 * Close modal when pressing the Escape key
 */
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.key === 'Esc') {
        closeModal();
    }
});

/* ============================================ */
/* SMOOTH SCROLL ANIMATION (Optional) */
/* Adds smooth scrolling when clicking on links */
/* ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    console.log('Joydev Bala Art Gallery - Website Loaded Successfully!');
});


/* ============================================ */
/* FARMER MOTION FEATURE */
/* Animated farmer character walking across the page */
/* ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    const farmer = document.getElementById('farmer');
    
    if (farmer) {
        // Ensure the animation runs smoothly
        farmer.style.willChange = 'transform, left';
        
        // Optional: Add interactivity - farmer stops when user hovers over it
        farmer.addEventListener('mouseenter', function() {
            farmer.style.animationPlayState = 'paused';
        });
        
        farmer.addEventListener('mouseleave', function() {
            farmer.style.animationPlayState = 'running';
        });
        
        console.log('Farmer motion feature activated!');
    }
});

/* ============================================ */
/* FARMER MOTION FEATURE */
/* Animated farmer character walking across the page */
/* ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    const farmer = document.getElementById('farmer');
    
    if (farmer) {
        // Ensure the animation runs smoothly
        farmer.style.willChange = 'transform, left';
        
        // Optional: Add interactivity - farmer stops when user hovers over it
        farmer.addEventListener('mouseenter', function() {
            farmer.style.animationPlayState = 'paused';
        });
        
        farmer.addEventListener('mouseleave', function() {
            farmer.style.animationPlayState = 'running';
        });
        
        console.log('Farmer motion feature activated!');
    }
});
