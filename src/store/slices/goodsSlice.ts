import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import GoodsItem from '../../types/GoodsItem'

interface InitialState {
  goods: GoodsItem[]
}

const initialState: InitialState = {
  goods: [],
}

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setGoods: (state, action: PayloadAction<GoodsItem[]>) => {
      state.goods = action.payload
    },
  },
})

export const { setGoods } = goodsSlice.actions
export default goodsSlice.reducer
