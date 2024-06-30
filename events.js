import { updateFlag, changeLanguage } from './languageUtils.js';
let lang = document.documentElement.lang;
let canClick = true;
updateFlag();

document.addEventListener('click', function() {
    if (!canClick) return; // Exit if clicking is currently disabled
    canClick = false; // Disable further clicks
    setTimeout(() => canClick = true, 200); // Re-enable clicking after 200ms

    lang = lang === 'en' ? 'fr' : 'en'; // Toggle language globally
    document.documentElement.lang = lang; // Update the document's language attribute
    updateFlag(); // Call updateFlag function to change the flag based on the new language
});

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('flag-fr').addEventListener('click', () => changeLanguage('fr'));
    document.getElementById('flag-en').addEventListener('click', () => changeLanguage('en'));
});