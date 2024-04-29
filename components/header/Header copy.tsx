import Link from "next/link"
import Image from "next/image"
import React from "react"
import Menu from "./Menu"
import { SearchBox } from "./SearchBox"
import MegaMenuComponent from "./MegaMenu"

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between border-b border-base-300 dark:bg-neutral-900 dark:border-neutral-700">
          <div>
            <Link href={"/"}>
              <Image
                src="/ato.mg-logo.png"
                width={130}
                height={40}
                alt="Ato.MG Logo"
                style={{ marginRight: "30px" }}
              />
            </Link>
            <MegaMenuComponent />
          </div>

          <Menu />
        </div>
        <div className="bg-base-300 block md:hidden text-center pb-3">
          <SearchBox />
        </div>
        {/* <div className="hidden justify-center md:flex md:w-1/3">
          <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
            <input
              type="text"
              placeholder="Search for products..."
              autoComplete="off"
              className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
              name="search"
              value=""
            />
            <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                ></path>
              </svg>
            </div>
          </form>
        </div> */}
      </nav>
    </header>
  )
}

export default Header
