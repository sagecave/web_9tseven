import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-main_black w-full h-auto pt-8 pb-8 pr-14 pl-14 ">
      <div className="flex justify-center mb-5 ">
        <Image src="/assets/images/logoWhite.png" alt="Logo" width={50} height={50} />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-5">
          <h2 className=" text-HeaderSizeSmall">JOIN THE 9TSEVEN NEWSLETTER</h2>
          <form>
            <input className=" border-2 border-main_white w-[20rem] h-[3rem] p-2" type="text" placeholder="Email address" name="mail" required></input>
            <input className="border-2 border-main_white border-l-[0] w-[5rem] h-[3rem] p-2 hover:bg-alternativ_black " type="submit" />

            <div>
              <div className="flex flex-row gap-2">
                <input type="checkbox" name="mail"></input>
                <p>I accept the terms</p>
              </div>
              <p>Read terms</p>
            </div>
          </form>
        </div>
        <div className="flex flex-row gap-5">
          <div>
            <h2>SOCIALS</h2>
            <ul>
              <li className="hover:text-alternativ_white hover:underline">
                <Link href={"/"}>INSTAGRAM</Link>
              </li>
              <li className="hover:text-alternativ_white hover:underline">
                <Link href={"/"}>FACEBOOK</Link>
              </li>
              <li className="hover:text-alternativ_white hover:underline">
                <Link href={"/"}>YOUTUBE</Link>
              </li>
              <li className="hover:text-alternativ_white hover:underline">
                <Link href={"/"}>TIKTOK</Link>
              </li>
              <li className="hover:text-alternativ_white hover:underline">
                <Link href={"/"}>LINKEDIN</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>COMPANY</h2>
            <ul>
              <li className="hover:text-alternativ_white hover:underline">
                <Link href={"/"}>CONTACT</Link>
              </li>
              <li className="hover:text-alternativ_white hover:underline">
                <Link href={"/"}>COMMUNITY</Link>
              </li>
              <li className="hover:text-alternativ_white hover:underline">
                <Link href={"/"}>ABOUT</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
