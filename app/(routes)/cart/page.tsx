"use client";
import React from "react";

import useCart from "@/hooks/use-cart";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

const CartPage = () => {
  const cart = useCart();
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-7 sm:py-16 sm:px-6 lg:px-8">
          <h1 className="text-xl md:text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="md:mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7 h-full">
              {/* TODO: Show me the Error */}
              {cart.items.length > 0 ? (
                <ul>
                  {cart.items.map((item) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                </ul>
              ) : (
                <NoResults />
              )}
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
