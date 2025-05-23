"use client"

import { User } from "@/lib/models/UserModel"
import { formatId } from "@/lib/utils"
import Link from "next/link"
import toast from "react-hot-toast"
import useSWR from "swr"
import useSWRMutation from "swr/mutation"

export default function Customers() {
  const { data: users, error } = useSWR(`/api/vendor/customers`)
  const { trigger: deleteUser } = useSWRMutation(
    `/api/vendor/customers`,
    async (url, { arg }: { arg: { userId: string } }) => {
      const toastId = toast.loading("Deleting user...")
      const res = await fetch(`${url}/${arg.userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await res.json()
      res.ok
        ? toast.success("User deleted successfully", {
            id: toastId,
          })
        : toast.error(data.message, {
            id: toastId,
          })
    }
  )
  if (error) return "An error has occurred."
  if (!users) return "Loading..."

  return (
    <div>
      <h1 className="py-4 text-2xl">Users</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              {/* <th>admin</th> */}
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => (
              <tr key={user._id}>
                <td>{formatId(user._id)}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* <td>{user.isAdmin ? 'YES' : 'NO'}</td> */}

                <td>
                  <Link
                    href={`/vendor/customers/${user._id}`}
                    type="button"
                    className="btn btn-ghost btn-sm"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
