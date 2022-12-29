import React from "react";
import { CarouselCard } from "@/components/Product";
import { kikitownImageList } from "@/constants/Images/kikitown-image-list";

const Product = () => {
  return (
    <section className="mx-auto mobile:w-320pxr pad:w-963pxr desktop:w-1412pxr mobile:pt-95pxr  pad:pt-120pxr desktop:pt-175pxr mobile:pb-95pxr pad:pb-120pxr desktop:pb-214pxr">
      <h3 className="flex justify-center items-center font-black font-spline font-semibold mobile:h-30pxr pad:h-97pxr mobile:text-[1.5625rem] pad:text-[3.125rem] desktop:text-[5.375rem]">
        Product
      </h3>
      <div className="">
        <CarouselCard imageList={kikitownImageList} />
      </div>
    </section>
  );
};

export default Product;
