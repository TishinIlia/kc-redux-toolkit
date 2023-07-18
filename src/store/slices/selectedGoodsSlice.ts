import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import GoodsItem from '../../types/GoodsItem'

interface InitialState {
  selectedGoods: GoodsItem['id'][]
}

const initialState: InitialState = {
  selectedGoods: [],
}

const selectedGoodsSlice = createSlice({
  name: 'selectedGoods',
  initialState,
  reducers: {
    setSelectedGoods: (state, action: PayloadAction<GoodsItem['id'][]>) => {
      state.selectedGoods = action.payload
    },
    addSelectedGoods: (state, action: PayloadAction<GoodsItem['id']>) => {
      state.selectedGoods.unshift(action.payload)
    },
    deleteSelectedGoods: (state, action: PayloadAction<GoodsItem['id']>) => {
      state.selectedGoods = state.selectedGoods.filter((item) => item !== action.payload)
    },
  },
})

export const { setSelectedGoods, addSelectedGoods, deleteSelectedGoods } = selectedGoodsSlice.actions
export default selectedGoodsSlice.reducer
