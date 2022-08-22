

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


import throttle from 'lodash.throttle';


player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);

function onPlay({ seconds }) {
  localStorage.getItem('videoplayer-current-time', seconds);
}
