"use client"
import { useSearchParams } from "next/navigation"
import useSWR from "swr"

export const SearchBox = () => {
  const searchParams = useSearchParams()
  const q = searchParams.get("q") || ""

  return (
    <>
      <form
        action="/search"
        method="GET"
        className="w-max-[550px] relative w-full lg:w-80 xl:w-full"
      >
        <input
          type="text"
          placeholder="Search for products..."
          autoComplete="off"
          className="w-full rounded-lg border px-4 py-2 text-sm placeholder:text-neutral-500 border-neutral-500 bg-transparent"
          name="q"
          defaultValue={q}
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
    </>
  )
}
