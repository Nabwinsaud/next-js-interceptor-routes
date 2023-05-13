import React from "react";
import { notFound } from "next/navigation";
interface Props {
  params: {
    id: string;
  };
}
import Image from "next/image";

export default async function ProductDetails({ params: { id } }: Props) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data: Product = await res.json();
    return (
      <div>
        <div className="px-44 my-12 flex flex-col">
          <p>{data.description}</p>
          <Image
            alt={data.title}
            src={data.image}
            priority
            width={200}
            height={200}
          />
        </div>
      </div>
    );
  } catch (err) {
    notFound();
  }
}
