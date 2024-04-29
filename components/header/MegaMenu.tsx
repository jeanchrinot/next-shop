import Categories from "./Categories"

const MegaMenuComponent = () => {
  return (
    <ul className="flex hidden gap-6 text-sm md:flex md:items-center">
      <li className="">
        <a
          href="/search"
          className="underline-offset-4 hover:underline hover:text-primary"
        >
          Shop All
        </a>
      </li>

      <li className="hoverable">
        <a
          href="#"
          className="flex h-10 leading-10 underline-offset-4 hover:text-primary hover:underline"
        >
          Categories
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
        </a>
        <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-base-300">
          <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
            <Categories />
            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
              <h3 className="font-bold text-xl text-bold mb-2">Heading 2</h3>
              <li>
                <a
                  href="#"
                  className="block p-3 underline-offset-4 hover:text-primary hover:underline"
                >
                  Category One Sublink
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 underline-offset-4 hover:text-primary hover:underline"
                >
                  Category One Sublink
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 underline-offset-4 hover:text-primary hover:underline"
                >
                  Category One Sublink
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 underline-offset-4 hover:text-primary hover:underline"
                >
                  Category One Sublink
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 underline-offset-4 hover:text-primary hover:underline"
                >
                  Category One Sublink
                </a>
              </li>
            </ul>
            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
              <h3 className="font-bold text-xl text-white text-bold">
                Heading 3
              </h3>
              <li>
                <a
                  href="#"
                  className="block p-3 underline-offset-4 hover:text-primary hover:underline"
                >
                  Category One Sublink
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 underline-offset-4 hover:text-primary hover:underline"
                >
                  Category One Sublink
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 underline-offset-4 hover:text-primary hover:underline"
                >
                  Category One Sublink
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 underline-offset-4 hover:text-primary hover:underline"
                >
                  Category One Sublink
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-3 underline-offset-4 hover:text-primary hover:underline"
                >
                  Category One Sublink
                </a>
              </li>
            </ul>
            <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 pb-6 pt-6 lg:pt-3">
              <h3 className="font-bold text-xl text-white text-bold mb-2">
                Heading 4
              </h3>
              <li className="pt-3">
                <img src="https://placehold.it/205x172" />
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default MegaMenuComponent
