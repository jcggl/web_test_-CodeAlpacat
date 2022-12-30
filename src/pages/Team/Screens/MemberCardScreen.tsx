import { MemberCardList } from '@/components/Team';
import React from 'react'

const MemberCardScreen = () => {
  return (
    <React.Fragment>
      <div className="grid mobile:grid-rows-12 pad:grid-cols-3 place-items-center mobile:gap-x-[0] pad:gap-x-[3.4rem] desktop:gap-x-[5.375rem] mobile:gap-y-[40.78px] pad:gap-y-[0] mobile:pt-81pxr pad:pt-49pxr desktop:pt-152pxr">
        <MemberCardList />
      </div>
    </React.Fragment>
  );
}

export default MemberCardScreen