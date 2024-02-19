import { React, useRef } from 'react'
import SearchBar from '../components/common/searchBar'
import ProductDisplay from '../components/brand/ProductDisplay'

function SearchPage() {
  return (
    <div className="w-full my-[24px] px-2">
      <SearchBar />
      <div className="mt-20">
        <span className="text-purple-800 text-xl font-bold font-['Noto Sans KR'] leading-7">
          keyword(t)
        </span>
        <span className="text-black text-xl font-bold font-['Noto Sans KR'] leading-7">
          검색 결과
        </span>
      </div>
      <ProductDisplay />
    </div>
  )
}

export default SearchPage
