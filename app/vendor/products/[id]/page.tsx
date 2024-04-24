import VendorLayout from "@/components/vendor/VendorLayout"
import Form from "./Form"

export function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Edit Product ${params.id}`,
  }
}

export default function ProductEditPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <VendorLayout activeItem="products">
      <Form productId={params.id} />
    </VendorLayout>
  )
}
