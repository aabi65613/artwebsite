/* ============================================ */
/* JOYDEV BALA ART GALLERY - JAVASCRIPT */
/* This file handles the image modal (popup) functionality and scroll animations */
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
/* SEQUENTIAL SCROLL-BASED TEXT REVEAL ANIMATION */
/* ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about-section');
    const textLines = document.querySelectorAll('.text-reveal-line');
    
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const viewportHeight = (window.innerHeight || document.documentElement.clientHeight);
        // Trigger the reveal when the element is 80% up the screen
        return rect.top < viewportHeight * 0.8;
    }

    // Function to handle the sequential reveal animation on scroll
    function sequentialRevealOnScroll() {
        if (!aboutSection) return;

        // Iterate through all lines
        textLines.forEach((line, index) => {
            // Only reveal if not already visible AND the previous line is visible (for sequential effect)
            if (!line.classList.contains('is-visible')) {
                const previousLineIsVisible = index === 0 || textLines[index - 1].classList.contains('is-visible');
                
                if (previousLineIsVisible && isElementInViewport(line)) {
                    // Reveal the line immediately
                    line.classList.add('is-visible');
                }
            }
        });
        
        // Optional: Remove the scroll listener once all lines are visible
        if (Array.from(textLines).every(line => line.classList.contains('is-visible'))) {
             window.removeEventListener('scroll', sequentialRevealOnScroll);
        }
    }

    // Set up scroll listener
    window.addEventListener('scroll', sequentialRevealOnScroll);
    // Initial check to reveal any lines already in view on load
    sequentialRevealOnScroll();
});

/* ============================================ */
/* GALLERY ITEM INTERACTIVITY (Click/Hover) */
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

    // Remove the scroll-based border glow logic as per user request to revert to original style
    // The hover effect is handled by CSS.
});
