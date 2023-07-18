import { AnyAction } from 'redux'

import SET_GOODS from '../types/goods'
import GoodsItem from '../../types/GoodsItem'

interface InitialState {
  goods: GoodsItem[]
}

const initialState: InitialState = {
  goods: [],
}

const goodsReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SET_GOODS:
      return {
        ...state,
        goods: payload,
      }
    default:
      return state
  }
}

export default goodsReducer
