"use client"
import { Category } from "@/lib/models/CategoryModel"
import Link from "next/link"
import useSWR from "swr"

const Categories = () => {
  const { data: categories, error } = useSWR("/api/products/categories")

  if (error) return error.message
  if (!categories) return "Loading..."

  //   console.log("categories", categories)

  return (
    <ul className="">
      {categories.map((category: Category) => (
        <li className="mt-2 flex" key={category._id}>
          <Link
            href={`/category/${category.slug}`}
            type="button"
            className="w-full text-sm underline-offset-4 hover:text-primary hover:underline"
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
export default Categories
