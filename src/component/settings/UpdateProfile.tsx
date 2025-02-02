import BackupIcon from "@mui/icons-material/Backup";
import useToggleMode from "../../state/toggleMode";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CurrentInfo from "./CurrentInfo";
import Notification from "./Notification";
import EastIcon from "@mui/icons-material/East";
import { useState } from "react";
import DeleteAccount from "./DeleteAccount";
import SendingNotification from "./SendNotification";

function UpdateProfile({
  setProfile,
}: {
  setProfile: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  let { dark } = useToggleMode();
  let [openDelete, setOpenDelete] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col gap-2 items-start justify-start w-full  ">
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
        <div className="flex w-full items-center justify-center ">
          <BackupIcon
            sx={{
              color: dark ? "gray" : "black",
              fontSize: "200pxx",
              opacity: "50%",
              width: "200px",
              height: "200px",
            }}
          />
        </div>
        <div className="w-full">
          {/********************* Current user info*****************/}

          <div className="w-full">
            <Accordion
              sx={{
                width: "100%",
                fontSize: "15px",
                color: dark ? "white" : "black",
                backgroundColor: dark ? "transparent" : "white",
              }}
            >
              <AccordionSummary
                sx={{ color: dark ? "gray" : "black" }}
                expandIcon={
                  <ExpandMoreIcon sx={{ color: dark ? "white" : "black" }} />
                }
                aria-controls="panel2-content"
              >
                Title
              </AccordionSummary>
              <AccordionDetails sx={{ color: dark ? "gray" : "black" }}>
                <CurrentInfo />
              </AccordionDetails>
            </Accordion>
          </div>
          {/*****************************Notifications*********************/}

          <div className="w-full">
            <Accordion
              sx={{
                width: "100%",
                fontSize: "15px",
                backgroundColor: "transparent",
                color: dark ? "white" : "black",
              }}
            >
              <AccordionSummary
                sx={{ color: dark ? "gray" : "black" }}
                expandIcon={
                  <ExpandMoreIcon sx={{ color: dark ? "white" : "black" }} />
                }
                aria-controls="panel2-content"
              >
                NotificationSound
              </AccordionSummary>
              <AccordionDetails sx={{ color: dark ? "gray" : "black" }}>
                <Notification />
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion
              sx={{
                width: "100%",
                fontSize: "15px",
                backgroundColor: "transparent",
                color: dark ? "white" : "black",
              }}
            >
              <AccordionSummary
                sx={{ color: dark ? "gray" : "black" }}
                expandIcon={
                  <ExpandMoreIcon sx={{ color: dark ? "white" : "black" }} />
                }
                aria-controls="panel2-content"
              >
                SendingSound
              </AccordionSummary>
              <AccordionDetails sx={{ color: dark ? "gray" : "black" }}>
                <SendingNotification />
              </AccordionDetails>
            </Accordion>
          </div>
          {/***************************** Delete acount *********************/}
          <div className="w-full">
            <Accordion
              sx={{
                width: "100%",
                fontSize: "15px",
                backgroundColor: "transparent",
                color: dark ? "white" : "black",
              }}
            >
              <AccordionSummary
                sx={{
                  color: dark ? "white" : "white",
                  backgroundColor: "red",
                  fontWeight: "bold",
                }}
                expandIcon={
                  <ExpandMoreIcon sx={{ color: dark ? "white" : "white" }} />
                }
                aria-controls="panel2-content"
              >
                Delete account
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  color: dark ? "gray" : "white",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <p>Do you want to delete your account?</p>
                <Button
                  sx={{ fontWeight: "bold", color: "red" }}
                  onClick={() => setOpenDelete(true)}
                >
                  Delete
                </Button>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <Dialog
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          padding: "20px",
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "17px",
            color: "red",
            backgroundColor: dark ? "#000" : "white",
          }}
        >
          Do you want to delete your account? this action cannot be undone
        </DialogTitle>
        <DeleteAccount />
      </Dialog>
    </>
  );
}

export default UpdateProfile;
