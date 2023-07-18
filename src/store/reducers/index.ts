import { combineReducers } from 'redux'
import goodsReducer from './goodsReducer'
import selectedGoodsReducer from './selectedGoodsReducer'

const rootReducer = combineReducers({
  goods: goodsReducer,
  selectedGoods: selectedGoodsReducer,
})

export default rootReducer
