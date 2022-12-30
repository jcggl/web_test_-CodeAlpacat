import React from 'react'
import { products } from '@/constants/ProductInfo/products'
import { CarouselCard } from '@/components/Product';


const CarouselCardList = () => {
  return (
    <React.Fragment>
      {products.map((product, index) => {
        return (
          <div
            className="mobile:pb-60pxr pad:pb-129pxr desktop:pb-74pxr"
            key={`Product${index}`}
          >
            <CarouselCard {...product} />
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default CarouselCardList