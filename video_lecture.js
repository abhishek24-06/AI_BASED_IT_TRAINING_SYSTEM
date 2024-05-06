document.addEventListener('keydown', function(event) {
    const videoPlayers = document.querySelectorAll('.video-player');
    if (event.code === 'KeyF') {
        videoPlayers.forEach(function(video) {
            if (!document.fullscreenElement) {
                video.requestFullscreen().catch(err => {
                    console.error('Failed to enter fullscreen mode:', err.message);
                });
            } else {
                document.exitFullscreen();
            }
        });
    } else if (event.code === 'Space') {
        videoPlayers.forEach(function(video) {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });
    }
});

document.querySelectorAll('.video-player').forEach(function(video) {
    video.addEventListener('ended', function() {
        const checkbox = video.parentElement.querySelector('input[type="checkbox"]');
        checkbox.checked = true;
        checkbox.disabled = true; // Disabling checkbox after marking it
    });
});
