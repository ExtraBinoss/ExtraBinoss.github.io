
export function updateFlag() {
    const flagFR = document.getElementById('flag-fr');
    const flagEN = document.getElementById('flag-en');
    var lang = document.documentElement.lang;

    if (lang === 'fr') {
        flagFR.style.display = 'none'; // Hide French flag
        flagEN.style.display = 'inline'; // Show English flag
    } else if (lang === 'en') {
        flagFR.style.display = 'inline'; // Show French flag
        flagEN.style.display = 'none'; // Hide English flag
    }
}

export function changeLanguage(lang) {
    console.log('Changing language to:', lang);
    //fetch(`translations/${lang}.json`)
    fetch(`/ExtraBinoss.github.io/translations/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll('[data-translate-key]').forEach(element => {
                const key = element.getAttribute('data-translate-key');
                if (translations[key]) {
                    element.innerHTML = translations[key];
                }
            });
        })
        .catch(error => console.error('Error loading the translation file:', error));
}