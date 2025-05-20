import { create } from "zustand";

export const useStore = create((set) => ({
  productQuantities: {},
  allProductQuantities: (0),

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
        // [id]: (state.productQuantities[id] || 0) - 1,
      },
    })),

  getProductNumber: (id) =>
    set((state) => ({
      productQuantities: {
        ...state.productQuantities,
        [id]: state.productQuantities[id] || 0,
      },
    })),
  removeProductQuantities: (id) =>
    set((state) => ({
      productQuantities: {
        ...state.productQuantities,
        [id]: 0,
      },
    })),
  increaseProductNumber: () => set((state) => ({ products: state.products + 1 })),
  decreaseProductNumber: () => set((state) => ({ products: state.products - 1 })),

  // quantatityAndPriceCalculater: (id, price) =>
  //   set((state) => {
  //     const quantity = state.productQuantities[id] || 0;
  //     const totalPrice = quantity * price;
  //     return {
  //       productPrices: {
  //         ...state.productPrices,
  //         [id]: totalPrice,
  //       },
  //     };
  //   }),
  // quantatityAndPriceCalculater: () =>
  //   set((state) => {
  //     const totalPrice = Object.keys(state.productQuantities).reduce((sum, id) => {
  //       const quantity = state.productQuantities[id] || 0;
  //       const price = state.productPrices[id] || 0;
  //       return sum + quantity * price;
  //     }, 0);
  //     return { totalPrice };
  //   }),

  removeAllProducts: () => set({ productQuantities: {} }),
}));
