/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCart } from "@/lib/context/CartContext";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleX, Minus, Plus } from "lucide-react";
import Image from "next/image";

export default function AddToCart() {

  const { cart, dispatch } = useCart();

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Cart Items</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Remove</TableHead>
          </TableRow>
        </TableHeader>
        <tbody>
          {cart.map((item: any, index: number) => (
            <TableRow key={index}>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Image
                    src={item.images?.[0] || "/fallback.jpg"}
                    width={50}
                    height={50}
                    alt={item.name || "Product Image"}
                  />
                  <p>{item.name}</p>
                </div>
              </TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  onClick={() => dispatch({type: "DECREMENT", payload: item.id})}
                  className="cursor-pointer"
                >
                  <Minus />
                </Button>
                <span className="px-2">{item.quantity}</span>
                <Button
                  variant="outline"
                  onClick={() => dispatch({type: "INCREMENT", payload: {id: item.id, stock: item.stock}})}
                  className="cursor-pointer"
                >
                  <Plus />
                </Button>
              </TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  onClick={() => dispatch({type: "REMOVE_ITEM", payload: item.id})}
                >
                  <CircleX />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
