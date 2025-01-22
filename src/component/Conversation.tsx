import SearchIcon from "@mui/icons-material/Search";
import { Box, Divider, InputAdornment, Stack, TextField } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import ToggleMode from "./ToggleMode";
import ConversationScleton from "./ConversationSkeleton";
import { Conver, conversations } from "../data/conversations";
import reciverInfo from "../state/receiverInfo";
import { useState } from "react";
import PopoverSettings from "../component/settings/PopverSettings";
function Conversation() {
  let {setReceiver } = reciverInfo()
  let loading = false;
  let [open , setOpen] = useState<boolean>(false)
  let handleClick = () => {
    setOpen(true)}
  
  return (
    <Stack
      className="h-full bg-gradient-to-tr from-green-950 via-green-950 to-cyan-950 dark:bg-gradient-to-tl dark:from-gray-950 dark:via-slate-950 dark:to-black "
      sx={{
        position: "flex",
        flexDirection: "column",
        alignItems: "start",
        paddingY: "10px",
        boxShadow: "rgba(2, 9, 9, 0.30) 0px 3px 8px",
      }}
    >
      {/************************* Conversation header *************************/}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent:"center",
          gap: "10px",
          width: "100%",
          cursor: "pointer",
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
        {!loading ? (
          <div className="flex flex-col gap-6 ">
            {conversations.map((conver: Conver) => (
              <div onClick={() => setReceiver(conver)}
                key={conver.id}
                className="flex items-center gap-5 dark:hover:bg-gradient-to-l dark:from-slate-900 dark:via-gray-900 dark:to-black p-1 rounded-lg cursor-pointer hover:bg-gray-200 text-white"
              >
                <img
                  src={conver.profile}
                  alt={conver.name}
                  className="rounded-full w-[50px] h-[50px]"
                />
                <div className="flex flex-col justify-center w-full truncate">
                  <p className="text-sm font-medium dark:text-white truncate">
                    {conver.name}
                  </p>
                  <p className="text-xs font-mono dark:text-white truncate">
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
