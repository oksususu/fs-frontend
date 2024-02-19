import React from 'react'
import instagramImg from '../../assets/instagram.png'

function CreatorDetail({ creatorName, Introduction, links }) {
  return (
    <div className="w-full m-3 justify-between items- inline-flex">
      <div className="flex-col justify-center items-start gap-1 inline-flex">
        <div className="my-3 text-center text-black text-2xl font-bold font-['Noto Sans KR'] leading-[34px]">
          {creatorName}
        </div>
        <div className="text-black text-base font-normal font-['Noto Sans KR'] leading-normal">
          {Introduction}
        </div>
      </div>
      <div className="flex justify-start items-center gap-6">
        {links.map(({ name, url }) => {
          return (
            <div
              className="flex-col justify-center items-center gap-1 hover:cursor-pointer"
              onClick={() => {
                window.open(url)
              }}
              key={name}
            >
              <div className="flex justify-center">
                <img src={instagramImg} className="w-10 h-10" />
              </div>
              <div className=" text-black text-xs font-normal font-['Noto Sans KR']">
                {name}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CreatorDetail
