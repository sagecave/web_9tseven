"use client";

import CheckoutPage from "../stripe/CheckoutPage";
import { convertToSubcurrency } from "../../lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useStore } from "../../globalHooks/basketHooks";
import { useBasketStore } from "../../globalHooks/basketProduct";
if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("Missing Stripe publishable key");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
const payment = () => {
  const { BasketSatete } = useBasketStore();
  const productQuantities = useStore((state) => state.productQuantities);
  const totalPrices = BasketSatete.reduce((acc, product) => {
    const quantity = productQuantities[product.id] || 0;
    return acc + product.price * quantity;
  }, 0);

  const amount = totalPrices;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" bg-pink-500 w-1/2 p-6 flex flex-col justify-center items-center rounded-lg shadow-lg">
        <h1 className="text-HeaderSizeSmall text-main_black pb-[20]">Checkout</h1>
        <p className="text-HeaderSizeSmall text-main_black pb-[20]">
          Has requested <span>{amount}</span>
        </p>
        <div className="flex justify-center items-center">
          <Elements
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount: convertToSubcurrency(amount),
              currency: "usd",
            }}
          >
            <CheckoutPage amount={amount} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default payment;
