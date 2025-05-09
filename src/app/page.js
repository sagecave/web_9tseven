import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/productPage">Go to products</Link>
      <Link href="/productPage/1">Go to testPage</Link>
    </div>
  );
}
