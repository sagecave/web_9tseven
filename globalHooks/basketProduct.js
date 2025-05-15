import { create } from "zustand";

export const useBasketStore = create((set) => ({
  BasketSatete: [],

  update: (newProducts) => set((state) => ({ BasketSatete: [...state.BasketSatete, ...newProducts] })),
}));
