"use client"
import useCartService from "@/lib/hooks/useCartStore"
import useLayoutService from "@/lib/hooks/useLayout"
import { signIn, signOut, useSession } from "next-auth/react"

import Link from "next/link"
import { useEffect, useState } from "react"
import { SearchBox } from "./SearchBox"

const Menu = () => {
  const { items, init } = useCartService()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  const signoutHandler = () => {
    signOut({ callbackUrl: "/signin" })
    init()
  }

  const { data: session } = useSession()

  const { theme, toggleTheme } = useLayoutService()

  const handleClick = () => {
    ;(document.activeElement as HTMLElement).blur()
  }

  return (
    <>
      <div>
        <ul className="flex items-stretch items-center">
          <li>
            {mounted && (
              <label className="swap swap-rotate">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-md transition-colors">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    checked={theme === "light"}
                    onChange={toggleTheme}
                  />

                  {theme === "light" ? (
                    <svg
                      className="swap-on h-10 transition-all ease-in-out hover:scale-110 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="swap-off h-10 transition-all ease-in-out hover:scale-110 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
                      />
                    </svg>
                  )}
                </div>
              </label>
            )}
          </li>
          <li className="ms-2">
            <Link className="flex" href="/cart">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-md transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-10 transition-all ease-in-out hover:scale-110 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  ></path>
                </svg>
                {mounted && items.length != 0 && (
                  <div className="badge badge-secondary">
                    {items.reduce((a, c) => a + c.qty, 0)}{" "}
                  </div>
                )}
              </div>
            </Link>
          </li>
          {session && session.user ? (
            <>
              <li className="ms-2">
                <div className="dropdown dropdown-bottom dropdown-end">
                  <label
                    tabIndex={0}
                    className="flex h-10 leading-10 underline-offset-4 hover:text-primary hover:underline cursor-pointer"
                  >
                    {session.user.name}
                    <svg
                      data-testid="geist-icon"
                      height="16"
                      stroke-linejoin="round"
                      viewBox="0 0 16 16"
                      width="16"
                      aria-hidden="true"
                      style={{
                        pointerEvents: "none",
                        marginTop: "12px",
                        marginLeft: "2px",
                      }}
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.0607 6.74999L11.5303 7.28032L8.7071 10.1035C8.31657 10.4941 7.68341 10.4941 7.29288 10.1035L4.46966 7.28032L3.93933 6.74999L4.99999 5.68933L5.53032 6.21966L7.99999 8.68933L10.4697 6.21966L11 5.68933L12.0607 6.74999Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] p-2 shadow bg-base-300 rounded-box w-52 "
                  >
                    {session.user.isAdmin && (
                      <li onClick={handleClick}>
                        <Link href="/admin/dashboard">Admin Dashboard</Link>
                      </li>
                    )}

                    {session.user.role === "vendor" && (
                      <li onClick={handleClick}>
                        <Link href="/vendor/dashboard">Vendor Dashboard</Link>
                      </li>
                    )}

                    <li onClick={handleClick}>
                      <Link href="/order-history">Order history </Link>
                    </li>
                    <li onClick={handleClick}>
                      <Link href="/profile">Profile</Link>
                    </li>
                    <li onClick={handleClick}>
                      <button type="button" onClick={signoutHandler}>
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </>
          ) : (
            <li className="ms-2">
              <button
                aria-label="Sign in"
                type="button"
                onClick={() => signIn()}
              >
                <div className="relative flex h-11 w-11 items-center justify-center rounded-md transition-colors">
                  <svg
                    className="h-10 transition-all ease-in-out hover:scale-110 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
              </button>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default Menu
