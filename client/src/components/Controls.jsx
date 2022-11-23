import React from "react";

import {
	faPlay,
	faPause,
	faArrowLeft,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Controls(controlspackage) {
	return (
		<div className="controls">
			<div className="flexcontainer3">
				<input
					type="range"
					className="slider"
					value={controlspackage.sliderPosition}
					onChange={controlspackage.onChange}
				></input>
			</div>
			<br></br>
			<div className="flexcontainer4">
				<button
					className="skipButton"
					id="skip1"
					onClick={() =>
						controlspackage.setIsPlaying(() => controlspackage.skipSong(false))
					}
				>
					<FontAwesomeIcon icon={faArrowLeft} />
				</button>
				<button
					className="playButton"
					onClick={() =>
						controlspackage.setIsPlaying(() => !controlspackage.isPlaying)
					}
				>
					<FontAwesomeIcon
						icon={controlspackage.isPlaying ? faPlay : faPause}
					/>
				</button>
				<button
					className="skipButton"
					id="skip2"
					onClick={() =>
						controlspackage.setIsPlaying(() => controlspackage.skipSong(true))
					}
				>
					<FontAwesomeIcon icon={faArrowRight} />
				</button>
			</div>
		</div>
	);
}

export default Controls;
