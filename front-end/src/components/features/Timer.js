import React from "react";
import { IconButton } from "@/components/ui";
import { MdOutlineRestartAlt } from "react-icons/md";
import { IoIosSkipForward } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

const Timer = () => {
  return (
    <div className="flex flex-col space-y-20">
      <div>
        <div className="">
          <p className="text-black text-center text-7xl">00:00</p>
        </div>
      </div>
      <div className="flex justify-around items-center ">
        <div>
          <IconButton
            text="Restart"
            icon={
              <MdOutlineRestartAlt className="text-6xl text-black object-center " />
            }
          ></IconButton>
        </div>
        <div>
          <IconButton
            text="Start"
            textProps={"text-2xl pt-3"}
            icon={<FaPlay className="text-6xl text-black" />}
          ></IconButton>
        </div>
        <div>
          <IconButton
            text="Skip"
            icon={<IoIosSkipForward className="text-6xl text-black" />}
          ></IconButton>
        </div>
      </div>
    </div>
  );
};

export default Timer;
