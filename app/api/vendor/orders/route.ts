import { auth } from "@/lib/auth"
import dbConnect from "@/lib/dbConnect"
import OrderModel from "@/lib/models/OrderModel"
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
  const orders = await OrderModel.find({ vendor: vendor })
    .sort({ createdAt: -1 })
    .populate("user", "name")

  return Response.json(orders)
}) as any
