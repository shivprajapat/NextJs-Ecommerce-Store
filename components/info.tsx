import { Product } from "@/types";
import React, { FC } from "react";
import Currency from "./ui/currency";
import { ShoppingCart } from "lucide-react";
import Button from "./ui/button";

interface InfoProps {
  data: Product;
}
const Info: FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900">{data.name}</h2>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-lg text-gray-900 font-bold">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>

          <span>{data?.size?.value}</span>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
