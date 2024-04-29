import FilteredProducts from "@/components/products/FilteredProducts"
import ProductItem from "@/components/products/ProductItem"
import { Rating } from "@/components/products/Rating"
import productServices from "@/lib/services/productService"
import Link from "next/link"

const ratings = [5, 4, 3, 2, 1]

export async function generateMetadata({
  searchParams: { q = "all", category = "all", price = "all", rating = "all" },
}: {
  searchParams: {
    q: string
    category: string
    price: string
    rating: string
    sort: string
    page: string
  }
}) {
  if (
    (q !== "all" && q !== "") ||
    category !== "all" ||
    rating !== "all" ||
    price !== "all"
  ) {
    return {
      title: `Search ${q !== "all" ? q : ""}
          ${category !== "all" ? ` : Category ${category}` : ""}
          ${price !== "all" ? ` : Price ${price}` : ""}
          ${rating !== "all" ? ` : Rating ${rating}` : ""}`,
    }
  } else {
    return {
      title: "Search Products",
    }
  }
}

export default async function SearchPage({
  searchParams: {
    q = "all",
    category = "all",
    price = "all",
    rating = "all",
    sort = "newest",
    page = "1",
  },
}: {
  searchParams: {
    q: string
    category: string
    price: string
    rating: string
    sort: string
    page: string
  }
}) {
  return (
    <FilteredProducts
      params={{ slug: "" }}
      searchParams={{ q, category, price, rating, sort, page }}
    />
  )
}
