import { auth } from "@/lib/auth"
import dbConnect from "@/lib/dbConnect"
import OrderModel from "@/lib/models/OrderModel"
import UserModel from "@/lib/models/UserModel"
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
  const distinctUserIds = await OrderModel.find({
    vendor: vendor._id,
  }).distinct("user")

  const customers = await UserModel.find({ _id: { $in: distinctUserIds } })

  return Response.json(customers)
}) as any
