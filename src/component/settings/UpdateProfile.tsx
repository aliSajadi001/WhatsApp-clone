import BackupIcon from "@mui/icons-material/Backup";
import useToggleMode from "../../state/toggleMode";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CurrentInfo from "./CurrentInfo";
import Notification from "./Notification";

function UpdateProfile() {
  let { dark } = useToggleMode();
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full">
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
              backgroundColor: "transparent",
              color: dark ? "white" : "black",
            }}
          >
            <AccordionSummary
              sx={{ color: dark ? "gray" : "white" }}
              expandIcon={
                <ExpandMoreIcon sx={{ color: dark ? "white" : "white" }} />
              }
              aria-controls="panel2-content"
            >
              Title
            </AccordionSummary>
            <AccordionDetails sx={{ color: dark ? "gray" : "white" }}>
              <CurrentInfo/>
            </AccordionDetails>
          </Accordion>
        </div>
                {/***************************** *********************/}

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
              sx={{ color: dark ? "gray" : "white" }}
              expandIcon={
                <ExpandMoreIcon sx={{ color: dark ? "white" : "white" }} />
              }
              aria-controls="panel2-content"
            >
              NotificationSound
            </AccordionSummary>
            <AccordionDetails sx={{ color: dark ? "gray" : "white" }}>
              <Notification/>
            </AccordionDetails>
          </Accordion>
        </div>
        {/***************************** *********************/}
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
              sx={{ color: dark ? "gray" : "white" }}
              expandIcon={
                <ExpandMoreIcon sx={{ color: dark ? "white" : "white" }} />
              }
              aria-controls="panel2-content"
            >
              Title
            </AccordionSummary>
            <AccordionDetails sx={{ color: dark ? "gray" : "white" }}>
              Content
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
