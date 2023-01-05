import React from 'react'
import { products } from '@/constants/ProductInfo/products'
import { CarouselCard } from '@/components/Product';


const CarouselCardList = () => {
  return (
    <React.Fragment>
      {products.map((product, index) => {
        return (
          <div
            className="pb-[clamp(60px,16.667vw,129px)] pad:pb-[clamp(129px,11.944vw,150px)] desktop:pb-[clamp(74px,3.854vw,150px)]"
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