const paymentSuccessPage = ({ searchParams: { amount } }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" bg-pink-500 w-1/2 p-6 flex flex-col justify-center items-center rounded-lg shadow-lg">
        <h1 className="text-HeaderSizeSmall text-main_black pb-[20]">Payment Success</h1>
        <p className="text-HeaderSizeSmall text-main_black pb-[20]">
          You have successfully paid <span>{amount}</span>
        </p>
      </div>
    </div>
  );
};

export default paymentSuccessPage;
