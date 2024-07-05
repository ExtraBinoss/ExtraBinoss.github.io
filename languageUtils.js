export function updateFlag(lang) {
    const flagFR = document.getElementById('flag-fr');
    const flagEN = document.getElementById('flag-en');

    console.log('Updating flag to:', lang);
    if (lang === 'fr') {
        flagFR.style.display = 'none'; // Hide French flag
        flagEN.style.display = 'inline'; // Show English flag
    } else if (lang === 'en') {
        flagFR.style.display = 'inline'; // Show French flag
        flagEN.style.display = 'none'; // Hide English flag
    } else {
        flagEN.style.display = 'inline'; // Show English flag
        flagFR.style.display = 'none'; // Hide French flag
    }
}

export function changeLanguage(lang) {
    console.log('Changing language to:', lang);
    //fetch(`translations/${lang}.json`)
    fetch(`https://extrabinoss.github.io/translations/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll('[data-translate-key]').forEach(element => {
                const keys = element.getAttribute('data-translate-key').split('.');
                let translation = translations;
                keys.forEach(key => {
                    if (translation[key]) {
                        translation = translation[key];
                    } else {
                        translation = null;
                        return;
                    }
                });
                if (translation) {
                    element.innerHTML = translation;
                }
            });
        })
        .catch(error => console.error('Error loading the translation file:', error));
}

// export function changeLanguage(lang) {
//     console.log('Changing language to:', lang);
//     // Try fetching using the local path first
//     fetch(`translations/${lang}.json`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Local fetch failed');
//             }
//             return response.json();
//         })
//         .then(translations => {
//             applyTranslations(translations);
//         })
//         .catch(error => {
//             console.error('Error loading the local translation file:', error);
//             // If the local fetch fails, try fetching from the GitHub Pages path
//             fetch(`/ExtraBinoss.github.io/translations/${lang}.json`)
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error('GitHub Pages fetch failed');
//                     }
//                     return response.json();
//                 })
//                 .then(translations => {
//                     applyTranslations(translations);
//                 })
//                 .catch(error => console.error('Error loading the GitHub Pages translation file:', error));
//         });
// }

// function applyTranslations(translations) {
//     document.querySelectorAll('[data-translate-key]').forEach(element => {
//         const keys = element.getAttribute('data-translate-key').split('.');
//         let translation = translations;
//         keys.forEach(key => {
//             if (translation[key]) {
//                 translation = translation[key];
//             } else {
//                 translation = null;
//                 return;
//             }
//         });
//         if (translation) {
//             element.innerHTML = translation;
//         }
//     });
// }
export function setLanguageByBrowser() {
    const userLang = navigator.language || navigator.userLanguage; // Get browser's language
    let lang = userLang.startsWith('fr') ? 'fr' : 'en'; // Default to English if not French

    document.documentElement.lang = lang; // Set the document's language attribute
    console.log('Setting language to:', lang);
    changeLanguage(lang); // Use the existing changeLanguage function to apply translations
    updateFlag(); // Update the flag display based on the detected language
}