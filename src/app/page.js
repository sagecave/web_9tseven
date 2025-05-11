import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/productPage" className=" text-amber-600">
        Go to products
      </Link>
      <Link href="/productPage/1" className=" text-amber-400">
        Go to testPage
      </Link>
    </div>
  );
}
