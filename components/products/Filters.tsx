import ProductItem from "@/components/products/ProductItem"
import { Rating } from "@/components/products/Rating"
import { getFilterParams } from "@/lib/productUtils"
import productServices from "@/lib/services/productService"
import Link from "next/link"
import { useRouter } from "next/navigation"

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

const ProductFilters = () => {
  return (
    <div>
      {/* <div className="text-xl pt-3">Department</div>
        <div>
          <ul>
            <li>
              <Link
                className={`link link-hover ${
                  "all" === category && "link-primary"
                }`}
                href={`/category/${category}${getFilterParams({ c: "all" })}`}
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
                  href={getFilterParams({ c })}
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
      <div>
        <div className="text-xl pt-3">Price</div>
        <ul>
          <li>
            <Link
              className={`link link-hover ${"all" === price && "link-primary"}`}
              href={`/category/${category}${getFilterParams({ p: "all" })}`}
            >
              Any
            </Link>
          </li>
          {prices.map((p) => (
            <li key={p.value}>
              <Link
                href={`/category/${category}${getFilterParams({ p: p.value })}`}
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
              href={`/category/${category}${getFilterParams({ r: "all" })}`}
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
                href={`/category/${category}${getFilterParams({ r: `${r}` })}`}
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
  )
}

export default ProductFilters
