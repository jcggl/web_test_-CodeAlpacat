import React from "react";
import {
  CarouselCardList,
  ProductDescription,
  ProductHeader,
} from "@/components/Product";

const Product = () => {
  return (
    <section className="mx-auto w-[clamp(320px,88.889vw,963px)] pad:w-[clamp(963px,89.167vw,1412px)] desktop:w-[clamp(1412px,73.542vw,100vw)] pt-[clamp(95px,26.389vw,120px)] pad:pt-[clamp(120px,11.111vw,175px)] desktop:pt-[clamp(175px,9.115vw,100vw)] pb-[clamp(11px,1.019vw,20px)] pad:pb-[0px] desktop:pb-[clamp(84px,4.375vw,100vw)]">
      <ProductHeader />
      <ProductDescription />
      <CarouselCardList />
    </section>
  );
};

export default Product;
