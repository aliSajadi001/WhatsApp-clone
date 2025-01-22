import {
  Divider,
  Drawer,
  Popover,
  Switch,
  Tooltip,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import useToggleMode from "../../state/toggleMode";
import { useEffect, useState } from "react";
import EastIcon from "@mui/icons-material/East";
import UpdateProfile from "./UpdateProfile";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function PopverSettings({ open, setOpen }: Props) {
  
  let [profile, setProfile] = useState<boolean>(false);
  
  useEffect(() => {
    if (profile) {
      setOpen(false);
    }
  }, [profile, open]);

  let { dark } = useToggleMode();
  return (
    <div>
      <Popover
        sx={{ width: "387px", zIndex: "0" }}
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div className="w-[200px] flex flex-col items-start gap-3 justify-start py-3  dark:text-gray-500  text-white font-medium dark:bg-gradient-to-tl dark:from-gray-950 dark:via-slate-950 dark:to-black  bg-gradient-to-tr from-green-950 via-green-950 to-cyan-950 ">
          <div className="w-full flex items-start justify-start px-4 ">
            <p className="font-medium  text-sm">Settings</p>
          </div>
          <Divider
            sx={{
              width: "100%",
              marginY: "0px",
              backgroundColor: "#335",
              paddingY: "0.2px",
            }}
          />
          <div className=" w-full">
            <div
              onClick={() => setProfile(true)}
              className="dark:hover:bg-gray-900 cursor-pointer px-5 py-1 w-full flex items-start gap-2"
            >
              <PersonOutlineOutlinedIcon sx={{ fontSize: "17px" }} />
              <span className="text-xs">Profile</span>
            </div>
          </div>
          <div className="w-full ">
            <div className="dark:hover:bg-gray-900 cursor-pointer px-5 py-1 w-full flex items-start gap-2">
              <ContactEmergencyIcon sx={{ fontSize: "17px" }} />
              <span className="text-xs">Contact</span>
            </div>
          </div>
          <div className="w-full ">
            <div className="dark:hover:bg-gray-900 cursor-pointer px-5 py-1 w-full flex items-center justify-between">
              <div className="flex items-center gap-2 justcify-center">
                <VolumeUpIcon sx={{ fontSize: "17px" }} />
                <span className="text-xs">Mute</span>
              </div>
              <div>
                <Switch size="small" />
              </div>
            </div>
          </div>
         
        </div>
      </Popover>
      {/************************** Drawers ************************** */}
      <Drawer onClose={() => setProfile(false)} open={profile}>
        <div className="w-[350px] h-full  text-gray-500 flex flex-col items-start justify-start py-2 bg-gradient-to-tr from-green-950 via-green-950 to-cyan-950 dark:bg-gradient-to-tl dark:from-gray-950 dark:via-slate-950 dark:to-black overflow-y-scroll">
          <div className="p-3 flex items-center justify-between w-full">
            <p>My profile</p>
            <Tooltip title="Close">
              <EastIcon
                onClick={() => setProfile(false)}
                sx={{ cursor: "pointer", color: dark ? "gray" : "black" }}
              />
            </Tooltip>
          </div>
          <Divider
            sx={{
              width: "100%",
              marginY: "0px",
              backgroundColor: "#335",
              paddingY: "0.2px",
            }}
          />
          <div className="w-full flex items-center justify-center h-screen">
           <UpdateProfile/>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default PopverSettings;
