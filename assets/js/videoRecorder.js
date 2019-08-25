const getByID = id => document.getElementById(id);

const recordContainer = getByID("jsRecordContainer");
const recordBTN = getByID("jsRecordButton");
const videoPreview = getByID("jsVideoPreview");

let streamObject;
let videoRecorder;

const handleVideoData = event => {
  const {
    data: videoFile
  } = event;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(videoFile);
  link.download = "recorded.webm";
  document.body.appendChild(link);
  link.click();
};

const startRecording = () => {
  videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  videoRecorder.addEventListener("dataavailable", handleVideoData);
  recordBTN.addEventListener("click", stopRecording);
};

const stopRecording = async() => {
  recordBTN.removeEventListener("click", stopRecording);
  recordBTN.addEventListener("click", getVideo);
  recordBTN.innerText = "Start recoeding";
  videoPreview.stop();
};

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 }
    });
    videoPreview.srcObject = stream;
    videoPreview.play();
    videoPreview.muted = true;
    recordBTN.innerText = "Stop recording";
    streamObject = stream;
    startRecording(stream);
  } catch (error) {
    console.log(error);
    recordBTN.innerText = `Can't record`;
  } finally {
    recordBTN.removeEventListener("click", getVideo);
  }
};

const init = () => {
  recordBTN.addEventListener("click", getVideo);
};

if (recordContainer) {
  init();
}
