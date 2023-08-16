"use client";
import React, { FC, MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import Image from "next/image";
import usePreviewModal from "@/hooks/use-preview-modal";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: Product;
}
const ProductCard: FC<ProductCardProps> = ({ data }) => {
  const previewModal = usePreviewModal();
  const router = useRouter();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    console.log("cart added");
  };
  const productHandler = () => router.push(`/product/${data?.id}`);
  return (
    <div
      onClick={productHandler}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 flex flex-col justify-between"
    >
      <div>
        <div className="aspect-square sm:aspect-auto sm:h-80 md:h-[300px] rounded-xl bg-gray-100 relative mb-3">
          <Image
            src={data?.images?.[0]?.url}
            alt="product"
            fill
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
              <IconButton
                onClick={onPreview}
                icon={<Expand size={20} className="text-gray-600" />}
              />
              <IconButton
                onClick={onAddToCart}
                icon={<ShoppingCart size={20} className="text-gray-600" />}
              />
            </div>
          </div>
        </div>
        {/* Description */}
        <div>
          <p className="font-semibold text-base text-gray-800 line-clamp-2">
            {data?.name}
          </p>
        </div>
      </div>
      <div className="mt-auto">
        {/* Price & Review */}
        <p className="text-sm text-gray-500 font-semibold">
          {data?.category?.name}
        </p>
        <div className="flex items-center justify-between">
          <Currency value={data?.price} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
