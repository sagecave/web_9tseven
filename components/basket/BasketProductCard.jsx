import { useStore } from "../../globalHooks/basketHooks";
import { useBasketStore } from "../../globalHooks/basketProduct";
// removeOneProduct
const BasketProductCard = ({ title, id }) => {
  const increaseProductNumber = useStore((state) => state.increaseProductNumber);
  const decreaseProductNumber = useStore((state) => state.decreaseProductNumber);
  const productQuantities = useStore((state) => state.productQuantities);
  const removeProductQuantities = useStore((state) => state.removeProductQuantities);
  const remove = useBasketStore((state) => state.remove);
  const quantity = productQuantities[id] || 1;

  function handleDecrease(id) {
    if (quantity > 1) {
      decreaseProductNumber(id);
    } else if (quantity <= 1) {
      remove(id);
      removeProductQuantities(id);
    }
  }

  return (
    <div className="flex flex-row gap-3 items-center ">
      <p>{title}</p>
      <button className="p-5 bg-amber-300" onClick={() => increaseProductNumber(id)}>
        +
      </button>
      <p>{quantity}</p>
      <button className="p-5 bg-blue-400" onClick={() => handleDecrease(id)}>
        -
      </button>
    </div>
  );
};

export default BasketProductCard;
