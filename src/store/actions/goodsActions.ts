import { getGoods } from '../../api'
import { AppAction } from '../index'
import { setGoods } from '../slices/goodsSlice'

const fetchGoods = (): AppAction<Promise<void>> => (dispatch) => {
  return getGoods().then((goods) => {
    dispatch(setGoods(goods))
  })
}

export default fetchGoods
