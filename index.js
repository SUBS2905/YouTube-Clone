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