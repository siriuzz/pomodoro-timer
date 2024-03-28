'use client'
import React,{ useState, useEffect } from "react";
import { IconButton } from "@/components/ui";
import { MdOutlineRestartAlt } from "react-icons/md";
import { IoIosSkipForward } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

const Timer = () => {
  const modes = {
    work: 25*60,
    break: 5*60
  }
  const [totalSeconds, setTotalSeconds] = useState(modes.work);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("work");

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setTotalSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setTotalSeconds(modes[mode]);
    setIsActive(false);
  };

  const skip = () => {
    switch (mode) {
      case "work":
        setMode("break");
        setTotalSeconds(modes[mode]);
        break;

      case "break":
        setMode("work");
        setTotalSeconds(modes[mode]);
        break;

      default:
        break;
    }
  };
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="flex flex-col space-y-20">
      <div className="flex justify-center">

      <div className="w-min">
        <div className={isActive? "bg-green-300":"bg-red-300"}>
          <p className="text-black text-center text-7xl">{minutes < 10? '0':''}{minutes}:{seconds == 0? "00": seconds}</p>
        </div>
      </div>
      </div>
      <div className="flex justify-around items-center ">
        <div>
          <IconButton
            text="Restart"
            icon={
              <MdOutlineRestartAlt className="text-6xl text-black object-center " />
            }
            onClick={reset}
          ></IconButton>
        </div>
        <div>
          <IconButton
            text="Start"
            textProps={"text-2xl pt-3"}
            icon={<FaPlay className="text-6xl text-black" />}
            onClick={toggleTimer}

          ></IconButton>
        </div>
        <div>
          <IconButton
            text="Skip"
            icon={<IoIosSkipForward className="text-6xl text-black" />}
            onClick={skip}
          ></IconButton>
        </div>
      </div>
    </div>
  );
};

export default Timer;
