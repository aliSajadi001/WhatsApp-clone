import { Box, Button, Popover, Stack, TextField } from "@mui/material";
import ChatSkeleton from "./ChatSkeleton";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import PopoverShar from "./Share";
import { Send } from "@mui/icons-material";
import { useRef, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import useToggleMode from "../state/toggleMode";
import reciverInfo from "../state/receiverInfo";

function Chat() {
  let { receiver } = reciverInfo();
  let { dark } = useToggleMode();
  let [text, setText] = useState<string>("");
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
          paddingY: "6px",
          gap: "10px",
          borderBottom: dark ? "1px solid gray" : "none",
          boxShadow: "rgba(2, 9, 9, 0.20) 0px 1px 4px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingX: "10px",
            paddingY: "5px",
            gap: "10px",
          }}
        >
          <img
            className="w-[40px] h-[40px] rounded-full"
            src={receiver?.profile}
            alt={receiver?.name}
          />
          <div>
            <p className="text-sm dark:text-gray-200">{receiver?.name}</p>
            <p className="text-xs dark:text-gray-200">online</p>
          </div>
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
              sx={{
                padding: "10px",
                borderRadius: "30px",
                backgroundColor: "none",
              }}
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
