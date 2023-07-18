import { AnyAction } from 'redux'

import SELECTED_GOODS from '../types/selectedGoods'
import GoodsItem from '../../types/GoodsItem'

interface InitialState {
  selectedGoods: GoodsItem['id'][]
}

const initialState: InitialState = {
  selectedGoods: [],
}

const selectedGoodsReducer = (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case SELECTED_GOODS.SET_SELECTED_GOODS:
      return {
        ...state,
        selectedGoods: payload,
      }
    case SELECTED_GOODS.ADD_SELECTED_GOODS_ITEM: {
      return {
        ...state,
        selectedGoods: [...state.selectedGoods, payload],
      }
    }
    case SELECTED_GOODS.REMOVE_SELECTED_GOODS_ITEM: {
      return {
        ...state,
        selectedGoods: state.selectedGoods.filter((item) => item !== payload),
      }
    }
    default:
      return state
  }
}

export default selectedGoodsReducer
