import mongoose from "mongoose"

export type Category = {
  _id: string
  name: string
  description: string
  image: string
}

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    image: String,
  },
  { timestamps: true }
)

const CategoryModel =
  mongoose.models?.Category || mongoose.model("Category", CategorySchema)

export default CategoryModel
