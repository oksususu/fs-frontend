import React, { useRef } from 'react'

function SearchBar({ handleKeyword }) {
  const inputRef = useRef()
  const handleClickSearchButton = () => {
    if (inputRef.current.value.split(' ').join('').length === 0) {
      alert('검색어를 입력해주세요')
    } else {
      handleKeyword(inputRef.current.value)
    }
  }
  return (
    <div className="mx-auto flex gap-2 justify-center">
      <input
        ref={inputRef}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <button onClick={handleClickSearchButton} className="btn ">
        검색
      </button>
    </div>
  )
}

export default SearchBar
