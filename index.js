const thumbnails = document.getElementsByClassName('card')[0];

const playButton = thumbnails.querySelector('.play-button');

thumbnails.addEventListener('mouseover', () => {
    if (playButton) {
        playButton.style.opacity = 1;
        console.log('done')
    }
});

thumbnails.addEventListener('mouseout', () => {
    // playButton.style.display = 'none';
    if (playButton) {
        playButton.style.opacity = 0;
        console.log('done')
    }
});

function toggleSidebar() {
    var card_container = document.querySelector('.card-container');
    var tags = document.querySelector('.tags');
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
    tags.classList.toggle('shifted');
    card_container.classList.toggle('shifted');
    document.body.classList.toggle('sidebar-open');
}