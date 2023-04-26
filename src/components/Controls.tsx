import {
  faPlay,
  faPause,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  skipSong: any;
  sliderPosition: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function Controls(props: Props) {
  return (
    <div className="justify-center">
      <div className="pt-[15px] flex justify-center items-center">
        <input
          type="range"
          className="slider"
          value={props.sliderPosition}
          onChange={props.onChange}
        />
      </div>
      <br />
      <div className="flex justify-center">
        <button
          className="bg-none border-none text-[20px] text-center cursor-pointer w-[60px] h-[60px]"
          onClick={() => props.setIsPlaying(props.skipSong(false))}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          className="bg-none border-none text-[20px] text-center cursor-pointer w-[60px] h-[60px]"
          onClick={() => props.setIsPlaying(!props.isPlaying)}
        >
          <FontAwesomeIcon icon={props.isPlaying ? faPlay : faPause} />
        </button>
        <button
          className="bg-none border-none text-[20px] text-center cursor-pointer w-[60px] h-[60px]"
          onClick={() => props.setIsPlaying(props.skipSong(true))}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
