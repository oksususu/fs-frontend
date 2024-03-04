import React from 'react'

function FooterLayout() {
  return (
    <div className="w-full">
      <div className="max-w-[860px] h-[56px] mx-auto text-xs px-3 flex flex-col justify-between items-start gap-2">
        <div className="divider"></div>
        <div>
          상호명주식회사 무사 (MUSA Co., Ltd.)사업장소재지서울특별시 성동구
          아차산로 13길 11, 1층
        </div>
        <div>
          팩스: 070-8622-xxxx 사업자등록번호: xxx-88-79575 통신판매업신고:
          2022-서울성동-xxxxx
        </div>
        <div>
          전화번호: 1644-xxxx 이메일: customer@musa.co.kr 대표: 홍길동
          개인정보보호책임자: 이동길 호스팅서비스: (주)무사
        </div>
        <div>
          일부 상품의 경우 MUSA는 통신판매의 당사자가 아닌 통신판매중개자로서
          상품, 상품정보, 거래에 대한 책임이 제한될 수 있으므로, 각 상품
          페이지에서 구체적인 내용을 확인하시기 바랍니다.
        </div>
      </div>
    </div>
  )
}

export default FooterLayout
