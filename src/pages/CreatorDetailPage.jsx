import React from 'react'
import BrandBanner from '../components/brand/BrandBanner'
import CreatorDetail from '../components/brand/CreatorInfo'
import ProductList from '../components/brand/ProductList'

function CreatorInfoPage() {
  return (
    <div className="w-full my-[24px] px-2 flex-col justify-start items-center">
      <BrandBanner></BrandBanner>
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
