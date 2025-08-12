import { create } from "zustand";

type ActiveTabsType =
  | "account-information"
  | "history-of-turns"
  | "messages"
  | "medical-files"
  | "feedbacks"
  | "password"
  | "logout";

type WeblogCategoryType =
  | "skin-and-hair"
  | "mental-health"
  | "sexual-health"
  | "mother-and-child"
  | "nutrition-and-diet"
  | "latest";

interface StoreState {
  activeTab: ActiveTabsType;
  setActiveTab: (tab: ActiveTabsType) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  weblogCategory: WeblogCategoryType;
  setWeblogCategory: (category: WeblogCategoryType) => void;
}

const useStore = create<StoreState>((set) => ({
  activeTab: "account-information",
  setActiveTab: (tab: ActiveTabsType) => set({ activeTab: tab }),
  isModalOpen: false,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
  weblogCategory: "latest",
  setWeblogCategory: (category) => set({ weblogCategory: category }),
}));

export default useStore;
