"use client";
import React, { FC } from "react";
import qs from "query-string";

import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

interface FilterProps {
  data: (Size | Color)[];
  valueKey: string;
  name: string;
}
const Filter: FC<FilterProps> = ({ data, valueKey, name }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const filterHandler = (id: string) => {
    const current = qs.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    };

    const url = qs.stringifyUrl(
      { url: window.location.href, query },
      {
        skipNull: true,
      }
    );
    router.push(url);
  };
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div className="flex items-center" key={filter.id}>
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                selectedValue === filter.id && "bg-black text-white"
              )}
              onClick={() => filterHandler(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
