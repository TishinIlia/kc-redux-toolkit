import { getGoods } from '../../api'

import SET_GOODS from '../types/goods'

import { AppAction } from '../index'

import GoodsItem from '../../types/GoodsItem'

export const setGoodsState = (goods: GoodsItem[]) => ({
  type: SET_GOODS,
  payload: goods,
})

export const fetchGoods = (): AppAction<Promise<void>> => (dispatch) => {
  return getGoods().then((goods) => {
    dispatch(setGoodsState(goods))
  })
}
