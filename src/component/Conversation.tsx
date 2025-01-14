import SearchIcon from "@mui/icons-material/Search";
import { Box, Divider, InputAdornment, Stack, TextField } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import ToggleMode from "./ToggleMode";
import ConversationScleton from "./ConversationSkeleton";

function Conversation() {
  return (
    <Stack
      className="h-full dark:bg-gradient-to-bl from-teal-950 via-teal-950 to-indigo-950 bg-white"
      sx={{
        position: "flex",
        flexDirection: "column",
        alignItems: "start",
        paddingY: "10px",
        boxShadow: "rgba(2, 9, 9, 0.30) 0px 3px 8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "100%",
        }}
      >
        <ListIcon
          sx={{ fontSize: 30, color: "gray" }}
          className="dark:text-slate-500"
        />
        <TextField
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <ToggleMode />
      </Box>
      <Divider
        sx={{
          width: "100%",
          marginY: "10px",
          backgroundColor: "#335",
          paddingY: "0.2px",
        }}
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
          height: "100%",
          "&::-webkit-scrollbar": { width: "5px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#335",
            borderRadius: "10px",
          },
        }}
      >
        <ConversationScleton />
        <ConversationScleton />
        <ConversationScleton />
        <ConversationScleton />
        <ConversationScleton />
        <ConversationScleton />
        <ConversationScleton />
      
     
      </Box>
    </Stack>
  );
}

export default Conversation;
