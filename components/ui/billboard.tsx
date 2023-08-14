import { Billboard } from "@/types";
import React, { FC } from "react";
interface BillboardProps {
  data: Billboard;
}
const Billboard: FC<BillboardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <h1 className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs capitalize text-white bg-gray-600  py-8 px-4">
            {data?.label}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
