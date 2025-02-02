import { Button, TextField, Typography } from "@mui/material";
import useToggleMode from "../../state/toggleMode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { Axios } from "../../lib/axios";
interface DeleteAccount {
  data: {
    success: boolean;
    message: string;
  };
}
function DeleteAccount() {
  let navigate = useNavigate();
  let [loading, setLoading] = useState<boolean>(false);
  let { dark } = useToggleMode();
  let [deleteAccount, setDeleteAccount] = useState<string>("");
  {
    /*************************Handle delete function ********************/
  }
  let handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (deleteAccount !== "DELETE" || deleteAccount.length === 0) {
        enqueueSnackbar("Please enter the word DELETE", { variant: "error" });
        return;
      }
      setLoading(true);
      Axios.delete("/user/delete-account")
        .then((res) => {
          if (res?.data?.success as DeleteAccount) {
            setLoading(false);
            enqueueSnackbar(res.data.message, { variant: "success" });
            navigate("/login");
          }
        })
        .catch((err: any) => {
          setLoading(false);
          enqueueSnackbar(err.response.data.message, { variant: "error" });
        });
    } catch (error: any) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleDelete}
      className="flex dark: dark:bg-gradient-to-tl dark:from-gray-950 dark:via-slate-950 dark:to-black  bg-white flex-col gap-5 items-center justify-center w-full p-[20px]"
    >
      <Typography sx={{ color: "red", fontWeight: "bold" }}>
        To delete the account, enter the word DELETE
      </Typography>
      <TextField
        size="small"
        onChange={(e) => setDeleteAccount(e.target.value)}
        value={deleteAccount}
        type="text"
        placeholder="Delete account"
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
      <Button
        disabbled={loading}
        size="small"
        type="submit"
        sx={{
          width: "100%",
          color: "red",
          fontWeight: "bold",
          ":disabled": {
            opacity: "0.5",
            cursor: "not-allowed",
          },
        }}
      >
        Submit
      </Button>
    </form>
  );
}

export default DeleteAccount;
