document.getElementById('dark-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
});

document.getElementById('current-image').addEventListener('click', function() {
    document.getElementById('zoom-view').style.display = 'block';
    document.getElementById('zoom-view').innerHTML = '<img src="' + this.src + '" alt="' + this.alt + '">';
});

document.addEventListener('click', function(event) {
    if (event.target !== document.getElementById('current-image')) {
        document.getElementById('zoom-view').style.display = 'none';
    }
});
