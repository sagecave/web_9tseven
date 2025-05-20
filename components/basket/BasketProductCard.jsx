import { useStore } from "../../globalHooks/basketHooks";
import { useBasketStore } from "../../globalHooks/basketProduct";
// removeOneProduct
const BasketProductCard = ({ title, id, productImages, item, price, setProductPriceArray, productPriceArray }) => {
  const increaseProductNumber = useStore((state) => state.increaseProductNumber);
  const decreaseProductNumber = useStore((state) => state.decreaseProductNumber);
  const removeProductQuantities = useStore((state) => state.removeProductQuantities);
  const remove = useBasketStore((state) => state.remove);
  const productQuantities = useStore((state) => state.productQuantities);
  const quantity = productQuantities[id] || 1;

  function handleDecrease(id) {
    if (quantity > 1) {
      decreaseProductNumber(id);
    } else if (quantity <= 1) {
      remove(id);
      removeProductQuantities(id);
    }
  }
  function handleIncrease(id) {
    increaseProductNumber(id);

    console.log("productPriceArray", productPriceArray);
  }

  return (
    <div className="flex md:flex-row justify-between items-center mt-4 ">
      <div className="flex flex-row gap-6 items-center">
        <img className="w-[5rem]" src={productImages} alt={title} />
        <div>
          <h2 className="text-main_white text-HeaderSizeSmall">{title}</h2>
          <p className="text-ParagraphSize text-alternativ_white">{item}</p>
          <p className="text-ParagraphSize text-alternativ_white">{price},-</p>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <button className="p-1 w-6 h-6 text-center flex items-center justify-center rounded-full bg-main_white text-main_black hover:bg-alternativ_black hover:text-main_white" onClick={() => handleIncrease(id)}>
          +
        </button>
        <p>{quantity}</p>
        <button className="p-1 w-6 h-6 text-center flex items-center justify-center rounded-full bg-main_white text-main_black hover:bg-alternativ_black hover:text-main_white" onClick={() => handleDecrease(id)}>
          -
        </button>
      </div>
    </div>
  );
};

export default BasketProductCard;
