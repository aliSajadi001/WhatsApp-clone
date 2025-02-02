import { Divider, Drawer, Popover, Switch } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useEffect, useState } from "react";
import UpdateProfile from "./UpdateProfile";
import LogoutIcon from "@mui/icons-material/Logout";
import { Axios } from "../../lib/axios";
import { useCurrentUser } from "../../state/curentUser";
import { enqueueSnackbar } from "notistack";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ProfileUpdate {
  user: {
    _id?: string;
    bio?: string;
    email?: string;
    muted?: boolean;
    profile?: string;
    lastName?: string;
    firstName?: string;
    sendingSound?: string;
    notificationSound?: string;
  };

  success: boolean;
  message: string;
}

function PopverSettings({ open, setOpen }: Props) {
  let [profile, setProfile] = useState<boolean>(false);
  let { currentUser, setCurrentUser } = useCurrentUser();
  useEffect(() => {
    if (profile) {
      setOpen(false);
    }
  }, [profile, open]);
  {
    /**************************Switch ************************/
  }
  let [switchd, setSwitchd] = useState<boolean>(currentUser?.muted || false);

  let handleSwitch = (muted: boolean) => {
    setSwitchd(muted);
    try {
      Axios.put<ProfileUpdate>("/user/update-profile", {
        userId: currentUser?._id,
        muted: muted,
      })
        .then((res) => {
          console.log(res);
          console.log(res?.data?.user.muted);
          if (res?.data?.success && res?.data?.user.muted) {
            setCurrentUser({
              ...currentUser,
              muted: res.data.user.muted,
            });
            enqueueSnackbar("You are in silent mode.", { variant: "success" });
          } else if (res?.data?.success && res?.data?.user.muted === false) {
            setCurrentUser({
              ...currentUser,
              muted: res.data.user.muted,
            });
            enqueueSnackbar("You are in loud mode.", { variant: "success" });
          }
        })
        .catch((err: any) => {
          enqueueSnackbar(err.response.data.message, {
            variant: "error",
          });
        });
    } catch (error: any) {
      console.log(error);
    }
  };

  {
    /**************************Drawer ************************/
  }
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
        <div className="w-[200px] flex flex-col items-start gap-3 justify-start py-3.5  dark:text-slate-500  text-black font-medium dark:bg-gradient-to-tl dark:from-gray-950 dark:via-slate-950 dark:to-black  bg-stone-50 ">
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
          <div className=" w-full dark:hover:bg-slate-500 hover:bg-stone-300">
            <div
              onClick={() => setProfile(true)}
              className="dark:hover:bg-gray-900 cursor-pointer px-5 py-1 w-full flex items-start gap-2"
            >
              <PersonOutlineOutlinedIcon sx={{ fontSize: "17px" }} />
              <span className="text-xs">Profile</span>
            </div>
          </div>
          <div className="w-full dark:hover:bg-slate-500 hover:bg-stone-300">
            <div className="dark:hover:bg-gray-900 cursor-pointer px-5 py-1 w-full flex items-start gap-2">
              <ContactEmergencyIcon sx={{ fontSize: "17px" }} />
              <span className="text-xs">Contact</span>
            </div>
          </div>
          <div className="w-full dark:hover:bg-slate-500 hover:bg-stone-300 ">
            <div className="dark:hover:bg-gray-900 cursor-pointer px-5 py-1 w-full flex items-center justify-between">
              <div className="flex items-center gap-2 justcify-center">
                {switchd ? (
                  <>
                    <VolumeOffIcon sx={{ fontSize: "17px" }} />
                  </>
                ) : (
                  <>
                    <VolumeUpIcon sx={{ fontSize: "17px" }} />
                  </>
                )}

                <span className="text-xs">Mute</span>
              </div>
              <div>
                <Switch
                  checked={switchd}
                  size="small"
                  onChange={(e) => handleSwitch(e.target.checked)}
                />
              </div>
            </div>
          </div>
          <div className="w-full dark:hover:bg-slate-500 hover:bg-stone-300">
            <div className="dark:hover:bg-gray-900 cursor-pointer px-5 py-1 w-full flex items-start gap-2">
              <LogoutIcon sx={{ fontSize: "17px", color: "red" }} />
              <span className="text-xs" style={{ color: "red" }}>
                Logout
              </span>
            </div>
          </div>
        </div>
      </Popover>
      {/************************** Drawers ************************** */}
      <Drawer onClose={() => setProfile(false)} open={profile}>
        <div className="w-[387px] h-full  text-gray-500 flex flex-col items-start justify-start py-2 bg-stone-50 dark:bg-gradient-to-tl dark:from-gray-950 dark:via-slate-950 dark:to-black overflow-y-scroll">
          <div className="w-full flex items-start justify-start h-screen">
            <UpdateProfile setProfile={setProfile} />
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default PopverSettings;
