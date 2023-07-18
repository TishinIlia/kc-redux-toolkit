import { RootState } from '../index'

export const getGoods = (state: RootState) => state.goods.goods
export const getSelectedGoods = (state: RootState) => state.selectedGoods.selectedGoods
