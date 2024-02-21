import React, { useEffect, useState } from 'react'

import BrandBanner from '../components/brand/BrandBanner'
import BrandList from '../components/brand/BrandList'
import { callGetBrandLikeAPI, callGetBrandCategoryAPI } from '../apis/api'

const MainPage = () => {
  const [likeBrandList, setLikeBrandList] = useState([])
  const [digitalBrandList, setDigitalBrandList] = useState([])
  const [menAccBrandList, setMenAccBrandList] = useState([])
  const [interiorBrandList, setInteriorBrandList] = useState([])
  const [womenShoesBrandList, setWomenShoesBrandList] = useState([])
  const [kidsBrandList, setKidsBrandList] = useState([])

  useEffect(() => {
    callGetBrandLikeAPI(138).then(({ data }) => {
      setLikeBrandList(data)
    })
    callGetBrandCategoryAPI(1).then(({ data }) => {
      setDigitalBrandList(data)
    })
    callGetBrandCategoryAPI(2).then(({ data }) => {
      setMenAccBrandList(data)
    })
    callGetBrandCategoryAPI(3).then(({ data }) => {
      setInteriorBrandList(data)
    })
    callGetBrandCategoryAPI(4).then(({ data }) => {
      setWomenShoesBrandList(data)
    })
    callGetBrandCategoryAPI(5).then(({ data }) => {
      setKidsBrandList(data)
    })
  }, [])

  return (
    <div className="w-full my-[24px] px-2 flex-col justify-start items-center">
      <BrandBanner></BrandBanner>
      <BrandList brandListTitle="인기 브랜드" brandList={likeBrandList} />
      <BrandList
        brandListTitle="여성 신발 브랜드"
        brandList={womenShoesBrandList}
      />
      <BrandList brandListTitle="키즈 브랜드" brandList={kidsBrandList} />
      <BrandList brandListTitle="남성 ACC 브랜드" brandList={menAccBrandList} />
      <BrandList brandListTitle="디지털 브랜드" brandList={digitalBrandList} />
      <BrandList
        brandListTitle="인테리어 브랜드"
        brandList={interiorBrandList}
      />
    </div>
  )
}

export default MainPage
