// Fetch video data from a server or database
function fetchVideos() {
  // Simulated data for demonstration purposes
  const videos = [
    { id: 1, title: "Video 1", url: "video1.mp4" },
    { id: 2, title: "Video 2", url: "video2.mp4" },
    { id: 3, title: "Video 3", url: "video3.mp4" },
  ];

  return Promise.resolve(videos);
}

// Display the videos on the website
function displayVideos(videos) {
  const videosSection = document.getElementById("videos");

  videos.forEach((video) => {
    const videoElement = document.createElement("div");
    videoElement.innerHTML = `
      <h3>${video.title}</h3>
      <video src="${video.url}" controls></video>
    `;
    videosSection.appendChild(videoElement);
  });
}

// Fetch and display the latest videos
function showLatestVideos() {
  fetchVideos()
    .then((videos) => {
      displayVideos(videos);
    })
    .catch((error) => {
      console.error("Error fetching videos:", error);
    });
}

// Call the function to show the latest videos on page load
window.addEventListener("DOMContentLoaded", showLatestVideos);
