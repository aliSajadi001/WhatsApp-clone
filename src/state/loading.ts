import { create } from "zustand";
interface Loading {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
export let useLoading = create<Loading>((set) => ({
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
}));
