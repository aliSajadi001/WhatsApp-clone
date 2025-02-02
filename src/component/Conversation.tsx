import SearchIcon from "@mui/icons-material/Search";
import { Box, Divider, InputAdornment, Stack, TextField } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import ToggleMode from "./ToggleMode";
import ConversationScleton from "./ConversationSkeleton";
import { Conver, conversations } from "../data/conversations";
import reciverInfo from "../state/receiverInfo";
import { useState } from "react";
import PopoverSettings from "../component/settings/PopverSettings";
import useToggleMode from "../state/toggleMode";
function Conversation() {
  let { setReceiver } = reciverInfo();
  let loading = false;
  let [open, setOpen] = useState<boolean>(false);
  let handleClick = () => {
    setOpen(true);
  };  let {dark} = useToggleMode()
  return (
    <Stack
      className="h-full bg-slate-50 text-black dark:bg-gradient-to-tl dark:from-gray-950 dark:via-slate-950 dark:to-black "
      sx={{
        position: "flex",
        flexDirection: "column",
        alignItems: "start",
        paddingY: "10px",
        borderRight: "1px solid gray",
      }}
    >
      {/************************* Conversation header *************************/}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          width: "100%",
          cursor: "pointer",
          borderBottom: "1px solid gray",
          paddingY: "5px",
        }}
      >
        <ListIcon
          onClick={handleClick}
          sx={{ fontSize: 30, color: "gray" }}
          className="dark:text-slate-500"
        />
        <PopoverSettings open={open} setOpen={setOpen} />
        <TextField
          size="small"
          sx={{
            
            width: "100%",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiInputBase-input": {
              color: dark ? "white" : "",
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
            "& .MuiInputBase-root": {
              backgroundColor: "transparent",
            },
            border: "1px solid gray",
            borderRadius: "5px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{color:dark?"white":"black"}}/>
              </InputAdornment>
            ),
          }}
        />
        <ToggleMode />
      </Box>

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
        {!loading ? (
          <div className="flex flex-col md:gap-5 gap-4 py-4">
            {conversations.map((conver: Conver) => (
              <div
                onClick={() => setReceiver(conver)}
                key={conver.id}
                className="flex items-center gap-4 dark:hover:bg-gradient-to-l dark:from-slate-900 dark:via-gray-900 dark:to-black p-1 rounded-lg cursor-pointer hover:bg-gray-200 text-black dark:text-neutral-500"
              >
                <img
                  src={conver.profile}
                  alt={conver.name}
                  className="rounded-full md:w-[50px]  md:h-[50px] w-[40px]  h-[40px] "
                />
                <div className="flex flex-col justify-center w-full truncate">
                  <p className="text-sm font-medium text-black dark:text-neutral-500 truncate">
                    {conver.name}
                  </p>
                  <p className="text-xs font-mono text-black dark:text-neutral-500 truncate">
                    {conver.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <ConversationScleton />
            <ConversationScleton />
            <ConversationScleton />
            <ConversationScleton />
            <ConversationScleton />
            <ConversationScleton />
            <ConversationScleton />
          </>
        )}
      </Box>
    </Stack>
  );
}

export default Conversation;
