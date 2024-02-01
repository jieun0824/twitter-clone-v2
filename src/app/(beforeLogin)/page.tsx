import Link from "next/link";
import { TwitterBlack } from "../../../public/Icon/Icon";

export default function Home(){

  return(
    <div className="flex p-24 w-dvw h-dvh lg:items-center md:flex-col lg:flex-row lg:justify-center">
    <div className="lg:flex-1">
        <TwitterBlack className="md:w-16 lg:w-96 md:h-16 lg:h-96"/>
    </div>
    <div className="lg:flex-1">
        <p className="text-7xl font-bold mt-12">지금 일어나고 있는 일</p>
        <p className="text-4xl font-bold mb-8 mt-12">지금 가입하세요.</p>
        <Link href='/i/flow/signup' className="text-white bg-sky-500 rounded-2xl p-2 w-72 h-10 hover:bg-sky-700">계정 만들기</Link>
        <p className="font-bold mb-5 mt-10">이미 트위터에 가입하셨나요?</p>
        <Link href='/i/flow/login' className="text-sky-500 rounded-2xl border-2 p-2 w-72 h-10">로그인</Link>
    </div>
  </div>
  )
}
