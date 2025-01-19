import { create } from "zustand";
interface Receiver {
  id: number;
  name: string;
  profile: string;
  lastMessage: string;
}
interface ReceiverInfo {
  receiver: Receiver | null;
  setReceiver: (receiver: Receiver | null) => void;
}

let receiverInfo = create<ReceiverInfo>((set) => ({
  receiver: null,
  setReceiver: (receiver) => set({ receiver }),
}));
export default receiverInfo;
