import VendorLayout from "@/components/vendor/VendorLayout"
import Products from "./Products"

export const metadata = {
  title: "Admin Products",
}
const VendorProductsPage = () => {
  return (
    <VendorLayout activeItem="products">
      <Products />
    </VendorLayout>
  )
}

export default VendorProductsPage
