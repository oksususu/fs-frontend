import React, { useEffect, useState } from 'react'

import { callGetBrandLikeAPI } from '../apis/api'
import ImgBanner from '../components/brand/ImgBanner'
import BrandList from '../components/brand/BrandList'

const MainPage = () => {
  const [likeBrandList, setLikeBrandList] = useState([])

  useEffect(() => {
    callGetBrandLikeAPI(138).then(({ data }) => {
      setLikeBrandList(data)
    })
  }, [])

  return (
    <div className="w-full my-[24px] px-2 flex-col justify-start items-center">
      <ImgBanner></ImgBanner>
      <BrandList
        brandListTitle="내가 ❤️하는 브랜드"
        brandList={likeBrandList}
      />
      {/* <BrandList brandListTitle="사랑들이 ❤️하는 상품 브랜드 " />
      <BrandList brandListTitle="여성의류 카테고리 브랜드" />
      <BrandList brandListTitle="여성의류 카테고리 브랜드" /> */}
    </div>
  )
}

export default MainPage
