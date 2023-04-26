import React, { useEffect, useRef, useState } from "react";
import songs from "../assets/songs.json";
import Controls from "./Controls";

type Props = {
  currentSongIndex: number;
  setCurrentSongIndex: React.Dispatch<React.SetStateAction<number>>;
  nextSongIndex: number;
  songs: any;
};

function Player(props: Props) {
  const MUSIC = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [sliderPosition, setSliderPosition] = useState(0);

  useEffect(() => {
    if (MUSIC.current != null) {
      if (isPlaying) {
        (MUSIC.current as any).pause();
      } else {
        (MUSIC.current as any).play();
      }
    }
  }, [isPlaying]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (MUSIC.current != null) {
      const audio = MUSIC.current;
      const v: number = e.target.value as unknown as number;
      (audio as any).currentTime = ((audio as any).duration / 100) * v;
      setSliderPosition(v);
    }
  };

  const getCurrDuration = (e: any) => {
    console.log(typeof e);
    setSliderPosition(
      (e.currentTarget.currentTime / e.currentTarget.duration) * 100
    );
  };

  const skipSong = (forwards: Boolean = true) => {
    setSliderPosition(0);
    props.setCurrentSongIndex(
      (props.currentSongIndex + (forwards ? 1 : songs.length - 1)) %
        songs.length
    );
  };

  return (
    <div>
      <audio
        ref={MUSIC}
        onTimeUpdate={getCurrDuration}
        src={songs[props.currentSongIndex].src}
        autoPlay={true}
        onLoadedData={() => {}}
      />
      <div className="flex flex-col w-[90vw] justify-center">
        <div className="flex justify-evenly">
          <div className="flex flex-col justify-center items-center">
            <div className="h3 flex justify-center text-center">
              Playing Now ...
            </div>
            <br />
            <br />
            <div className="flex flex-col justify-center items-center">
              <img
                className="flex flex-col justify-center items-center object-cover w-[36vh] h-[36vh] border-[3px] border-black rounded-[50%]"
                src={songs[props.currentSongIndex].img_src}
              />
            </div>
            <br />
            <br />
            <div className="flex justify-center text-center">
              <div className="h2">
                {songs[props.currentSongIndex].title} by{" "}
                {songs[props.currentSongIndex].artist}
              </div>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
        <div className="w-[30vw] bg-[#d65db1]"></div>
        <div className="flex flex-col">
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            skipSong={skipSong}
            sliderPosition={sliderPosition}
            onChange={onChange}
          />
          <div className="flex justify-center items-center text-center">
            <p>
              Next up:{" "}
              <span>
                {songs[props.nextSongIndex].title} by{" "}
                {songs[props.nextSongIndex].artist}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function mobitrue() {
  return window.innerWidth <= 600 && window.innerHeight <= 800;
}

export default Player;
export { mobitrue };
