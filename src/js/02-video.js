import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("iframe");

const player = new Player(iframe);

const onPlay = function (e) {
    localStorage.setItem('video-current-time', JSON.stringify(e.seconds));
    };

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem('video-current-time'));