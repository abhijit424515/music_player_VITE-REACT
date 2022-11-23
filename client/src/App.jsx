import React, { useEffect, useState } from "react";
import songs from "./assets/songs.json";
import Player from "./components/Player";

function App() {
	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	const [nextSongIndex, setNextSongIndex] = useState(1);
	// for efficient rendering, I am using useState hooks

	useEffect(() => {
		setNextSongIndex(() => (currentSongIndex + 1) % songs.length);
	}, [currentSongIndex]);

	return (
		<div className="App">
			<Player
				currentSongIndex={currentSongIndex}
				setCurrentSongIndex={setCurrentSongIndex}
				nextSongIndex={nextSongIndex}
				songs={songs}
			/>
		</div>
	);
}

export default App;
