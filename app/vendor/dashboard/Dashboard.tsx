"use client"
import Link from "next/link"
import { Bar, Doughnut, Line } from "react-chartjs-2"
import useSWR from "swr"
import { formatNumber } from "@/lib/utils"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement,
  ArcElement,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarElement,
  ArcElement
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
}

const Dashboard = () => {
  const { data: summary, error } = useSWR(`/api/vendor/orders/summary`)

  if (error) return error.message
  if (!summary) return "Loading..."

  const salesData = {
    labels: summary.salesData.map((x: { _id: string }) => x._id),
    datasets: [
      {
        fill: true,
        label: "Sales",
        data: summary.salesData.map(
          (x: { totalSales: number }) => x.totalSales
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  }
  const ordersData = {
    labels: summary.salesData.map((x: { _id: string }) => x._id),
    datasets: [
      {
        fill: true,
        label: "Orders",
        data: summary.salesData.map(
          (x: { totalOrders: number }) => x.totalOrders
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  }

  return (
    <div>
      <div className="my-4 stats inline-grid md:flex  shadow stats-vertical   md:stats-horizontal">
        <div className="stat">
          <div className="stat-title">Sales</div>
          <div className="stat-value text-primary">
            ${formatNumber(summary.ordersPrice)}
          </div>
          <div className="stat-desc">
            <Link href="/vendor/orders">View sales</Link>
          </div>
        </div>
        <div className="stat">
          <div className="stat-title"> Orders</div>
          <div className="stat-value text-primary">{summary.ordersCount}</div>
          <div className="stat-desc">
            <Link href="/vendor/orders">View orders</Link>
          </div>
        </div>
        <div className="stat">
          <div className="stat-title">Products</div>
          <div className="stat-value text-primary">{summary.productsCount}</div>
          <div className="stat-desc">
            <Link href="/vendor/products">View products</Link>
          </div>
        </div>
        <div className="stat">
          <div className="stat-title">Customers</div>
          <div className="stat-value text-primary">
            {summary.customersCount}
          </div>
          <div className="stat-desc">
            <Link href="/vendor/customers">View customers</Link>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl py-2">Sales Report</h2>
          <Line data={salesData} />
        </div>
        <div>
          <h2 className="text-xl py-2">Orders Report</h2>
          <Line data={ordersData} />
        </div>
      </div>
      {/* <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl py-2">Products Report</h2>
          <div className="flex items-center justify-center h-80 w-96 ">
            <Doughnut data={productsData} />
          </div>
        </div>
        <div>
          <h2 className="text-xl py-2">Users Report</h2>
          <Bar data={usersData} />
        </div>
      </div> */}
    </div>
  )
}

export default Dashboard
