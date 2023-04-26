// // import { invoke } from "@tauri-apps/api/tauri";
import React, { useEffect, useState } from "react";
import songs from "./assets/songs.json";
import Player from "./components/Player";

export default function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(1);

  useEffect(
    () => setNextSongIndex((currentSongIndex + 1) % songs.length),
    [currentSongIndex]
  );

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

