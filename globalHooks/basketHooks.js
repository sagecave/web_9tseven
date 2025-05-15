import { create } from "zustand";

export const useStore = create((set) => ({
  products: 0,
  increaseProductNumber: () => set((state) => ({ products: state.products + 1 })),
  decreaseProductNumber: () => set((state) => ({ products: state.products - 1 })),
  removeAllProducts: () => set({ products: 0 }),
  updateProducts: (newProducts) => set({ products: newProducts }),
}));
