import Link from "next/link"
import { useRouter } from "next/router";

export default function Home() {
  const code = "KOR";
  const router = useRouter();
  const onClickButton = () => {
    router.push("/search");
  }
  return (
    <div>
      Home Page
      <div>
        <button onClick={onClickButton}>Search Page로 이동</button>
      </div>
      <div>
        <Link href={"/search"}>Search Page 이동</Link>
      </div>
      <div>
        <Link href={{
           pathname: "/country/[code]",
           query: {code: code}, 
        }}
        >
          {code} Page로 이동</Link>
      </div>
    </div>
  )
}
