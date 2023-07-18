import { configureStore, ThunkAction, ThunkDispatch, Action } from '@reduxjs/toolkit'

import goodsSlice from './slices/goodsSlice'
import selectedGoodsSlice from './slices/selectedGoodsSlice'

export const store = configureStore({
  reducer: {
    goods: goodsSlice,
    selectedGoods: selectedGoodsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = ThunkDispatch<RootState, unknown, Action<string>>
export type AppAction<R> = ThunkAction<R, RootState, unknown, Action<string>>
