import Image from "next/image";
const communityPage = () => {
  return (
    <section className="grid grid-cols-subgrid col-start-1 col-end-4">
      <div className="grid col-start-2 col-end-3 mt-4 mb-4">events</div>
      <div className="grid col-start-1 col-end-4 object-cover">
        <Image className="object-cover w-full" src="/assets/images/communityRun.jpg" alt="Community grup running" width={500} height={300} />
      </div>
      <div className="grid grid-cols-subgrid col-start-1 col-end-4  mt-4 ">
        <div className=" grid-cols-subgrid col-start-1 col-end-4 md:col-start-2 md:col-end-3 md:grid-cols-2 grid">
          <div className=" col-start-2 col-end-3 mt-4 mb-4 md:col-start-1 md:col-end-2 md:w-[70%] ">
            <h2 className=" text-HeaderSizeSmall text-main_black">MANIFESTO</h2>
            <p className="text-neutral_black text-ParagraphSize mt-2">
              The 9TSEVEN Manifesto is a guide for living with purpose, growth, and connection. It encourages gratitude, self-awareness, and embracing all emotions. It reminds us to value diversity, challenge our limits, and stay committed to
              personal growth. The manifesto promotes balance—mentally, physically, and emotionally—and highlights the importance of community and passion. It’s about becoming the best version of yourself, one step at a time.
            </p>
          </div>

          <div className="grid col-start-1 col-end-4 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:mt-4 md:ml-5">
            <Image className="object-cover w-full md:w-full" src="/assets/images/comunityRelax.jpg" alt="Person sitting down" width={500} height={300} />
          </div>

          <div className=" col-start-2 col-end-3 mt-4 mb-4 md:col-start-2 md:col-end-3 md:mt-20 md:ml-5 ">
            <h2 className="text-main_black text-HeaderSizeSmall mt-2">A GUIDANCE OF LIVING</h2>
            <ul className="*:text-neutral_black *:text-ParagraphSize *:pt-4">
              <li>
                <span className=" font-bold">Gratitude.</span> Thank you for this one life.
              </li>
              <li>
                <span className=" font-bold">Create a space for diversity. </span>We are all the same.
              </li>
              <li>
                <span className=" font-bold">It’s you vs you.</span> At your own pace, in your own time.
              </li>
              <li>
                <span className=" font-bold">Welcome all feelings.</span> To appreciate the highs, we have to appreciate the lows.
              </li>
              <li>
                <span className=" font-bold"> Nothing changes if nothing changes.</span> Start now and improve later.
              </li>
              <li>
                <span className=" font-bold">Challenge your limits.</span> Growth happens when you step outside your comfort zone.
              </li>
              <li>
                <span className=" font-bold">Fuel your passion, not just your body.</span> What drives you is as important as what nourishes you.
              </li>
              <li>
                <span className=" font-bold">You’re always developing, always evolving.</span> Enjoy the process.
              </li>
              <li>
                <span className=" font-bold">Holistic health.</span> Invest in your physical, mental, and emotional well-being.
              </li>
              <li>
                <span className=" font-bold">Community.</span> Create a space for inspiration & human connection.
              </li>
            </ul>
          </div>

          <div className="grid col-start-1 col-end-4 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 lg:bottom-15 md:mr-5 md:relative">
            <Image className="object-cover w-full md:w-full md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2" src="/assets/images/communityStand.jpg" alt="Person standing" width={500} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default communityPage;
