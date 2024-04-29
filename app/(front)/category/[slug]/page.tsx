import FilteredProducts from "@/components/products/FilteredProducts"
import productServices from "@/lib/services/productService"

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const category = await productServices.getCategoryBySlug(params.slug)
  return {
    title: `${category.name} Products and Prices`,
  }
}

export default async function CategoryPage({
  params,
  searchParams: {
    q = "",
    category = "",
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
  return (
    <FilteredProducts
      params={params}
      searchParams={{ q, category, price, rating, sort, page }}
    />
  )
}
