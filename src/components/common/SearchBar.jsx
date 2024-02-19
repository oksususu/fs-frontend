import React from 'react'

function SearchBar() {
  return (
    <div className="mx-auto flex gap-2 justify-center">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <button className="btn ">검색</button>
    </div>
  )
}

export default SearchBar
