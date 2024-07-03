import { updateFlag, changeLanguage, setLanguageByBrowser } from './languageUtils.js';

document.addEventListener('DOMContentLoaded', () => {
    setLanguageByBrowser();

    document.getElementById('flag-fr').addEventListener('click', () => {
        changeLanguage('fr');
        updateFlag('fr')
    });
    document.getElementById('flag-en').addEventListener('click', () => {
        changeLanguage('en');
        updateFlag('en')
    });
});