import VendorLayout from "@/components/vendor/VendorLayout"
import Form from "./Form"

export function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Customer ${params.id}`,
  }
}

export default function CustomerPage({ params }: { params: { id: string } }) {
  return (
    <VendorLayout activeItem="customers">
      <Form userId={params.id} />
    </VendorLayout>
  )
}
