import { Box, Button, TextField, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Controller, useForm } from "react-hook-form";
import { zodValidation } from "../util/formValidation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import ToggleMode from "../component/ToggleMode";
import { Axios } from "../lib/axios";
import useToggleMode from "../state/toggleMode";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../state/curentUser";
function Login() {
  let [loading, setLoading] = useState<boolean>(false);
  let navigate = useNavigate();
  let { dark } = useToggleMode();
  let { setCurrentUser } = useCurrentUser();
  let {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: zodResolver(zodValidation),
    defaultValues: {
      email: "",
    },
  });
  {
    /*************************Handle submit***************************/
  }
  let [email, setEmail] = useState<string>("");
  let onSubmit = async () => {
    try {
      setLoading(true);
      await Axios.post("/auth/login", {
        email,
      })
        .then((res) => {
          setLoading(false);
          if (res.data.success) {
            setCurrentUser({
              email: res.data.email,
              _id: res.data.data._id,
              notificationSound: res.data.data.notificationSound,
              sendingSound: res.data.data.sendingSound,
              muted: res.data.data.muted,
            });
            console.log(res);
            enqueueSnackbar(res.data.message, { variant: "success" });
            navigate("/");
          } else {
            enqueueSnackbar(res.data.message, {
              variant: "error",
            });
          }
        })
        .catch((err) => {
          setLoading(false);
          enqueueSnackbar("Login Failed", {
            variant: "error",
          });
          console.log(err);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        minWidth: "100%",
        maxWidth: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-screen flex flex-col justify-center items-center gap-[50px] px-5 "
      >
        <Box sx={{ position: "relative" }}>
          {/********************Whatsapp icon****************** */}
          <WhatsAppIcon className="dark:text-green-600" sx={{ fontSize: 70 }} />
          {/********************Dark mode icons****************** */}

          <Box sx={{ position: "absolute", top: "70px", right: "-30px" }}>
            <ToggleMode />
          </Box>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "15px", color: dark ? "gray" : "" }}>
            Welcome to whatsApp, please enter your email to login
          </Typography>
        </Box>

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              type="email"
              error={!!errors.email}
              label="Email"
              size="small"
              variant="outlined"
              {...field}
              helperText={errors.email?.message}
              onChange={(e) => {
                setEmail(e.target.value);
                field.onChange(e);
              }}
              placeholder="Typeing message"
              sx={{
                "& .MuiInputBase-input": {
                  color: dark ? "white" : "",
                },
                "& .MuiInputLabel-root": {
                  color: dark ? "gray" : "",
                },
                "& .MuiInputBase-root": {
                  backgroundColor: "transparent",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: dark ? "1px solid white" : "1px solid gray",
                },
              }}
            />
          )}
        />
        <Button
          disabled={loading}
          type="submit"
          variant="contained"
          color="success"
          sx={{ ":disabled": { opacity: 0.9, cursor: "not-allowed" } }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
}

export default Login;
