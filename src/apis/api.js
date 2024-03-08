import axios from 'axios'
const hostUrl = import.meta.env.VITE_HOST_URL

/* Brand 관련 api */
// 좋아요 브랜드 리스트 조회
export const callGetBrandLikeAPI = (userId) => {
  return axios.get(`${hostUrl}/brand/like?userId=${userId}`)
}
// 카테고리 브랜드 리스트 조회
export const callGetBrandCategoryAPI = (categoryId) => {
  return axios.get(`${hostUrl}/brand/category?categoryId=${categoryId}`)
}

// 브랜드 목록 조회
export const callGetBrandAPI = (sellerId) => {
  return axios.get(`${hostUrl}/brand?sellerId=${sellerId}`)
}
// 브랜드 등록
export const callPostBrandAPI = (
  brandName,
  description,
  brandImg,
  sellerId
) => {
  sellerId = parseInt(sellerId)
  return axios.post(`${hostUrl}/brand`, {
    brandName,
    description,
    brandImg,
    sellerId,
  })
}
// 특정 브랜드 조회
export const callGetBrandByBrandIdAPI = (brandId) => {
  return axios.get(`${hostUrl}/brand/${brandId}`)
}
// 브랜드 업데이트 brand/694
export const callPutBrandAPI = (
  brandId,
  brandName,
  description,
  brandImg,
  sellerId
) => {
  return axios.put(`${hostUrl}/brand/${brandId}`, {
    brandName,
    description,
    brandImg,
    sellerId,
  })
}

/* Like 관련 api */
// 상품 좋아요 등록
export const callPostLikeProductAPI = (productId, userId) => {
  return axios.post(`${hostUrl}/like/product/${productId}`, {
    userId: parseInt(userId),
  })
}
// 상품 좋아요 삭제
export const callDeleteReviewsAPI = (productId, userId) => {
  return axios.delete(`${hostUrl}/like/product/${productId}`, {
    userId: parseInt(userId),
  })
}
//브랜드 좋아요 등록
export const callPostLikeBrandtAPI = (brandId, userId) => {
  return axios.post(`${hostUrl}/like/brand/${brandId}`, {
    userId: parseInt(userId),
  })
}
// 상품 좋아요 삭제
export const callDeleteBrandAPI = (brandId, userId) => {
  return axios.delete(`${hostUrl}/like/brand/${brandId}`, {
    userId: parseInt(userId),
  })
}

/* Products 관련 api */
// 좋아요 상품 조회
export const callGetProductByLikeProductAPI = (userId) => {
  return axios.get(`${hostUrl}/product/like_product?userId=${userId}`)
}
// 좋아요 브랜드 상품 조회
export const callGetProductByLikeBrandAPI = (userId) => {
  return axios.get(`${hostUrl}/product/like_brand?userId=${userId}`)
}
// 상품 목록 조회
export const callGetProductAPI = (categoryId, brandId, keyword) => {
  let url = categoryId
    ? `${hostUrl}/product?categoryId=${categoryId}`
    : `${hostUrl}/product`
  if (brandId) {
    url = categoryId ? `${url}&brandId=${brandId}` : `${url}?brandId=${brandId}`
  }
  if (keyword) {
    url = `${hostUrl}/product?keyword=${keyword}`
  }
  return axios.get(url)
}
// 상품 등록
export const callPostProductAPI = (
  productName,
  productImg,
  price,
  stockQuantity,
  categoryId,
  brandId,
  totalLike
) => {
  return axios.post(`${hostUrl}/product`, {
    productName,
    productImg,
    price: parseInt(price),
    stockQuantity: parseInt(stockQuantity),
    categoryId: parseInt(categoryId),
    brandId: parseInt(brandId),
    totalLike: parseInt(totalLike),
  })
}
// 특정 상품 조회 /product/10
export const callGetProductByProductIdAPI = (productId) => {
  return axios.get(`${hostUrl}/product/${productId}`)
}
// 상품 업데이트
export const callPutProductAPI = (
  productId,
  productName,
  productImg,
  price,
  stockQuantity,
  categoryId,
  brandId,
  totalLike
) => {
  return axios.put(`${hostUrl}/product/${productId}`, {
    productName,
    productImg,
    price: parseInt(price),
    stockQuantity: parseInt(stockQuantity),
    categoryId: parseInt(categoryId),
    brandId: parseInt(brandId),
    totalLike: parseInt(totalLike),
  })
}

/* Category 관련 api */
// 카테고리 목록 조회
export const callGetCategoryAPI = () => {
  return axios.get(`${hostUrl}/category`)
}
//
// 특정 브랜드의 카테고리 id 목록 조회
export const callGetCategoryByBrandIdAPI = (brandId) => {
  return axios.get(`${hostUrl}/category/${brandId}`)
}

/* account 관련 api */
// 로그인
export const callPostAccountLoginAPI = (email, password) => {
  return axios.post(`${hostUrl}/account/login`, { email, password })
}

// 로그인된 유저정보 조회
export const callGetAccountInfoAPI = (token) => {
  return axios.get(`${hostUrl}/account`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// 회원가입
export const callPostAccountAPI = (
  userName,
  email,
  password,
  address,
  phoneNumber
) => {
  return axios.post(`${hostUrl}/account`, {
    userName,
    email,
    password,
    address,
    phoneNumber,
  })
}

// 유저 탈퇴
export const callDeleteAccountAPI = (token) => {
  return axios.delete(`${hostUrl}/account`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// 유저 정보 수정
export const callPutAccountAPI = (
  userName,
  email,
  password,
  address,
  phoneNumber,
  token
) => {
  return axios.put(
    `${hostUrl}/account`,
    {
      userName,
      email,
      password,
      address,
      phoneNumber,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}

/* 주문 관련 api */
// 주문 조회
export const callGetOrderAPI = (token) => {
  return axios.get(`${hostUrl}/order`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

// 주문 생성
export const callPostOrderAPI = (totalPrice, orderItems, token) => {
  return axios.post(
    `${hostUrl}/order`,
    {
      totalPrice,
      orderItems,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}

// 주문 취소
export const callPutOrderAPI = (orderId, token) => {
  return axios.put(`${hostUrl}/order/${orderId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
