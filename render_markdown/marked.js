document.addEventListener('DOMContentLoaded', () => {
    // Find the script tag that includes marked.js
    const scriptTag = document.currentScript || document.querySelector('script[src="../render_markdown/marked.js"]');

    // Read the markdown path and element ID from data attributes
    const markdownPath = scriptTag.getAttribute('data-markdown-path');
    const elementId = scriptTag.getAttribute('data-element-id');

    // Call renderMarkdown with the specified parameters
    if (markdownPath && elementId) {
        renderMarkdown(markdownPath, elementId);
    } else {
        console.error('Markdown path or element ID not specified.');
    }
});

function renderMarkdown(path, elementId) {
    fetch(path)
        .then(response => response.text())
        .then(text => {
            document.getElementById(elementId).innerHTML = marked.parse(text);
        })
        .catch(err => console.error('Error fetching Markdown:', err));
}