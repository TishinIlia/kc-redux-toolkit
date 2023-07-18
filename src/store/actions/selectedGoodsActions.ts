import SELECTED_GOODS from '../types/selectedGoods'
import GoodsItem from '../../types/GoodsItem'

export const setSelectedGoods = (selectedGoodsItems: GoodsItem['id'][]) => ({
  type: SELECTED_GOODS.SET_SELECTED_GOODS,
  payload: selectedGoodsItems,
})

export const addSelectedGoodsItem = (id: GoodsItem['id']) => ({
  type: SELECTED_GOODS.ADD_SELECTED_GOODS_ITEM,
  payload: id,
})

export const removeSelectedGoodsItem = (id: GoodsItem['id']) => ({
  type: SELECTED_GOODS.REMOVE_SELECTED_GOODS_ITEM,
  payload: id,
})
