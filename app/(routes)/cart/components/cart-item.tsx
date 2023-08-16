import React, { FC } from "react";
import { X } from "lucide-react";
import Image from "next/image";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItem {
  data: Product;
}
const CartItem: FC<CartItem> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };
  return (
    <li className="flex py-6 border-b last:border-b-0">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-28 sm:w-28">
        <Image
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
          fill
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <h5 className="text-lg font-semibold text-black">{data.name}</h5>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
              {data.size.name}
            </p>
          </div>
        </div>
        <Currency value={data.price} />
      </div>
    </li>
  );
};

export default CartItem;
