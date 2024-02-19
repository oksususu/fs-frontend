import React from 'react'
import ImgBanner from '../components/brand/ImgBanner'
import CreatorDetail from '../components/brand/CreatorInfo'
import ProductList from '../components/brand/ProductList'

function CreatorInfoPage() {
  return (
    <div className="w-full my-[24px] px-2 flex-col justify-start items-center">
      <ImgBanner></ImgBanner>
      <CreatorDetail
        creatorName="투미투유"
        links={[
          {
            name: 'instagram',
            url: 'https://www.instagram.com/tome._.toyou/',
          },
          {
            name: 'instagram',
            url: 'https://www.instagram.com/tome._.toyou/',
          },
        ]}
        Introduction="투미투유입니다"
      />
      <ProductList marcketName="2024 TOMETOYOU MARKET 1" isPermanent={false} />
      <ProductList marcketName="2024 TOMETOYOU MARKET 1" isPermanent={true} />
    </div>
  )
}

export default CreatorInfoPage
