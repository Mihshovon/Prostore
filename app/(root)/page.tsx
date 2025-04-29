import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

export const metadata = {
  title: "Home",
  description: "Prostore E-commerce website with Next.js",
};

export default function page() {
  return (
    <>
      <ProductList data={sampleData} title="Newest Arrible" limit={4} />
    </>
  );
}
