// Select DOM elements
const image = document.getElementById('animatedImage');
const triggerButton = document.getElementById('triggerAnimation');
const animationSelect = document.getElementById('animationType');
const saveButton = document.getElementById('savePreference');
const currentAnimationDisplay = document.getElementById('currentAnimation');

// Function to apply animation
function applyAnimation(animationType) {
    // Remove existing animation classes
    image.classList.remove('bounce', 'rotate', 'scale');
    // Add the selected animation class
    image.classList.add(animationType);
    // Update display
    currentAnimationDisplay.textContent = animationType.charAt(0).toUpperCase() + animationType.slice(1);
    // Remove the animation class after it completes to allow re-triggering
    setTimeout(() => {
        image.classList.remove(animationType);
    }, 800); // Match the longest animation duration
}

// Function to load preferences from localStorage
function loadPreferences() {
    const savedAnimation = localStorage.getItem('preferredAnimation');
    if (savedAnimation) {
        animationSelect.value = savedAnimation;
        currentAnimationDisplay.textContent = savedAnimation.charAt(0).toUpperCase() + savedAnimation.slice(1);
    }
}

// Function to save preferences to localStorage
function savePreferences() {
    const selectedAnimation = animationSelect.value;
    localStorage.setItem('preferredAnimation', selectedAnimation);
    alert('Animation preference saved!');
}

// Event listener for triggering animation
triggerButton.addEventListener('click', () => {
    const selectedAnimation = animationSelect.value;
    applyAnimation(selectedAnimation);
});

// Event listener for saving preferences
saveButton.addEventListener('click', savePreferences);

// Load preferences when the page loads
document.addEventListener('DOMContentLoaded', loadPreferences);