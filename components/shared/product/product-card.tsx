/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Card>
      <CardHeader>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            width={300}
            height={300}
            alt={product.name}
            className="rounded-xl object-cover aspect-square"
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent>
        <Link href={`/product/${product.slug}`}>
          <span className="text-xs">{product.brand}</span>
          <p className="text-xs font-semibold">{product.name}</p>
          <div className="flex justify-between items-center mt-2">
            <p>Rating {product.rating}</p>{" "}
              {product.stock > 0 ? (
                <ProductPrice value={Number(product.price)} />
              ) : (
                <span className="text-destructive">Out of Stock</span>
              )}
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
