import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import ContactsIcon from "@mui/icons-material/Contacts";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { Box } from "@mui/material";
let PopoverShar = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="text" onClick={handleClick}>
        <AddIcon />
      </Button>
      <Popover
      sx={{padding:"10px"}}
      
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" ,padding:"30px"}}>
        
        <ContactsIcon sx={{color:"blue"}}/>
        <CameraAltIcon sx={{color:"red"}}/>
        <TextSnippetIcon sx={{color:"Purple"}}/>
        <PermMediaIcon sx={{color:"blue"}}/>
        </Box>
      </Popover>
    </div>
  );
};
export default PopoverShar;
