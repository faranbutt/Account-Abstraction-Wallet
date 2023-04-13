import RainbowKitExample from "./components/rainbow";
import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center">
      <div className="md:flex max-w-6xl m-auto">
        <div className="col-span-12 lg:col-span-6 mt-12 xl:mt-10 space-y-6 px-6 text-center sm:text-left">
          <div className="text-5xl md:text-6xl xl:text-7xl leading-tight capitalize font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-600">PanaWallet</div>
          <span className="text-base md:text-lg text-gradient font-semibold uppercase">Sign up today</span>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight capitalize md:pr-8 xl:pr-10">
            The Crypto app <span className="text-header-gradient"> made for you</span> 
          </h1>
          <p className="text-lg md:text-xl">
            Looking to invest in a diverse range of cryptocurrencies? Our platform offers you the ability to buy and sell over 500 cryptocurrencies with ease, using either bank transfers or your credit/debit card with support for 10+ flat currencies.
          </p>
          <div className="md:flex flex-row space-x-4 mt-6">
            <button className="px-5 py-2 bg-inherit text-gradient border border-[#0c66ee] rounded-lg hover:scale-105 duration-300 font-semibold tracking-wider md:text-lg">Get Started</button>
            <div className="flex justify-center">
              <RainbowKitExample />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

