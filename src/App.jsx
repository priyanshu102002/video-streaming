import { useRef } from 'react'
import './App.css'
import VideoJS from './Videojs'

function App() {

  const playerRef = useRef(null)
  const videoLink = "http://localhost:8000/uploads/courses/a5ee2a58-2062-4790-ac22-57c958edd5b5/index.m3u8"

  const videoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: videoLink,
      type: 'application/x-mpegURL'
    }]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <div>
        <h1>Video player</h1>
      </div>

      <VideoJS
        options={videoPlayerOptions}
        onReady={handlePlayerReady}
      />
    </>
  )
}

export default App
