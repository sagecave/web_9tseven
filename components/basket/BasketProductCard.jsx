import { useStore } from "../../globalHooks/basketHooks";
import { useBasketStore } from "../../globalHooks/basketProduct";

const BasketProductCard = ({ title, id, productImages, item, price, variant = "blackBackground" }) => {
  const increaseProductNumber = useStore((state) => state.increaseProductNumber);
  const decreaseProductNumber = useStore((state) => state.decreaseProductNumber);
  const removeProductQuantities = useStore((state) => state.removeProductQuantities);
  const remove = useBasketStore((state) => state.remove);
  const increaseAllProductNumber = useStore((state) => state.increaseAllProductNumber);
  const decreaseAllProductNumber = useStore((state) => state.decreaseAllProductNumber);
  const productQuantities = useStore((state) => state.productQuantities);
  const quantity = productQuantities[id] || 1;

  function handleDecrease(id) {
    if (quantity > 1) {
      decreaseProductNumber(id);
      decreaseAllProductNumber();
    } else if (quantity <= 1) {
      remove(id);
      decreaseAllProductNumber();
      removeProductQuantities(id);
    }
  }
  function handleIncrease(id) {
    increaseProductNumber(id);
    increaseAllProductNumber();
  }

  let headerVariantStyles = "";
  let paragraphVariantStyles = "";
  let buttonsStyle = "";
  let cardContainer = "";
  let textContainer = "";
  switch (variant) {
    case "whiteBackground":
      // headerVariantStyles = "text-main_black text-HeaderSizeSmall";
      // paragraphVariantStyles = "text-ParagraphSize text-alternativ_black";
      // buttonsStyle = "hidden";
      // cardContainer = "flex flex-col md:flex-row justify-between md:items-center mt-4 border-alternativ_white border-1 p-2";
      // textContainer = "flex flex-col md:flex-row gap-6 items-center ";
      headerVariantStyles = "text-main_black text-HeaderSizeSmall";
      paragraphVariantStyles = "text-ParagraphSize text-alternativ_black";
      buttonsStyle = "p-1 w-6 h-6 text-center flex items-center justify-center rounded-full bg-main_white text-main_black hover:bg-alternativ_black hover:text-main_white";
      cardContainer = "flex  md:flex-row justify-between items-center mt-4 border-alternativ_white border-1 h-[10rem] w-fit ";
      textContainer = "flex flex-row gap-6 items-center w-[20rem] ";

      break;
    case "blackBackground":
      headerVariantStyles = "text-main_white text-HeaderSizeSmall";
      paragraphVariantStyles = "text-ParagraphSize text-alternativ_white";
      buttonsStyle = "p-1 w-6 h-6 text-center flex items-center justify-center rounded-full bg-main_white text-main_black hover:bg-alternativ_black hover:text-main_white";
      cardContainer = "flex  md:flex-row justify-between items-center mt-4 ";
      textContainer = "flex flex-row gap-6 items-center ";
      break;
  }
  return (
    <div className={cardContainer}>
      <div className={textContainer}>
        <img className="w-[5rem]" src={productImages} alt={title} />
        <div>
          <h2 className={headerVariantStyles}>{title}</h2>
          <p className={paragraphVariantStyles}>{item}</p>
          <p className={paragraphVariantStyles}>{price},-</p>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <button className={buttonsStyle} onClick={() => handleIncrease(id)}>
          +
        </button>
        <p className={paragraphVariantStyles}>{quantity}</p>
        <button className={buttonsStyle} onClick={() => handleDecrease(id)}>
          -
        </button>
      </div>
    </div>
  );
};

export default BasketProductCard;
