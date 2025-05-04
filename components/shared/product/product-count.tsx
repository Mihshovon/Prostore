/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/context/CartContext";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function ProductCount({ product }: any) {
  const { name, brand, category, price, images, stock } = product;

  const [count, setCount] = useState(0);

  const { dispatch } = useCart();

  function handleAddItem() {
    const productItem = {
      id: product.id, // ensure it's a consistent ID, not random
      name,
      brand,
      category,
      price,
      images,
      quantity: count,
      stock
    };

    dispatch({ type: "ADD_ITEM", payload: productItem });
  }

  return (
    <>
      <div className="flex justify-between items-center my-4">
        <Button
          variant="outline"
          onClick={() => setCount((dec) => (dec > 0 ? dec - 1 : dec))}
          className="cursor-pointer"
        >
          <Minus />
        </Button>
        <p>{count}</p>
        <Button
          variant="outline"
          onClick={() => setCount((inc) => (stock > inc ? inc + 1 : inc))}
          className="cursor-pointer"
        >
          <Plus />
        </Button>
      </div>
      <Button
        onClick={handleAddItem}
        disabled={count === 0}
        className="w-full cursor-pointer"
      >
        + Add to Cart
      </Button>
    </>
  );
}
