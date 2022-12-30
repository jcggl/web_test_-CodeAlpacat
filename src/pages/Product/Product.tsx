import React from "react";
import { CarouselCard } from "@/components/Product";
import { products } from "./../../constants/ProductInfo/products";

const Product = () => {
  return (
    <section className="mx-auto mobile:w-320pxr pad:w-963pxr desktop:w-1412pxr mobile:pt-95pxr pad:pt-120pxr desktop:pt-175pxr mobile:pb-11pxr pad:pb-[0px] desktop:pb-84pxr">
      <h3 className="flex justify-center items-center text-black font-spline font-semibold mobile:h-30pxr pad:h-97pxr mobile:text-[1.5625rem] pad:text-[3.125rem] desktop:text-[5.375rem]">
        Product
      </h3>
      <h4 className="flex justify-center items-center mx-auto text-center text-black mobile:w-274pxr pad:w-785pxr desktop:w-1010pxr mobile:pt-49pxr pad:pt-52pxr desktop:pt-30pxr mobile:pb-52pxr pad:pb-85pxr desktop:pb-75pxr mobile:text-[0.875rem] pad:text-[1.25rem] pad:leading-[1.75rem] desktop:text-[1.625rem] mobile:leading-[1.25rem] pad:leading-[1.75rem] desktop:leading-[2.375rem]">
        At GoodGang Labs, we are committed to offering innovative solutions to
        establish a new avatar standard for how people represent themselves on
        the metaverse.
      </h4>
      {products.map((product, index) => {
        return (
          <div className="mobile:pb-60pxr pad:pb-129pxr desktop:pb-74pxr">
            <CarouselCard key={`Product${index}`} {...product} />
          </div>
        );
      })}
    </section>
  );
};

export default Product;
