import { React, useEffect, useRef, useState } from 'react'
import SearchBar from '../components/common/searchBar'
import { callGetProductAPI } from '../apis/api'
import ProductSearchExplorer from '../components/search/ProductSearchExplorer'
import BadgeButton from '../components/common/BadgeButton'

function SearchPage() {
  const [keyword, setKeyword] = useState('')
  const [cards, setCards] = useState([])
  const inputRef = useRef()

  useEffect(() => {
    keyword &&
      callGetProductAPI(null, null, keyword).then(({ data }) => {
        const newCards = data.map((product) => {
          return {
            productName: product.product_name,
            price: product.price,
            productImg: product.product_img,
            productId: product.product_id,
          }
        })
        setCards(newCards)
      })
  }, [keyword])

  const handleKeyword = (newKeyword) => {
    setKeyword(newKeyword)
  }

  const handleClickButton = (newKeyword) => {
    setKeyword(newKeyword)
    inputRef.current.value = newKeyword
  }

  return (
    <div className="w-full my-[24px] px-2">
      <SearchBar handleKeyword={handleKeyword} inputRef={inputRef} />
      <div className="my-4 flex gap-2 items-center">
        <div>추천 검색어</div>
        <BadgeButton text="blue bag" handleClickButton={handleClickButton} />
        <BadgeButton text="cap" handleClickButton={handleClickButton} />
        <BadgeButton text="kids" handleClickButton={handleClickButton} />
        <BadgeButton text="소파" handleClickButton={handleClickButton} />
      </div>
      <div className="mt-20">
        <span className="text-purple-800 text-xl font-bold font-['Noto Sans KR'] leading-7">
          {`'${keyword}'`}
        </span>
        <span className="text-black text-xl font-bold font-['Noto Sans KR'] leading-7">
          검색 결과
        </span>
        {cards.length === 0 ? (
          <p className="mt-2">검색된 상품이 없습니다.</p>
        ) : (
          <ProductSearchExplorer cards={cards} />
        )}
      </div>
    </div>
  )
}

export default SearchPage
