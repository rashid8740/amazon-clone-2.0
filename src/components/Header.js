import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* seacrh */}
        <div className="bg-yellow-400 items-center rounded-md  hover:bg-yellow-500 hidden sm:flex h-10 flex-grow cursor-pointer">
          <input
            type="text"
            className="p-4 w-6 h-full flex-shrink rounded-l-md flex-grow focus:outline-none px-4"
          />
          <SearchIcon className=" h-12 p-4" />
        </div>

        {/* right side */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 max whitespace-nowrap">
          <div className=" link" onClick={!session ? signIn : signOut}>
            <p className="font-extrabold  sm:text-sm">
              {session ? `Hello, ${session.user.name}` : "Sign In"}
            </p>
            <p className="font-extrabold sm:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p className="font-extrabold sm:text-sm">Returns</p>
            <p className="font-extrabold sm:text-sm">& Orders</p>
          </div>
          <div
            className="link flex  items-center  relative"
            onClick={() => router.push("/checkout")}
          >
            <span className="absolute top-0 right-0 md:right-10  h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10 " />
            <p className="font-extrabold sm:text-sm  hidden md:flex mt-2">
              {" "}
              Basket
            </p>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6 ">
        <p className="link flex  items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
