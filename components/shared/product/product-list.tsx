/* eslint-disable @typescript-eslint/no-explicit-any */

import ProductCard from "./product-card";

export default function ProductList({
  data,
  title,
  limit = 4,
}: {
  data: any;
  title?: string;
  limit?: number;
}) {

    const limitedData = limit ? data.products.slice(0, limit) : data.products;

  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl my-4">{title}</h2>
      {data.products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((product: any) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-96">
          <h2 className="text-2xl font-bold">No Products Found</h2>
          <p className="text-gray-500">Please check back later.</p>
        </div>
      )}
    </div>
  );
}
