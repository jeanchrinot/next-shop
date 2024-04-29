import data from "@/lib/data"
import dbConnect from "@/lib/dbConnect"
import CategoryModel from "@/lib/models/CategoryModel"
import ProductModel from "@/lib/models/ProductModel"
import UserModel from "@/lib/models/UserModel"
import VendorModel from "@/lib/models/VendorModel"
import { convertToSlug } from "@/lib/utils"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
  const { users, vendors, categories, products } = data
  await dbConnect()
  await UserModel.deleteMany()
  await UserModel.insertMany(users)

  // Find the user with role "vendor"
  const vendorUser = await UserModel.findOne({
    email: "vendor@example.com",
  }).exec()
  // Assign user to vendors and insert them to database
  const vendorsWithUser = vendors.map((vendor) => ({
    ...vendor,
    user: vendorUser._id,
  }))
  await VendorModel.insertMany(vendorsWithUser)

  // Find the first vendor
  const vendor = await VendorModel.findOne()

  console.log("vendor", vendor)

  await CategoryModel.deleteMany()

  for (const category of categories) {
    const slug = convertToSlug(category.name)
    const newCategory = new CategoryModel({
      name: category.name,
      slug: slug,
      description: category.description,
    })
    await newCategory.save()
  }
  // await CategoryModel.insertMany(categories)

  // Find the first category from MongoDB using Mongoose
  const firstCategory = await CategoryModel.findOne()

  console.log("firstCategory", firstCategory)

  // Insert products into the database and assign the first category to each product
  const productsWithCategory = products.map((product) => ({
    ...product,
    category: firstCategory._id,
    vendor: vendor._id,
  }))

  await ProductModel.deleteMany()
  await ProductModel.insertMany(productsWithCategory)

  return NextResponse.json({
    message: "seeded successfully",
    users,
    products,
  })
}
