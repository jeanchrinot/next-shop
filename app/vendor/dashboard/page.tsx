import VendorLayout from "@/components/vendor/VendorLayout"
import Dashboard from "./Dashboard"

export const metadata = {
  title: "Vendor Dashboard",
}
const DashbaordPage = () => {
  return (
    <VendorLayout activeItem="dashboard">
      <Dashboard />
    </VendorLayout>
  )
}

export default DashbaordPage
