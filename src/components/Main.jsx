import { useState } from "react";
import video from "../assets/mov1.mp4";
import ButtonModel from "./ButtonModel";
import VideoBox from "./VideoBox";
import InfoBox from "./InfoBox";

const Main = () => {
  const [videoActive, setVideoActive] = useState(false);
  const [text, setText] = useState("Hola");

  function handleClick(e) {
    switch (e.target.name.toString()) {
      case "Movies":
        console.log(1);
        break;

      case "Randomize":
        console.log(2);
        break;

      case "Serie":
        console.log(3);
        break;
    }
  }
  return (
    <>
      <div className="sm:w-full lg:w-1/2 m-auto">
        {videoActive ? <VideoBox videoSource={video} /> : <InfoBox />}
        <div className="border mt-10 flex justify-between">
          <button
            className="bg-black p-2 w-full hover:bg-white hover:text-black transition"
            onClick={handleClick}
            name={"Movies"}
          >
            Movies
          </button>
          <button
            className="bg-black p-2 w-full hover:bg-white hover:text-black transition"
            onClick={handleClick}
            name={"Randomize"}
          >
            Randomize
          </button>
          <button
            className="bg-black p-2 w-full hover:bg-white hover:text-black transition"
            onClick={handleClick}
            name={"Serie"}
          >
            Serie
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
