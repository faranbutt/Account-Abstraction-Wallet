import RainbowKitExample from "./components/rainbow"
import Image from "next/image"
export default function Home() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:h-screen h-full flex items-center">
      <section className="md:flex max-w-6xl m-auto">
        <div className="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <div className="text-[2.5rem] sm:text-5xl xl:text-6xl leading-tight capitalize sm:pr-8 xl:pr-10 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">PanaWallet</div>
          <span className="text-base text-gradient font-semibold uppercase">Sign up today</span>
          <h1 className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10">
            The Crypto app <span className="text-header-gradient"> made for you</span> 
          </h1>
          <p>
          Buy and sell 200+ cryptocurrencies with 20+ flat currencies using bank transfers or your credit/debit card.
          </p>
          <div className="md:flex flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
            <button className="px-5 py-1 bg-inherit text-gradient border border-[#0c66ee] rounded-lg hover:scale-105 duration-300 font-semibold">Get Started</button>
            <div className="flex justify-center">
              <RainbowKitExample />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
