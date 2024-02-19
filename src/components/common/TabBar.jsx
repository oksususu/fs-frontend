import React from 'react'

function TabBar({ items, tabIndex, handleTabIndex }) {
  // const [activeIndex, setActiveIndex] = useState(0)

  function TabItem({ title, index, isActive }) {
    return (
      <button
        className="grow shrink basis-0 h-11 px-3 bg-white justify-center items-center gap-2.5 flex"
        style={{ backgroundColor: `${isActive ? 'rgb(39 39 42)' : 'white'}` }}
        onClick={() => {
          handleTabIndex(index)
        }}
      >
        <div
          className="text-center text-neutral-800 text-base font-normal font-['Noto Sans KR'] leading-normal"
          style={{ color: `${isActive ? 'white' : 'rgb(39 39 42)'}` }}
        >
          {title}
        </div>
      </button>
    )
  }

  return (
    <div className="w-full">
      <div className="mt-8 mb-2 w-full h-11 rounded-xl shadow justify-start items-start inline-flex">
        {items.map((item, index) => {
          return (
            <TabItem
              title={item}
              key={index}
              index={index}
              isActive={tabIndex === index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TabBar
