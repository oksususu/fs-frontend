import { atom } from 'recoil'

const localStorageEffect =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue))
    })
  }

// map: key:sting, value: obj
// map은 obj에 비해 읽기 능력이, obj은 map에 비해 생성 시간이 빠른편
// map은 json에서는 지원하지 않는 타입으로, string, array 등으로 따로 변환 필요
// 그냥 모두 obj으로 사용할까..ㅎㅎ ok
export const cartState = atom({
  key: 'cartState',
  default: {},
  effects: [localStorageEffect('cart')],
})

export const orderBrandListState = atom({
  key: 'orderBrandListState',
  default: [],
})
