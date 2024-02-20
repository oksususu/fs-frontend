import React, { useEffect, useState } from 'react'
import ProductDisplayCard from './ProductDisplayCard'

function ProductDisplay({ cards }) {
  .log(cards)
  return (
    <div className="w-full mt-5 mx-10 flex flex-wrap justify-start items-center ">
      {cards.map((card, index) => {
        return <ProductDisplayCard {...card} key={index} />
      })}
    </div>
  )
}

export default ProductDisplay
