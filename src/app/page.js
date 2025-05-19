"use client";
import Link from "next/link";
import CheckoutPage from "../../components/stripe/CheckoutPage";
import { convertToSubcurrency } from "../../lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("Missing Stripe publishable key");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
export default function Home() {
  const amount = 1000;
  return (
    <div>
      <Link href="/productPage/1" className=" text-amber-400">
        Go to testPage
      </Link>
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
    </div>
  );
}
