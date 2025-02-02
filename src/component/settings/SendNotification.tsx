import AlbumIcon from "@mui/icons-material/Album";
import { soundList } from "../soundList";
import { Button } from "@mui/material";
import useToggleMode from "../../state/toggleMode";
import { useState } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { playSounds } from "../playSound";
import { useCurrentUser } from "../../state/curentUser";
import { Axios } from "../../lib/axios";
import { enqueueSnackbar } from "notistack";
interface Sound {
  notif: string;
  name: string;
}

function SendingNotification() {
  let [loading, setLoading] = useState<boolean>(false);
  let { dark } = useToggleMode();
  let { currentUser, setCurrentUser } = useCurrentUser();
  let [selectSound, setSelectSound] = useState<string>(
    currentUser?.sendingSound || ""
  );
  let { playSound } = playSounds();
  let handlePlaySound = (sn: string) => {
    setSelectSound(sn);
    playSound(selectSound);
  };

  {
    /*************************Handle submit functionality **********/
  }

  let handleSubmit = async () => {
    try {
      if (selectSound === currentUser?.sendingSound) {
        return;
      }
      setLoading(true);
      Axios.put("/user/update-profile", {
        userId: currentUser?._id,
        notificationSound: selectSound,
      }).then((res) => {
        if (res.data.success) {
          setCurrentUser({
            ...currentUser,
            notificationSound: res.data.user.sendingSound,
          });
          setSelectSound(res.data.user.sendingSound);
          setLoading(false);
          enqueueSnackbar(res.data.message, { variant: "success" });
        }
      });
    } catch (error: any) {
      setLoading(false);
      enqueueSnackbar("Something went wrong", { variant: "error" });
    }
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
              {sound.name.toString() === selectSound.toString() ? (
                <VolumeUpIcon />
              ) : (
                <AlbumIcon />
              )}
            </span>
          </Button>
        </div>
      ))}
      <Button
        onClick={handleSubmit}
        disabled={loading}
        sx={{
          ":disabled": {
            opacity: "0.5",
            cursor: "not-allowed",
          },
          width: "100%",
          fontSize: "14px",
          fontWeight: "bold",
          color: dark ? "gray" : "black",
          backgroundColor: selectSound.length > 0 ? "blue" : "",
        }}
        size="small"
      >
        Submit
      </Button>
    </div>
  );
}

export default SendingNotification;
