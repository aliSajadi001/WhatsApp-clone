import { Button, TextField } from "@mui/material";
import { useState } from "react";
import useToggleMode from "../../state/toggleMode";
import { Axios } from "../../lib/axios";
import { enqueueSnackbar } from "notistack";
import { useCurrentUser } from "../../state/curentUser";
import { useNavigate } from "react-router-dom";
interface CurrUser {
  user: {
    firstName: string;
    lastName: string;
    bio: string;
  };
  success: boolean;
  message: string;
}
interface UserInfo {
  firstName: string;
  lastName: string;
  bio: string;
}

function CurrentInfo() {
  let navigate = useNavigate();
  let { setCurrentUser, currentUser } = useCurrentUser();
  let { dark } = useToggleMode();
  let [loading, setLoading] = useState<boolean>(false);
  let [value, setValue] = useState<UserInfo>({
    firstName: currentUser?.firstName || "",
    lastName: currentUser?.lastName || "",
    bio: currentUser?.bio || "",
  });
  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  {
    /*****************Handle submit functionality **********************/
  }
  let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);

      await Axios.put<CurrUser>("/user/update-profile", {
        userId: currentUser?._id,
        firstName: value.firstName,
        lastName: value.lastName,
        bio: value.bio,
      })
        .then((res) => {
          if (res?.data?.success) {
            setLoading(false);
            enqueueSnackbar(res.data.message, {
              variant: "success",
            });

            setValue({
              ...value,
              firstName: res.data.user.firstName,
              lastName: res.data.user.lastName,
              bio: res.data.user.bio,
            });
            setCurrentUser({
              ...currentUser,
              firstName: res.data.user.firstName,
              lastName: res.data.user.lastName,
              bio: res.data.user.bio,
            });
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
          enqueueSnackbar("Something went wrong", {
            variant: "error",
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center flex-col gap-2 w-full   "
    >
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
        name="firstName"
        value={value.firstName}
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
        name="lastName"
        value={value.lastName}
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
        name="bio"
        value={value.bio}
      />
      <Button
        type="submit"
        disabled={loading}
        sx={{
          width: "100%",
          fontWeight: "bold",
          ":disabled": {
            backgroundColor: "gray",
            cursor: "not-allowed",
          },
        }}
      >
        Submit
      </Button>
    </form>
  );
}

export default CurrentInfo;
