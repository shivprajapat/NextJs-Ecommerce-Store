import React, { FC } from "react";
import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image } from "@/types";

interface GalleryTab {
  image: Image;
}
const GalleryTab: FC<GalleryTab> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <>
          <div className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <NextImage
              fill
              src={image.url}
              alt=""
              className="object-cover object-center"
            />
          </div>
          <div
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          />
        </>
      )}
    </Tab>
  );
};

export default GalleryTab;
