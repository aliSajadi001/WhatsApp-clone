import { useEffect } from "react";
import useToggleMode from "../state/toggleMode";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Box } from "@mui/material";

function ToggleMode() {
  let { dark, setToggleMode } = useToggleMode();
  let toggleMode = () => {
    if (dark) {
      localStorage.removeItem("darkMode");
      setToggleMode();
    } else {
      localStorage.setItem("darkMode", "true");
      setToggleMode();
    }
  };

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);
  return (
    <>
      {dark ? (
        <>
          <Brightness7Icon
            onClick={toggleMode}
            sx={{ color: "#fff", fontSize: "20px" , cursor : "pointer" }} />
        </>
      ) : (
        <>
          <Brightness3Icon onClick={toggleMode} sx={{ fontSize: "20px" , cursor : "pointer" }} />
        </>
      )}
    </>
  );
}

export default ToggleMode;
