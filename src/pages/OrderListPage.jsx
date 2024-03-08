import React, { useEffect, useState } from 'react'
import { callGetOrderAPI } from '../apis/api'
import OrderCard from '../components/pay/OrderCard'

function OrderListPage() {
  const token = localStorage.getItem('token')
  const [orderList, setOrderList] = useState([])

  useEffect(() => {
    callGetOrderAPI(token).then((res) => {
      setOrderList(res.data)
    })
  }, [])

  return (
    <div className="w-full my-[24px] px-2 flex flex-col gap-4">
      {orderList.map((order, index) => {
        console.log(index, order)
        return <OrderCard {...order} key={order.orderId} />
      })}
    </div>
  )
}
export default OrderListPage
