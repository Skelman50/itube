import { html, render } from "lit-html";

const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBTN = document.getElementById("jsPlayButton");
const volumeBTN = document.getElementById("jsVolumeBTN");
const fullScrnBTN = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const volumeRange = document.getElementById("jsVolume");
const views = document.getElementById("jsViews");

const registerView = async () => {
  const videoID = window.location.href.split("/videos/")[1];
  await fetch(`/api/${videoID}/view`);
  const countView = +views.innerText;
  views.innerText = `${countView + 1} `;
};

const htmlString = (btn, className) => {
  render(
    html`
      <i class="${className}"></i>
    `,
    btn
  );
};

const handlePlayClick = () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
    htmlString(playBTN, "fas fa-pause");
  } else {
    videoPlayer.pause();
    htmlString(playBTN, "fas fa-play");
  }
};

const handleVolumeClick = () => {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    htmlString(volumeBTN, "fas fa-volume-up");
    volumeRange.value = videoPlayer.volume;
  } else {
    volumeRange.value = 0;
    videoPlayer.muted = true;
    htmlString(volumeBTN, "fas fa-volume-mute");
  }
};

const exitFullScreenClick = () => {
  htmlString(fullScrnBTN, "fas fa-expand");
  fullScrnBTN.addEventListener("click", goFullScreenClick);
  document.webkitExitFullscreen();
};

const goFullScreenClick = () => {
  videoContainer.webkitRequestFullscreen();
  htmlString(fullScrnBTN, "fas fa-compress");
  fullScrnBTN.removeEventListener("click", goFullScreenClick);
  fullScrnBTN.addEventListener("click", exitFullScreenClick);
};

const formatDate = seconds => {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (totalSeconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }

  return `${hours}:${minutes}:${totalSeconds}`;
};

const getCurrentTime = () => {
  const currentTimeString = formatDate(Math.floor(videoPlayer.currentTime));
  currentTime.innerText = currentTimeString;
};

const setTotalTime = () => {
  const totalTimeString = formatDate(videoPlayer.duration);
  totalTime.innerText = totalTimeString;
  setInterval(getCurrentTime, 1000);
};

const handleDrag = event => {
  const {
    target: { value }
  } = event;
  videoPlayer.volume = value;
};

const handleEnded = () => {
  registerView();
  videoPlayer.currentTime = 0;
  htmlString(playBTN, "fas fa-play");
};

const init = () => {
  videoPlayer.volume = 0.5;
  videoPlayer.currentTime = 670;
  playBTN.addEventListener("click", handlePlayClick);
  volumeBTN.addEventListener("click", handleVolumeClick);
  fullScrnBTN.addEventListener("click", goFullScreenClick);
  videoPlayer.addEventListener("loadedmetadata", setTotalTime);
  videoPlayer.addEventListener("ended", handleEnded);
  volumeRange.addEventListener("input", handleDrag);
};

if (videoContainer) {
  init();
}
