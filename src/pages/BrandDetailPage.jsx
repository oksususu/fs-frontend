import React, { useEffect, useState } from 'react'
import BrandInfo from '../components/brand/BrandInfo'
import ProductDisplay from '../components/brand/ProductDisplay'
import { useLocation, useParams } from 'react-router-dom'
import { callGetBrandByBrandIdAPI } from '../apis/api'

function BrandDetailPage() {
  const brandId = useParams()['id']
  let [brandInfo, setBrandInfo] = useState({})

  useEffect(() => {
    callGetBrandByBrandIdAPI(brandId).then(({ data }) => {
      setBrandInfo(data)
    })
  }, [])

  return (
    <div>
      <div className="w-full my-[24px] px-2">
        <BrandInfo
          brandName={brandInfo.brand_name}
          brandImg={brandInfo.brand_img}
          description={brandInfo.description}
        />
        <ProductDisplay brandId={brandInfo.brand_id} />
      </div>
    </div>
  )
}

export default BrandDetailPage
