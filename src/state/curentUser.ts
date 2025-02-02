import { create } from "zustand";
export interface User {
  _id?: string;
  bio?: string;
  email?: string;
  muted?: boolean;
  profile?: string;
  lastName?: string;
  firstName?: string;
  sendingSound?: string;
  notificationSound?: string;
}

interface CurrentUser {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
}
export let useCurrentUser = create<CurrentUser>((set) => ({
  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user }),
}));
