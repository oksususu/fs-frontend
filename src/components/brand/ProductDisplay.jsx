import React, { useEffect, useState } from 'react'
import ProductDisplayCard from './ProductDisplayCard'
import TabBar from '../common/TabBar'
import { callGetCategoryByBrandIdAPI, callGetProductAPI } from '../../apis/api'
import { CategoryMap } from '../../data/mapData'

function ProductDisplay({ brandId }) {
  const [cards, setCards] = useState([])
  const [categories, setCategories] = useState([0])

  const [categoryTabIndex, setCategoryTabIndex] = useState(0)

  useEffect(() => {
    brandId && // brandId가 있는 경우에만 쿼리를 날리도록. 맨처음에 쿼리가 실행되지 않도록
      callGetProductAPI(categories[categoryTabIndex], brandId).then(
        ({ data }) => {
          const newCards = data.map((product) => {
            return {
              productName: product.product_name,
              price: product.price,
              productImg: product.product_img,
              productId: product.product_id,
            }
          })
          setCards(newCards)
        }
      )
  }, [brandId, categoryTabIndex])

  useEffect(() => {
    brandId &&
      callGetCategoryByBrandIdAPI(brandId).then(({ data }) => {
        setCategories([0, ...data])
      })
  }, [brandId])

  const handleCategoryTabIndex = (tabIndex) => {
    setCategoryTabIndex(tabIndex)
  }

  return (
    <div className="w-full flex flex-col justify-center align-center items-center">
      <TabBar
        items={categories.map((categoryId) =>
          CategoryMap.get(String(categoryId))
        )}
        tabIndex={categoryTabIndex}
        handleTabIndex={handleCategoryTabIndex}
      ></TabBar>
      <div className="w-full mt-5 mx-10 flex flex-wrap justify-start items-center ">
        {cards.map((card, index) => {
          return <ProductDisplayCard {...card} key={index} />
        })}
      </div>
    </div>
  )
}

export default ProductDisplay
