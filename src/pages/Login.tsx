import { Box, Button, TextField } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


import { Controller, useForm } from "react-hook-form";
import { zodValidation } from "../util/formValidation";
import {  useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import ToggleMode from "../component/ToggleMode";

function Login() {
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

  let [email, setEmail] = useState<string>("");
  let onSubmit = () => {
    console.log(email);
  };
 
  return (
    <Box sx={{ minWidth: '100%', maxWidth: "100%", width: "100%" , display: "flex", justifyContent: "center", alignItems: "center" }}>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-screen flex flex-col justify-center items-center gap-[50px] px-5 "
    >
      <Box sx={{position:"relative"}} >
        {/********************Whatsapp icon****************** */}
        <WhatsAppIcon
        className="dark:text-green-600"
          sx={{ fontSize: 70 }}
        />
        {/********************Dark mode icons****************** */}

        <Box sx={{position:"absolute", top:"70px", right:"-30px" }}  >
         <ToggleMode/>
        </Box>
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
          />
        )}
      />
      <Button type="submit" variant="contained" color="success">
        Login
      </Button>
    </form>
    </Box>
  );
}

export default Login;
