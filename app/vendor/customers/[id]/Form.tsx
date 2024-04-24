"use client"
import useSWRMutation from "swr/mutation"
import useSWR from "swr"
import toast from "react-hot-toast"
import Link from "next/link"
import { ValidationRule, useForm } from "react-hook-form"
import { useEffect } from "react"
import { User } from "@/lib/models/UserModel"
import { formatId } from "@/lib/utils"
import { useRouter } from "next/navigation"

export default function UserEditForm({ userId }: { userId: string }) {
  const { data: user, error } = useSWR(`/api/vendor/customers/${userId}`)

  if (error) return error.message
  if (!user) return "Loading..."

  return (
    <div>
      <h1 className="text-2xl py-4">Customer {formatId(userId)}</h1>
      <div>
        <p>Name: {user.name}</p>
        <p>Name: {user.email}</p>
      </div>
    </div>
  )
}
