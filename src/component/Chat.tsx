import {
  Box,
  Button,
  Popover,
  Skeleton,
  Stack,
  TextField,
} from "@mui/material";
import ChatSkeleton from "./ChatSkeleton";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import PopoverShar from "./Share";
import { Send } from "@mui/icons-material";
import { useRef, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import useToggleMode from "../state/toggleMode";

function Chat() {
  let { dark } = useToggleMode();
  let [text, setText] = useState<string>("");
  console.log(text);
  let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(text);
  };

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  let messageRef = useRef<HTMLInputElement | null>(null);
  let selectEmoji = (emoji: string) => {
    let input = messageRef.current;
    let satart = input?.selectionStart ?? 0;
    let end = input?.selectionEnd ?? 0;
    let newText = text.slice(0, satart) + emoji + text.slice(end);
    setText(newText);
    setTimeout(() => {
      input?.setSelectionRange(satart + emoji.length, satart + emoji.length);
    }, 0);
  };
  
  return (
    <Stack sx={{ width: "100%", hight: "100%" }} className="h-screen">
      {/**********************ChatBar************************* */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingX: "10px",
          paddingY: "5px",
          gap: "10px",
          borderBottom: "1px solid gray",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: "10px",
            paddingY: "5px",
            gap: "10px",
          }}
        >
          <Skeleton
            variant="circular"
            animation="pulse"
            width={40}
            height={40}
            sx={{ backgroundColor: "teal" }}
          />
          <Stack sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Skeleton
              variant="rectangular"
              animation="pulse"
              width={90}
              height={10}
              sx={{ borderRadius: "20px", backgroundColor: "teal" }}
            />
            <Skeleton
              variant="rectangular"
              animation="pulse"
              width={50}
              height={10}
              sx={{ borderRadius: "20px", backgroundColor: "teal" }}
            />
          </Stack>
        </Box>
      </Box>
      {/***********************Chat************************ */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          gap: "10px",
          height: "100%",
          overflowY: "auto",
          "&::-webkit-scrollbar": { width: "5px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#335",
            borderRadius: "10px",
          },
          padding: "10px",
        }}
      >
        <ChatSkeleton reciver={true} width={230} hight={90} />
        <ChatSkeleton reciver={false} width={40} hight={30} />
        <ChatSkeleton reciver={true} width={300} hight={100} />
        <ChatSkeleton reciver={false} width={300} hight={20} />
        <ChatSkeleton reciver={false} width={300} hight={30} />
        <ChatSkeleton reciver={false} width={240} hight={40} />
        <ChatSkeleton reciver={true} width={300} hight={50} />
        <ChatSkeleton reciver={true} width={300} hight={50} />
      </Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
          paddingX: "10px",
          paddingY: "5px",
          height: "60px",
        }}
      >
        <Box>
          <PopoverShar />
        </Box>
        {/**********************Send Message************************* */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex items-center gap-2 justify-center"
        >
          <Box sx={{ width: "100%" }}>
            <TextField
              ref={messageRef}
              onChange={(e) => setText(e.target.value)}
              value={text}
              variant="outlined"
              placeholder="Typeing message"
              size="small"
              sx={{
                width: "100%",
                backgroundColor: "#",
                outline: "noan",
                borderRadius: "10px",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
              }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: "100%",
                right: "0",
                zIndex: "100",
              }}
            ></Box>
          </Box>
          <Box>
            <Button aria-describedby={id} variant="text" onClick={handleClick}>
              <SentimentSatisfiedAltIcon />
            </Button>
            <Popover
          
              sx={{ padding: "10px" , borderRadius:"30px" , backgroundColor:"none"}}
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Picker
                theme={dark ? "dark" : "light"}
                data={data}
                onEmojiSelect={(emoji: { native: string }) =>
                  selectEmoji(emoji.native)
                }
              />
            </Popover>
          </Box>
          {text.length > 0 ? (
            <Button variant="text" type="submit">
              <Send />
            </Button>
          ) : (
            <Button variant="text" type="button">
              <KeyboardVoiceIcon className="dark:text-white cursor-pointer" />
            </Button>
          )}
        </form>
      </Box>
    </Stack>
  );
}

export default Chat;
