import { create } from "zustand";

type ActiveTabsType =
  | "account-information"
  | "history-of-turns"
  | "messages"
  | "medical-files"
  | "feedbacks"
  | "password"
  | "logout";

interface StoreState {
  activeTab: ActiveTabsType;
  setActiveTab: (tab: ActiveTabsType) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
  activeTab: "account-information", 
  setActiveTab: (tab: ActiveTabsType) => set({ activeTab: tab }),
  isModalOpen: false,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
}));

export default useStore;