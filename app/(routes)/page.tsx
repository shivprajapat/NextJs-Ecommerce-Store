import React from "react";

import { getBillboard } from "@/actions/get-billboard";
import Billboard from "@/components/ui/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { getProducts } from "@/actions/get-products";

const HomePage = async () => {
  const billboard = await getBillboard("58fbf43d-c657-487c-adc1-3c3f1e72140a");

  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 maxh">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
