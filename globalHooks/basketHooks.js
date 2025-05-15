import { create } from "zustand";

export const useStore = create((set) => ({
  productQuantities: {},

  increaseProductNumber: (id) =>
    set((state) => ({
      productQuantities: {
        ...state.productQuantities,
        [id]: (state.productQuantities[id] || 0) + 1,
      },
    })),

  decreaseProductNumber: (id) =>
    set((state) => ({
      productQuantities: {
        ...state.productQuantities,
        [id]: Math.max((state.productQuantities[id] || 0) - 1, 0),
      },
    })),

  getProductNumber: (id) =>
    set((state) => ({
      productQuantities: {
        ...state.productQuantities,
        [id]: state.productQuantities[id] || 0,
      },
    })),

  removeAllProducts: () => set({ productQuantities: {} }),
}));
