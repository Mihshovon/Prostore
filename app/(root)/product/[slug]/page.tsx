import ProductImages from "@/components/shared/product/product-images";
import ProductPrice from "@/components/shared/product/product-price";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import sampleData from "@/db/sample-data";
import { notFound } from "next/navigation";

export default function page({ params }: { params: { slug: string } }) {
  const product = sampleData.products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/*Image Column*/}
        <div className="col-span-2">
          <ProductImages images={product.images} />
        </div>
        {/*Details Column*/}
        <div className="col-span-2 gap-4 flex flex-col">
          <p className="text-xs">
            {product.brand} {product.category}
          </p>
          <h3 className="text-base font-bold">{product.name}</h3>
          <p className="text-xs">
            {product.rating} out of {product.numReviews} Reviews
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <ProductPrice
              value={Number(product.price)}
              classnName="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
            />
          </div>
          <p className="font-semibold text-sm mt-6">Description</p>
          <p className="text-xs">{product.description}</p>
        </div>
        {/*Price Cart*/}
        <div>
          <Card>
            <CardContent className="flex flex-col gap-3">
              <div className="flex justify-between">
                <p className="text-sm">Price</p>
                <ProductPrice
                  value={Number(product.price)}
                  classnName="text-sm"
                />
              </div>
              <div className="flex justify-between">
                <p className="text-sm">Status</p>
                {product.stock > 0 ? (
                  <Badge variant="outline">In Stock</Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>
              {product.stock > 0 && (
                <div>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
