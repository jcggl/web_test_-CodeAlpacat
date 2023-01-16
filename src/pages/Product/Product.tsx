import React from "react";
import {
  CarouselCardList,
  ProductDescription,
  ProductHeader,
} from "@/components/Product";

const Product = () => {
  return (
    <section className="mx-auto w-[clamp(320px,88.889vw,963px)] pad:w-[clamp(844px,78.148vw,1412px)] desktop:w-[clamp(1228px,63.958vw,100vw)] pt-[clamp(95px,26.389vw,120px)] pad:pt-[clamp(130px,12.037vw,175px)] desktop:pt-[clamp(186px,9.688vw,100vw)] pb-[clamp(11px,1.019vw,20px)] pad:pb-[clamp(23px,2.130vw,58px)] desktop:pb-[clamp(58px,3.021vw,100vw)]">
      <ProductHeader />
      <ProductDescription />
      <CarouselCardList />
    </section>
  );
};

export default Product;
