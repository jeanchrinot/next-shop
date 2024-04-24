import mongoose from "mongoose"
import { Product } from "./ProductModel"

const vendorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        name: { type: String, required: true },
        slug: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    storeName: { type: String, required: true },
    description: String,
    logo: String,
  },
  {
    timestamps: true,
  }
)
const VendorModel =
  mongoose.models.Vendor || mongoose.model("Vendor", vendorSchema)

export default VendorModel

export type Vendor = {
  _id: string
  user?: { name: string }
  storeName: string
  description: string
  logo: string
  products?: [Product]
}
