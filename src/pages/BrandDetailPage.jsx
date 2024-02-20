import React, { useEffect, useState } from 'react'
import BrandInfo from '../components/brand/BrandInfo'
import { useLocation, useParams } from 'react-router-dom'
import { callGetBrandByBrandIdAPI } from '../apis/api'
import ProductCategoryExplorer from '../components/brand/ProductCategoryExplorer'

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
        <ProductCategoryExplorer brandId={brandInfo.brand_id} />
      </div>
    </div>
  )
}

export default BrandDetailPage
