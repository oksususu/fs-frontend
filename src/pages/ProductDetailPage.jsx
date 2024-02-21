import React, { useEffect, useState } from 'react'
import ProductCard from '../components/product/ProductCard'
import { useParams } from 'react-router-dom'
import { callGetProductAPI, callGetProductByProductIdAPI } from '../apis/api'

function ProductDetailPage() {
  const productId = useParams()['id']
  const [productCard, setProductCard] = useState({})
  const [relatedProductCards, setRelatedProductCards] = useState([])

  const reformatProductCard = (data) => {
    return {
      productName: data.product_name,
      productId: data.product_id,
      productImg: data.product_img,
      categoryId: data.category_id,
      price: data.price,
      stockQuantity: data.stock_quantity,
      totalLike: data.total_like,
      brandId: data.brand_id,
    }
  }

  function ScrollInfo({ relatedProductCards }) {
    return (
      relatedProductCards.length !== 0 && (
        <div className="mb-5">
          해당 브랜드의 더 다양한 상품을 원한다면, 스크롤 해보세요!
        </div>
      )
    )
  }

  useEffect(() => {
    // 우선 해당 브랜드의 모든 상품 limit 10
    productId &&
      callGetProductByProductIdAPI(productId)
        .then(({ data }) => {
          const newProductCard = reformatProductCard(data)
          setProductCard(newProductCard)
          return { brandId: data.brand_id }
        })
        .then(({ brandId }) => {
          callGetProductAPI(0, brandId).then(({ data }) => {
            const newRelatedProductCards = data
              .filter((data) => productId != data.product_id)
              .map((data) => {
                return reformatProductCard(data)
              })
            setRelatedProductCards(newRelatedProductCards)
          })
        })
  }, [productId])

  return (
    <div className="w-full flex flex-col h-screen justify-center items-center">
      <ScrollInfo relatedProductCards={relatedProductCards} />
      <div className="w-full h-[400px] carousel carousel-vertical">
        <div id="0" className="carousel-item h-full">
          <ProductCard {...productCard} />
        </div>
        {relatedProductCards.map((relatedProductCard) => {
          return (
            <div className="carousel-item h-full">
              <ProductCard {...relatedProductCard} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductDetailPage
