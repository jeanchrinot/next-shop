import { auth } from "@/lib/auth"
import dbConnect from "@/lib/dbConnect"
import ProductModel from "@/lib/models/ProductModel"
import VendorModel from "@/lib/models/VendorModel"

export const GET = auth(async (req: any) => {
  if (!req.auth || req.auth.user?.role !== "vendor") {
    return Response.json(
      { message: "unauthorized" },
      {
        status: 401,
      }
    )
  }
  await dbConnect()
  const vendor = await VendorModel.findOne({ user: req.auth.user })
  const products = await ProductModel.find({ vendor: vendor })
  return Response.json(products)
}) as any

export const POST = auth(async (req: any) => {
  if (!req.auth || req.auth.user?.role !== "vendor") {
    return Response.json(
      { message: "unauthorized" },
      {
        status: 401,
      }
    )
  }
  await dbConnect()
  const product = new ProductModel({
    name: "sample name",
    slug: "sample-name-" + Math.random(),
    image: "/images/shirt1.jpg",
    price: 0,
    category: "sample category",
    brand: "sample brand",
    countInStock: 0,
    description: "sample description",
    rating: 0,
    numReviews: 0,
  })
  try {
    await product.save()
    return Response.json(
      { message: "Product created successfully", product },
      {
        status: 201,
      }
    )
  } catch (err: any) {
    return Response.json(
      { message: err.message },
      {
        status: 500,
      }
    )
  }
}) as any
