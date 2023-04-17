import vimPlayer from '@vimeo/player';
import lodashTrottle from 'lodash.throttle';

const TIME_PLAYER= 'videoplayer-current-time';
const iframeRef = document.querySelector('iframe');
const player = new vimPlayer(iframeRef);

player.on('timeupdate', lodashTrottle(onPlay,1000));

function onPlay(event) {
	localStorage.setItem(TIME_PLAYER, event.seconds);
};

setCurrentTime();

function setCurrentTime() {
	if (!localStorage.getItem(TIME_PLAYER)) {
		return;
	};

	player.setCurrentTime(localStorage.getItem(TIME_PLAYER));
};

player.on('play', function() {
	console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
	console.log('title:', title);
});
