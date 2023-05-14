"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Loading from "../loading";

export default function ProductModal() {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const [open, setOpen] = useState<boolean>(true);
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const product = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await product.json();
      setProduct(data);
      setLoading(false);
    };
    getProduct();
  }, [id]);
  const title = product?.title.split(" ");

  return (
    <div className="px-6 py-6">
      {JSON.stringify(product)}
      <Dialog
        open={open}
        onOpenChange={() => {
          setOpen(false);
          router.back();
        }}
      >
        <DialogTitle>Product List </DialogTitle>
        <DialogContent>
          <DialogDescription>
            The app router intercept show the soft navigation modal and show the
            single page of the same route in hard reload.
            <div className="my-6">
              <div className="mx-auto">
                {loading ? (
                  <Loading />
                ) : (
                  <Image
                    src={product?.image as string}
                    alt={product?.title as string}
                    width={250}
                    height={20}
                    className={`object-cover  mx-auto rounded-md border px-2 py-2 
                    `}
                  />
                )}
              </div>
              <p className="font-bold text-center text-2xl my-2">
                ${product?.price}
              </p>
              <p className="font-bold text-center text-2xl my-1 uppercase">
                {title?.[title.length - 1]}
              </p>
            </div>
          </DialogDescription>
          <DialogFooter>
            <Button
              size="sm"
              type="submit"
              onClick={() => {
                setOpen(false);
                router.back();
              }}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
