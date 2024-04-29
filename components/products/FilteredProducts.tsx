import ProductItem from "@/components/products/ProductItem"
import { Rating } from "@/components/products/Rating"
import productServices from "@/lib/services/productService"
import Link from "next/link"
import Categories from "../header/Categories"

const sortOrders = [
  { name: "Latest arrivals", value: "newest" },
  { name: "Price: Low to high", value: "lowest" },
  { name: "Price: High to low", value: "highest" },
  { name: "Rating", value: "rating" },
]
const prices = [
  {
    name: "$1 to $50",
    value: "1-50",
  },
  {
    name: "$51 to $200",
    value: "51-200",
  },
  {
    name: "$201 to $1000",
    value: "201-1000",
  },
]

const ratings = [5, 4, 3, 2, 1]

export default async function FilteredProducts({
  params,
  searchParams: {
    q = "all",
    category = "all",
    price = "all",
    rating = "all",
    sort = "newest",
    page = "1",
  },
}: {
  params: { slug: string }
  searchParams: {
    q: string
    category: string
    price: string
    rating: string
    sort: string
    page: string
  }
}) {
  let basePath = "/search"
  let categoryName = ""
  if (params.slug) {
    category = params.slug
    basePath = `/category/${category}`
  }

  const getFilterUrl = ({
    c,
    s,
    p,
    r,
    pg,
  }: {
    c?: string
    s?: string
    p?: string
    r?: string
    pg?: string
  }) => {
    const params = { q, price, rating, sort, page }
    if (p) params.price = p
    if (r) params.rating = r
    if (pg) params.page = pg
    if (s) params.sort = s
    return `?${new URLSearchParams(params).toString()}`
  }

  const categories = await productServices.getCategories()
  const categoryObj = await productServices.getCategoryBySlug(category)
  if (categoryObj && categoryObj.name) {
    categoryName = categoryObj.name
  }
  const { countProducts, products, pages } = await productServices.getByQuery({
    category,
    q,
    price,
    rating,
    page,
    sort,
  })
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 md:flex-row">
      <div className="order-first w-full flex-none md:max-w-[125px]">
        <nav>
          <h3 className="hidden text-sm text-neutral-500 md:block dark:text-neutral-400">
            Catégories
          </h3>
          <Categories />
        </nav>
        <div className="mt-3">
          <h3 className="hidden text-sm text-neutral-500 md:block dark:text-neutral-400">
            Price
          </h3>
          <ul>
            <li>
              <Link
                className={`link link-hover text-sm ${
                  "all" === price && "link-primary"
                }`}
                href={`${basePath}${getFilterUrl({ p: "all" })}`}
              >
                Any
              </Link>
            </li>
            {prices.map((p) => (
              <li key={p.value}>
                <Link
                  href={`${basePath}${getFilterUrl({ p: p.value })}`}
                  className={`link link-hover text-sm ${
                    p.value === price && "link-primary"
                  }`}
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-3">
          <h3 className="hidden text-sm text-neutral-500 md:block dark:text-neutral-400">
            Customer Review
          </h3>
          <ul>
            <li>
              <Link
                href={`${basePath}${getFilterUrl({ r: "all" })}`}
                className={`link link-hover text-sm ${
                  "all" === rating && "link-primary"
                }`}
              >
                Any
              </Link>
            </li>
            {ratings.map((r) => (
              <li key={r}>
                <Link
                  href={`${basePath}${getFilterUrl({ r: `${r}` })}`}
                  className={`link link-hover ${
                    `${r}` === rating && "link-primary"
                  }`}
                >
                  <Rating caption={" & up"} value={r}></Rating>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="order-last min-h-screen w-full md:order-none">
        <div className="flex items-center hidden text-xs md:block">
          {products.length === 0 ? "No" : countProducts} Results
          {q !== "all" && q !== "" && " : " + q}
          {categoryName !== "" && " : " + categoryName}
          {price !== "all" && " : Price " + price}
          {rating !== "all" && " : Rating " + rating + " & up"}
          &nbsp;
          {(q !== "all" && q !== "") ||
          category !== "all" ||
          rating !== "all" ||
          price !== "all" ? (
            <Link
              className="hover:underline hover:underline-offset-4 text-primary ms-2"
              href={basePath}
            >
              Clear
            </Link>
          ) : null}
        </div>

        <div className="mt-3">
          <ul className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductItem key={product.slug} product={product} />
            ))}
          </ul>
          <div className="join mt-2">
            {products.length > 0 &&
              Array.from(Array(pages).keys()).map((p) => (
                <Link
                  key={p}
                  className={`join-item btn btn-sm ${
                    Number(page) === p + 1 ? "btn-primary" : ""
                  } `}
                  href={`${basePath}${getFilterUrl({ pg: `${p + 1}` })}`}
                >
                  {p + 1}
                </Link>
              ))}
          </div>
        </div>
      </div>
      <div className="order-none flex-none md:order-last md:w-[125px]">
        <nav>
          <h3 className="hidden text-sm text-neutral-500 md:block">Sort by</h3>
          <ul className="hidden md:block">
            {sortOrders.map((s) => (
              <li className="mt-2 flex text-sm">
                <Link
                  key={s.value}
                  className={`w-full hover:underline hover:underline-offset-4 ${
                    sort == s.value ? "link-primary" : ""
                  } `}
                  href={`${basePath}${getFilterUrl({ s: s.value })}`}
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
