import VendorLayout from "@/components/vendor/VendorLayout"
import Customers from "./Customers"

export const metadata = {
  title: "Customers",
}
const VendorCustomersPage = () => {
  return (
    <VendorLayout activeItem="customers">
      <Customers />
    </VendorLayout>
  )
}

export default VendorCustomersPage
