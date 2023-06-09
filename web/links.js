// Intercept all anchor clicks
var links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        if (link.href.startsWith('http://') || link.href.startsWith('https://')) {
            event.preventDefault(); // Prevent the link from opening in the current window
            pws.invokeEvent('openLink', null, link.href);
        }
    });
});