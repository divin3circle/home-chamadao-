import { create } from "zustand";

interface OverlayState {
  isOverlayOpen: boolean;
  toggleOverlay: () => void;
}

export const useOverlayStore = create<OverlayState>((set) => ({
  isOverlayOpen: false,
  toggleOverlay: () =>
    set((state) => ({ isOverlayOpen: !state.isOverlayOpen })),
}));
