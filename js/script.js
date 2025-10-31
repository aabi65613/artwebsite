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
    console.log('Scroll animations powered by AOS library - repeating on scroll!');
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
/* SCROLL-BASED TEXT REVEAL ANIMATION */
/* ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-section');
    const textLines = document.querySelectorAll('.text-reveal-line');
    
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left >= 0 &&
            rect.bottom >= 0 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the reveal animation
    function revealTextOnScroll() {
        if (!aboutSection) return;

        // Check if the about section is visible
        const sectionRect = aboutSection.getBoundingClientRect();
        const sectionVisible = sectionRect.top < (window.innerHeight - 100);

        if (sectionVisible) {
            textLines.forEach((line, index) => {
                // Use a small delay for the pop-up effect
                const delay = index * 100; // 100ms delay between each line

                // Only reveal if not already visible
                if (!line.classList.contains('is-visible')) {
                    setTimeout(() => {
                        line.classList.add('is-visible');
                    }, delay);
                }
            });
            // Remove the scroll listener once all lines are visible
            if (Array.from(textLines).every(line => line.classList.contains('is-visible'))) {
                 window.removeEventListener('scroll', revealTextOnScroll);
            }
        }
    }

    // Initial check and set up scroll listener
    revealTextOnScroll();
    window.addEventListener('scroll', revealTextOnScroll);
});

/* ============================================ */
/* COLOR-CHANGING BORDER EFFECT ON CLICK/SCROLL */
/* ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Function to handle the click effect
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Apply a temporary 'clicked' class for visual feedback
            item.classList.add('clicked');
            
            // Remove the class after a short delay
            setTimeout(() => {
                item.classList.remove('clicked');
            }, 300); // 300ms duration for the click effect
        });
    });

    // Function to apply 'in-view' class for continuous border animation on scroll
    function checkGalleryItemsVisibility() {
        galleryItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            // Check if the item is at least partially in the viewport
            const isVisible = (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.bottom >= 0
            );

            if (isVisible) {
                item.classList.add('in-view');
            } else {
                // Optionally remove the class when out of view to save resources
                item.classList.remove('in-view');
            }
        });
    }

    // Initial check and set up scroll listener
    checkGalleryItemsVisibility();
    window.addEventListener('scroll', checkGalleryItemsVisibility);
});
