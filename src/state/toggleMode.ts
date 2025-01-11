import { create } from "zustand";
interface Dark {
  dark: boolean;
  setToggleMode: () => void;
}
let useToggleMode = create<Dark>((set) => ({
  dark: localStorage.getItem("darkMode") === "true",
  setToggleMode: () =>
    set((state: any) => ({
      dark: !state.dark,
    })),
}));
export default useToggleMode;
