import React from "react";
import { Carousal } from "@/components/Product";

type Props = {};

const Product = (props: Props) => {
  return (
    <section className="mx-auto mobile:pt-95pxr mobile:w-320pxr pad:w-1000pxr desktop:w-1468pxr pad:pt-120pxr desktop:pt-175pxr mobile:pb-95pxr pad:pb-120pxr desktop:pb-214pxr">
      <h3 className="flex justify-center items-center font-black font-spline font-semibold mobile:h-30pxr pad:h-97pxr mobile:text-[1.5625rem] pad:text-[3.125rem] desktop:text-[5.375rem]">
        Product
      </h3>
      <div className="">
        <Carousal />
      </div>
    </section>
  );
};

export default Product;
