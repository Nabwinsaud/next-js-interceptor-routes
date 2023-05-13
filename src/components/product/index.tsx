import React from "react";
// import { Product } from "../../../interface";
import Link from "next/link";
import ProductImage from "./ProductImage";
import { Skeleton } from "../ui/skeleton";

interface Props {
  product: Product;
}
export default function Product({ product }: Props) {
  return (
    <div>
      <Link
        href={`/product/${product.id}`}
        className="flex h-96 flex-col rounded border group hover:scale-110 transition-all duration-150"
      >
        <div className="">
          <ProductImage product={product} />
        </div>

        <div className="flex mt-2 mb-2 flex-col justify-between fonts-semibold items-center">
          <p className="w-44 truncate">{product.title}</p>
          <p>${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
