"use client";
import React, { useState, useEffect } from "react";
import { IconButton } from "@/components/ui";
import { MdOutlineRestartAlt } from "react-icons/md";
import { IoIosSkipForward } from "react-icons/io";
import { FaPlay, FaPause } from "react-icons/fa";

const Timer = () => {
  const modes = {
    work: 1500,
    break: 300,
  };
  const [totalSeconds, setTotalSeconds] = useState(modes["work"]);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("work");

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  function reset() {
    console.log(totalSeconds, mode);
    setIsActive(false);
    setTotalSeconds(modes[mode]);
  }

  const skip = () => {
    switch (mode) {
      case "work":
        setMode("break");
        setTotalSeconds(modes["break"]);
        break;

      case "break":
        setMode("work");
        setTotalSeconds(modes["work"]);
        break;
    }
  };
  useEffect(() => {
    let intervalId;

    if (isActive) {
      if (totalSeconds <= 0) {
        setIsActive(false);
        skip(); // Llama a la función 'skip' aquí
      }
      intervalId = setInterval(() => {
        setTotalSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive, skip, toggleTimer]);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="flex flex-col space-y-20">
      <div className="flex justify-center">
        <div className="w-min">
          <p className="text-black text-center text-8xl">{mode}</p>
          <div className={isActive ? "bg-green-300" : "bg-red-300"}>
            <p className="text-black text-center text-7xl">
              {minutes < 10 ? "0" : ""}
              {minutes}:
              {seconds == 0 ? "00" : seconds < 10 ? "0" + seconds : seconds}
            </p>
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
            icon={
              !isActive ? (
                <FaPlay className="text-6xl text-black" />
              ) : (
                <FaPause className="text-6xl text-black" />
              )
            }
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
