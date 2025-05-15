import { useStore } from "../../globalHooks/basketHooks";

const BasketProductCard = ({ key, title }) => {
  console.log("BasketProductCard", key, title);
  const numOfProducts = useStore((state) => state.products);
  const increaseProductNumber = useStore((state) => state.increaseProductNumber);
  const decreaseProductNumber = useStore((state) => state.decreaseProductNumber);
  //   const updateProducts = useStore((state) => state.updateProducts);
  //   This line can be used to remove all the products numbers
  //   const removeAllProducts = useStore((state) => state.removeAllProducts);

  const decreaseProductNumbers = () => {
    if (numOfProducts > 0) {
      decreaseProductNumber();
    } else {
      console.log("No products to remove");
    }
  };

  return (
    <div className="flex flex-row gap-3 items-center ">
      <p>{title}</p>
      <button className="p-5 bg-amber-300" onClick={increaseProductNumber}>
        +
      </button>
      <p>{numOfProducts}</p>
      <button className="p-5 bg-blue-400" onClick={decreaseProductNumbers}>
        -
      </button>
    </div>
  );
};

export default BasketProductCard;
