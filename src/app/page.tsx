"use client";
import Image from "next/image";
import images from "../constant/images";
import TidioChat from "@/components/tidio";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to another page
    router.push("/walletconnect");
  };

  return (
    <div className="">
      <Navbar />

      {/* header */}
      <div
        className="w-full bg-[#02a5eb]"
      >
        <div className="flex flex-row items-center justify-between p-4">
          <Image src={images.header1} alt="Logo" className="w-1/2 h-auto " priority />

          <div className="w-1/2 text-white bg-[#1c2733] max-w-md h-96 flex flex-col items-center justify-center border rounded-md">
            <Image
              src={images.header2}
              alt="Logo"
              className="w-1/2 h-auto mb-3"
            />
            <button
              className="bg-green-500 mt-5 mb-4 border border-black rounded-lg p-2 w-40"
              onClick={handleClick}
            >
              Buy with card
            </button>
            <button
              className="bg-purple-600 border border-black rounded-lg p-2 w-40"
              onClick={handleClick}
            >
              Buy with crypto
            </button>
          </div>
        </div>
      </div>

      {/* body */}

      <div className="flex flex-col items-center justify-center mt-7 gap-2">
        <h1 className="text-black text-5xl mb-2">Buy Best Wallet Token Now!</h1>
      </div>

      {/* //////// */}

      <div className="flex flex-col mt-7 justify-center items-center gap-2">
        <h1 className="text-black text-4xl mt-9">Best Wallet Token Benefits</h1>

        <p className="text-black text-xl px-9 flex items-center justify-center">
          Best Wallet boasts 50% month-on-month user growth and is on track to
          capture 40% of the $11bn non-custodial wallet market by 2026. Buy
          $BEST tokens above or directly in-app to enjoy unrivalled holder
          benefits!
        </p>

        <div className="w-full mt-10 flex justify-center items-center ">
          <Image
            src={images.devRelease}
            alt="Logo"
            className="max-w-full max-h-full "
          />
        </div>
      </div>

      {/* //////// */}

      <div className="w-full mt-10 flex justify-center items-center ">
        <Image
          src={images.phone}
          alt="Logo"
          className="max-w-full max-h-full "
        />
      </div>

      {/* //////// */}

      <div className="flex flex-col mt-7 justify-center items-center gap-3">
        <div className="w-full mt-10 flex justify-center items-center ">
          <Image
            src={images.logo}
            alt="Logo"
            className="max-w-full max-h-full border rounded "
          />
        </div>
        <h1 className="text-black text-4xl flex items-center justify-center p-3">
          Best Wallet Token Airdrop Token Airdrop Token Airdrop
        </h1>

        <p className="text-black text-xl px-3">
          Earn $BEST tokens in the Best Airdrop campaign! Register and start
          earning instantly by completing Daily and One-Time Quests and engaging
          with Best Wallet socials.
        </p>
        <button
          onClick={handleClick}
          className="bg-[#f578bb] text-white text-xl px-16 py-2 rounded-3xl"
        >
          Learn More
        </button>
      </div>

      {/* //////// */}

      <div className="flex flex-col mt-7 justify-center items-center gap-2">
        <div className="w-full mt-10 flex justify-center items-center ">
          <Image
            src={images.footer}
            alt="Logo"
            className="max-w-full max-h-full "
          />
        </div>
      </div>

      {/* <TidioChat /> */}

      {/* key features */}
    </div>
  );
}
