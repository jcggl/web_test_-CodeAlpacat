import React from "react";
import {
  CarouselCardList,
  ProductDescription,
  ProductHeader,
} from "@/components/Product";

const Product = () => {
  return (
    <section className="mx-auto mobile:w-320pxr pad:w-963pxr desktop:w-1412pxr mobile:pt-95pxr pad:pt-120pxr desktop:pt-175pxr mobile:pb-11pxr pad:pb-[0px] desktop:pb-84pxr">
      <ProductHeader />
      <ProductDescription />
      <CarouselCardList />
    </section>
  );
};

export default Product;
