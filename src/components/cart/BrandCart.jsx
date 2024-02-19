import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from './ProductCard'
import { callGetBrandByBrandIdAPI } from '../../apis/api'
import PriceInfo from './PriceInfo'
import DeleteButton from '../common/DeleteButton'
import OrderCheckButton from './OrderCheckButton'

import { useSetRecoilState } from 'recoil'
import { cartState } from '../../atoms/cartAtom'
import { orderBrandListState } from '../../atoms/cartAtom'

function BrandCart({ brandId, brandCart }) {
  const navigate = useNavigate()
  const [brandName, setBrandName] = useState('')
  const [productPrice, setProductPrice] = useState(0)
  const setCart = useSetRecoilState(cartState)
  const setOrderBrandList = useSetRecoilState(orderBrandListState)

  const deliveryPrice = 2500
  const calculateProductPrice = (brandCart) => {
    return Object.values(brandCart).reduce((pre, cur) => {
      return pre + parseInt(cur.price) * parseInt(cur.orderQuantity)
    }, 0)
  }

  const handleOrderBrandCart = () => {
    brandId && setOrderBrandList([brandId])
    navigate('/pay')
  }

  const handleDeleteBrandCart = () => {
    setCart((cart) => {
      const newCart = { ...cart }
      delete newCart[brandId]

      return newCart
    })
  }

  useEffect(() => {
    callGetBrandByBrandIdAPI(brandId).then(({ data }) => {
      setBrandName(data.brand_name)
    })
  }, [])

  useEffect(() => {
    setProductPrice(calculateProductPrice(brandCart))
  }, [brandCart])

  return (
    <div className="p-4 border-solid border-[3px] border-gray-200 round rounded-xl">
      <div className="my-4 flex justify-between gap-2">
        <div className="flex justify-start gap-2">
          <OrderCheckButton brandId={brandId} />
          <div className="text-black text-xl font-bold font-['Noto Sans KR'] leading-7">
            {brandName}
          </div>
        </div>
        <DeleteButton handleClick={handleDeleteBrandCart} />
      </div>
      <div className="divider "></div>

      {Object.entries(brandCart).map(([productId, value]) => {
        return <ProductCard {...value} brandId={brandId} key={productId} />
      })}
      <PriceInfo productPrice={productPrice} deliveryPrice={deliveryPrice} />
      <button
        onClick={() => handleOrderBrandCart(brandId)}
        className="m-2 w-full btn h-14 px-4 bg-indie-pink hover:bg-blue-200 rounded-[100px] justify-center items-center gap-0.5 flex"
      >
        주문하기
      </button>
    </div>
  )
}

export default BrandCart
