import Link from "next/link"
import Image from "next/image"
import React from "react"
import Menu from "./Menu"
import { SearchBox } from "./SearchBox"
import MegaMenuComponent from "./MegaMenu"

const Header = () => {
  return (
    <header className="">
      <nav className="relative flex items-center justify-between p-4 lg:px-6 border-b border-neutral-500">
        <div className="block flex-none md:hidden">
          <button
            aria-label="Open mobile menu"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors md:hidden dark:border-neutral-700 dark:text-white"
          >
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            {/* <a
              className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
              href="/"
            >
              <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Acme Store logo"
                  viewBox="0 0 32 28"
                  className="h-4 w-4 fill-black dark:fill-white h-[16px] w-[16px]"
                >
                  <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                  <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                </svg>
              </div>
            </a> */}
            <Link
              href={"/"}
              className="flex w-full items-center justify-center md:w-auto"
            >
              <Image
                src="/ato.mg-logo.png"
                width={130}
                height={40}
                alt="Ato.MG Logo"
                style={{ marginRight: "30px" }}
              />
            </Link>
            <MegaMenuComponent />
            {/* <ul className="hidden gap-6 text-sm md:flex md:items-center">
              <li>
                <a
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  href="/search"
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  href="/search/shirts"
                >
                  Shirts
                </a>
              </li>
              <li>
                <a
                  className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  href="/search/stickers"
                >
                  Stickers
                </a>
              </li>
            </ul> */}
          </div>
          <div className="hidden justify-center md:flex md:w-1/3">
            <SearchBox />
          </div>
          <div className="flex justify-end md:w-1/3">
            <Menu />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
