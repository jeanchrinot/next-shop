import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
  {
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    banner: String,
  },
  {
    timestamps: true,
  }
)

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", productSchema)

export default ProductModel

export type Product = {
  _id?: string
  vendor?: { storeName: string }
  name: string
  slug: string
  image: string
  banner?: string
  price: number
  brand: string
  description: string
  category?: { name: string }
  rating: number
  numReviews: number
  countInStock: number
  colors?: []
  sizes?: []
}
