import React, { useState } from 'react'
import TabBar from '../common/TabBar'
import ProductDisplay from '../common/ProductDisplay'

function ProductSearchExplorer({ cards }) {
  const [tabIndex, setTabIndex] = useState(0)
  const [tabs, setTabs] = useState(['상품 검색'])

  const handleTabIndex = (newTabIndex) => {
    setTabIndex(newTabIndex)
  }

  return (
    <div className="w-full flex flex-col justify-center align-center items-center">
      <TabBar
        items={tabs}
        tabIndex={tabIndex}
        handleTabIndex={handleTabIndex}
      ></TabBar>
      <ProductDisplay cards={cards} />
    </div>
  )
}

export default ProductSearchExplorer
