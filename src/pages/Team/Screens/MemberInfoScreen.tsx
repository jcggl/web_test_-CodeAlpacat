import React from 'react'
import { MemberInfoList } from '@/components/Team';

const MemberInfoScreen = () => {
  return (
    <React.Fragment>
      <div className="grid mobile:grid-rows-12 pad:grid-cols-3 mobile:gap-y-[3.375rem] pad:gap-y-[4.81rem] desktop:gap-y-[7.375rem] pad:gap-x-[3.56rem] desktop:gap-x-[5.625rem] w-full mobile:mt-52pxr pad:mt-77pxr desktop:mt-122pxr">
        <MemberInfoList />
      </div>
    </React.Fragment>
  );
}

export default MemberInfoScreen