import React from "react";
import { notFound } from "next/navigation";
interface Props {
  params: {
    id: string;
  };
}
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default async function ProductDetails({ params: { id } }: Props) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data: Product = await res.json();
    const product = data.title.split(" ");
    return (
      <div className="px-44 w-full my-12 flex flex-col">
        <div className="flex space-x-6   border rounded w-full space-y-6 items-center">
          <Image
            alt={data.title}
            src={data.image}
            priority
            width={300}
            height={300}
            className="rounded-md  px-2 py-2"
          />
          <div className="w-full">
            <p className="font-bold text-xl capitalize truncate">
              {data.title}
            </p>
            <p className="">
              The best {product[product.length - 1]} for every occasion
            </p>
            <div className="w-full">
              <h3 className="font-bold text-xl my-2">Description</h3>
              <div className="w-[500px]">
                <p className="">
                  <span className="font-bold">
                    {Math.floor(Math.random() * 100)} %
                  </span>{" "}
                  off {data.description}
                </p>
              </div>
            </div>
            <div className="flex w-full mt-3 items-center">
              <div className="space-x-2">
                <Button>S</Button>
                <Button>M</Button>
                <Button>X</Button>
                <Button>XS</Button>
                <Button>XL</Button>
              </div>
            </div>
            <div className="my-4">
              <Button variant="outline" className="border-blue-600">
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (err) {
    notFound();
  }
}
