import dbConnect from "@/lib/dbConnect"
import { auth } from "@/lib/auth"
import OrderModel from "@/lib/models/OrderModel"
import UserModel from "@/lib/models/UserModel"
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

  const vendor = await VendorModel.findOne({ user: req.auth.user }).exec()

  const ordersCount = await OrderModel.find({
    vendor: vendor._id,
  }).countDocuments()
  const productsCount = await ProductModel.find({
    vendor: vendor._id,
  }).countDocuments()

  // const usersCount = await UserModel.countDocuments()

  const distinctUsers = await OrderModel.find({ vendor: vendor._id })
    .distinct("user")
    .exec()
  const customersCount = distinctUsers.length

  const ordersPriceGroup = await OrderModel.aggregate([
    { $match: { vendor: vendor._id } },
    {
      $group: {
        _id: null,
        sales: { $sum: "$totalPrice" },
      },
    },
  ])
  const ordersPrice =
    ordersPriceGroup.length > 0 ? ordersPriceGroup[0].sales : 0

  const salesData = await OrderModel.aggregate([
    { $match: { vendor: vendor._id } },
    {
      $group: {
        _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
        totalOrders: { $sum: 1 },
        totalSales: { $sum: "$totalPrice" },
      },
    },
    { $sort: { _id: 1 } },
  ])

  // const productsData = await ProductModel.aggregate([
  //   { $match: { vendor: vendor._id } },
  //   {
  //     $group: {
  //       _id: "$category",
  //       totalProducts: { $sum: 1 },
  //     },
  //   },
  //   { $sort: { _id: 1 } },
  // ])

  // const usersData = await UserModel.aggregate([
  //   {
  //     $group: {
  //       _id: { $dateToString: { format: "%Y-%m", date: "$createdAt" } },
  //       totalUsers: { $sum: 1 },
  //     },
  //   },
  //   { $sort: { _id: 1 } },
  // ])

  return Response.json({
    ordersCount,
    productsCount,
    customersCount,
    ordersPrice,
    salesData,
  })
}) as any
