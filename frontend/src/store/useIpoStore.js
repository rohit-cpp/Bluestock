import { create } from "zustand";

export const useIpoStore = create((set) => ({
  selectedIPO: null,
  setSelectedIPO: (ipo) => set({ selectedIPO: ipo }),
  clearIPO: () => set({ selectedIPO: null }),
}));
