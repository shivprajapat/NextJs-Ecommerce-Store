import { getBillboard } from "@/actions/get-billboard";
import Billboard from "@/components/ui/billboard";
import React from "react";

const HomePage = async () => {
  const billboard = await getBillboard("aa00ac9c-b72e-41b7-9e33-8ad84e341931");
  return (
    <div>
      <Billboard data={billboard} />
    </div>
  );
};

export default HomePage;
