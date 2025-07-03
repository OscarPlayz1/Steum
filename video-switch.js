const video = document.getElementById("bg-video");
const sources = [
  "video/bgvideo1.mp4",
  "video/bgvideo2.mp4",
  "video/bgmadara2.mp4"
];

let current = 0;

// Fungsi untuk ganti video dengan transisi halus
function switchVideo() {
  video.classList.remove("fade-in");
  video.classList.add("fade-out");

  setTimeout(() => {
    current = (current + 1) % sources.length;
    video.src = sources[current];
    video.load();
    video.play();

    video.classList.remove("fade-out");
    video.classList.add("fade-in");
  }, 1000); // waktu fade-out sama dengan di CSS
}

// Ganti video setiap 10 detik
setInterval(switchVideo, 10000);
