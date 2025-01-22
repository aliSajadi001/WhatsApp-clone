import { Box, TextField } from "@mui/material";
import { useState } from "react";
import useToggleMode from "../../state/toggleMode";
interface UserInfo {
  FName: string;
  LName: string;
  Bio: string;
}
function CurrentInfo() {
  let { dark } = useToggleMode();
  let [value, setValue] = useState<UserInfo>({
    FName: "",
    LName: "",
    Bio: "",
  });
  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
      <div className="flex items-center justify-center flex-col gap-2 w-full   ">
        <TextField
          sx={{
            border: "1px solid gray",
            borderRadius: "5px",
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
          }}
          size="small"
          placeholder="FName"
          onChange={handleChange}
          name="FName"
          value={value.FName}
        />
        <TextField
          sx={{
            border: "1px solid gray",
            width: "100%",
            borderRadius: "5px",

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
          }}
          size="small"
          placeholder="LName"
          onChange={handleChange}
          name="LName"
          value={value.LName}
        />
        <TextField
          sx={{
            borderRadius: "5px",

            border: "1px solid gray",
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
          }}
          size="small"
          type="textArea"
          rows={4}
          multiline
          variant="outlined"
          fullWidth
          placeholder="Bio"
          onChange={handleChange}
          name="Bio"
          value={value.Bio}
        />
      </div>
    
  );
}

export default CurrentInfo;
