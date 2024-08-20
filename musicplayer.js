// musicplayer.js

// Get references to the audio element and control buttons
const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const songTitle = document.getElementById('song-title');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');

// Array of song objects
const songs = [
    { title: 'jhol-coke-studio-pakistan-season-15-maanu-x-annural-khalid', src: '/media/jhol-coke-studio-pakistan-season-15-maanu-x-annural-khalid.mp3' },
    { title: 'tmhari chup or hmara lehja', src: '/media/song1.mp4' },
    
];

let currentSongIndex = 0;

// Update the song title and source
function updateSong() {
    const song = songs[currentSongIndex];
    songTitle.textContent = song.title;
    audio.src = song.src;
    audio.load();
    audio.play();
}

// Play the current song
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    }
});

// Pause the current song
pauseButton.addEventListener('click', () => {
    if (!audio.paused) {
        audio.pause();
    }
});

// Stop the current song
stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});

// Play the previous song
prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSong();
});

// Play the next song
nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSong();
});

// Update the time display
audio.addEventListener('timeupdate', () => {
    const currentTime = Math.floor(audio.currentTime);
    const duration = Math.floor(audio.duration);
    currentTimeDisplay.textContent = formatTime(currentTime);
    durationDisplay.textContent = formatTime(duration);
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Initialize the player with the first song
updateSong();
