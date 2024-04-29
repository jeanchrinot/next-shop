import ProductItem from "@/components/products/ProductItem"
import { Rating } from "@/components/products/Rating"
import productServices from "@/lib/services/productService"
import Link from "next/link"

const sortOrders = ["newest", "lowest", "highest", "rating"]
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
    <div className="grid md:grid-cols-5 md:gap-5">
      <div>
        <div className="text-xl pt-3">Department</div>
        <div>
          <ul>
            <li>
              <Link
                className={`link link-hover ${
                  "all" === category && "link-primary"
                }`}
                href={`${basePath}${getFilterUrl({ c: "all" })}`}
              >
                Any
              </Link>
            </li>
            {categories.map((c: string) => (
              <li key={c}>
                <Link
                  className={`link link-hover ${
                    c === category && "link-primary"
                  }`}
                  href={`${basePath}${{ c }}`}
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xl pt-3">Price</div>
          <ul>
            <li>
              <Link
                className={`link link-hover ${
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
                  className={`link link-hover ${
                    p.value === price && "link-primary"
                  }`}
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xl pt-3">Customer Review</div>
          <ul>
            <li>
              <Link
                href={`${basePath}${getFilterUrl({ r: "all" })}`}
                className={`link link-hover ${
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
      <div className="md:col-span-4">
        <div className="flex items-center justify-between  py-4">
          <div className="flex items-center">
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
              <Link className="btn btn-sm btn-ghost" href={basePath}>
                Clear
              </Link>
            ) : null}
          </div>
          <div>
            Sort by{" "}
            {sortOrders.map((s) => (
              <Link
                key={s}
                className={`mx-2 link link-hover ${
                  sort == s ? "link-primary" : ""
                } `}
                href={`${basePath}${getFilterUrl({ s })}`}
              >
                {s}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3  ">
            {products.map((product) => (
              <ProductItem key={product.slug} product={product} />
            ))}
          </div>
          <div className="join">
            {products.length > 0 &&
              Array.from(Array(pages).keys()).map((p) => (
                <Link
                  key={p}
                  className={`join-item btn ${
                    Number(page) === p + 1 ? "btn-active" : ""
                  } `}
                  href={`${basePath}${getFilterUrl({ pg: `${p + 1}` })}`}
                >
                  {p + 1}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
