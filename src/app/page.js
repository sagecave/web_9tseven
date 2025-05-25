"use client";
import Image from "next/image";
import Link from "next/link";
import ProductContainer from "../../components/frontPageProductsShow/productContainer";
import ProductLayout from "../../layouts/ProductLayout";
export default function Home() {
  return (
    <>
      <section className=" h-[50vh] md:h-[100vh] col-start-1 col-end-4 grid overflow-hidden  relative">
        <Image src="/assets/images/frontPageFirstPic.jpg" alt="hero" fill className="md:w-full h-full  overflow-hidden  object-cover " />
      </section>
      <section className="grid md:col-start-2 md:col-end-3 col-start-1 col-end-4 md:mt-10">
        <ProductLayout>
          <ProductContainer
            slice1="2"
            slice2="3"
            slice3="0"
            slice4="1"
            images="firstProductShow"
            header="GRATITUDE"
            paragraph="Gratitude means noticing and appreciating the good things in life. It can boost your mood and help you feel more connected. With Social Run, it’s easier to feel grateful — whether it's for a shared smile, a team effort, or just showing up together. Running with others brings small moments that mean a lot."
          />
        </ProductLayout>
      </section>
      <section className=" h-[70vh] md:h-[100vh] col-start-1 col-end-4 grid overflow-hidden  relative md:mt-10">
        <div className="flex">
          <Image src="/assets/images/frontPageSecoundPicColor.jpg" alt="hero" width={1000} height={1000} className="md:w-full h-full  overflow-hidden  object-cover hover:saturate-50 " />
          <Image src="/assets/images/frontPageSecoundPic2.jpg" alt="hero" width={1000} height={1000} className="md:w-full h-full  overflow-hidden  object-cover  saturate-0 hover:saturate-100 hidden md:block" />
          <Link href="/productPage" className="absolute bottom-10 left-6 sm:left-15 border-main_white border-2 text-main_white p-3 text-ParagraphSize hover:bg-alternativ_black">
            SHOP PERFROMANCE
          </Link>
        </div>
      </section>
      <section className="grid lg:col-start-2 lg:col-end-3 col-start-1 col-end-4 mt-10">
        <ProductLayout>
          <ProductContainer
            slice1="4"
            slice2="5"
            slice3="7"
            slice4="8"
            variant="reverseContainer"
            images="secoundProductShow"
            header="DIVERSITY"
            paragraph="Creating a space for diversity means welcoming different people, voices, and stories. It makes us stronger and more open-minded.
With Social Run, everyone is invited — no matter your background, pace, or experience. It’s a place where we move together and learn from each other."
          />
        </ProductLayout>
      </section>
      <section className="h-[50vh] md:h-[100vh] col-start-1 col-end-4 grid overflow-hidden  relative">
        <Image src="/assets/images/frontPageThridPic.jpg" alt="hero" fill className="md:w-full h-full  overflow-hidden  object-cover " />
        <div className="absolute bottom-10 md:bottom-20 left-6 sm:left-15">
          <div className="mb-8 hidden sm:block">
            <h2 className="mb-2">MANIFESTO</h2>
            <p className="w-[20rem]">
              Gratitude means noticing and appreciating the good things in life. It can boost your mood and help you feel more connected. With Social Run, it’s easier to feel grateful — whether it's for a shared smile, a team effort, or just showing
              up together. Running with others brings small moments that mean a lot.
            </p>
          </div>
          <Link href="/communityPage" className=" border-main_white border-2 text-main_white p-3 text-ParagraphSize hover:bg-alternativ_black ">
            JOIN OUR COMMUNITY
          </Link>
        </div>
      </section>
      <section className="grid lg:col-start-2 lg:col-end-3 col-start-1 col-end-4 mt-10">
        <ProductLayout>
          <ProductContainer
            slice1="8"
            slice2="9"
            slice3="1"
            slice4="2"
            images="thirdProductShow"
            header="WELCOME ALL FEELINGS"
            paragraph="Welcome all feelings means it's okay to feel happy, tired, nervous, or excited — all emotions are valid. You don't have to hide how you feel.
With Social Run, you can show up just as you are. It's a space where you're met with support, no matter your mood. We run together — with all our feelings."
          />
        </ProductLayout>
      </section>
      <section className="h-[70vh] md:h-[100vh] col-start-1 col-end-4 grid overflow-hidden  relative">
        <Image src="/assets/images/frontPageFourPic.jpg" alt="hero" fill className="md:w-full h-full  overflow-hidden  object-cover " />
        <Link href="/productPage" className="absolute bottom-10 left-6 sm:left-15 bg-main_black  text-main_white p-3 text-ParagraphSize hover:bg-alternativ_black">
          SHOP PERFROMANCE
        </Link>
      </section>
    </>
  );
}
