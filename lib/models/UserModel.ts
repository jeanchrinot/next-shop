import mongoose from "mongoose"

export type User = {
  _id: string
  name: string
  email: string
  role: string
  isAdmin: boolean
  bio: string
}

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "customer",
    },
    isAdmin: { type: Boolean, required: true, default: false },
    bio: String,
  },
  { timestamps: true }
)

const UserModel = mongoose.models?.User || mongoose.model("User", UserSchema)

export default UserModel
