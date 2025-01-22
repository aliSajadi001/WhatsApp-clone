import AlbumIcon from "@mui/icons-material/Album";
import { soundList } from "../soundList";
import { Button } from "@mui/material";
import useToggleMode from "../../state/toggleMode";
import { useEffect, useState } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { playSounds } from "../playSound";
interface Sound {
  notif: string;
  name: string;
}

function Notification() {
  let { dark } = useToggleMode();
  let [selectSound, setSelectSound] = useState<string>("");
  let { playSound } = playSounds();
  let handlePlaySound = (sn: string) => {
    setSelectSound(sn);
    playSound(selectSound);
  };
  return (
    <div className="w-full flex flex-col gap-1">
      {soundList.map((sound: Sound, i) => (
        <div key={i} className="flex items-center justify-between">
          <Button
            onClick={() => {
              handlePlaySound(sound.name);
            }}
            size="small"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              backgroundColor: dark ? "#00162a" : "#acfc8c",
              color: dark ? "gray" : "black",
              ":hover": {
                backgroundColor: dark ? "white" : "#00162a",
                color: dark ? "black" : "white",
                scale: "1.01",
                transition: "all 0.5s ease-in-out",
              },
              padding: "2px 10px",
              fontSize: "13px",
            }}
          >
            <span className="font-bold text-xs ">{sound.name}</span>
            <span className="hover:scale-110">
              {sound.name === selectSound ? <VolumeUpIcon /> : <AlbumIcon />}
            </span>
          </Button>
        </div>
      ))}
      <Button
        sx={{
          width: "100%",
          fontSize: "14px",
          fontWeight: "bold",
          color: dark ? "gray" : "black",
        }}
        size="small"
      >
        Submit
      </Button>
    </div>
  );
}

export default Notification;
