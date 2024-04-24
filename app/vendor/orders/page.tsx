import VendorLayout from "@/components/vendor/VendorLayout"
import Orders from "./Orders"

export const metadata = {
  title: "Admin Orders",
}
const VendorOrdersPage = () => {
  return (
    <VendorLayout activeItem="orders">
      <Orders />
    </VendorLayout>
  )
}

export default VendorOrdersPage
