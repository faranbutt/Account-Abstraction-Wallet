import RainbowKitExample from "./components/rainbow"
import Image from "next/image"
export default function Home() {
  return (
    <section className=" bg-[#E7F9FF] md:h-screen h-full flex items-center">
      <section className="md:flex max-w-6xl m-auto">
        <div className="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <span className="text-base text-gradient font-semibold uppercase">Sign up today</span>
          <h1 className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10">
            The Worlds <span className="text-header-gradient">Fastest Growing</span> Crypto Web App 
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
          <div className=" col-span-12 lg:col-span-6 relative md:mt-0 mt-16">
            <div className="w-full">
              <img src="/bitcoin.png" alt="" className="-mt-4 w-20 h-20 animate-bounce"/>
            </div>
            <div>
            <h1 className="flex font-semibold text-emerald-500">
              Hello <span className="animate-[wave_5s_ease-in-out_2]">👋🏻</span>, Faran Here
            </h1>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
