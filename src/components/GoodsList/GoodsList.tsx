import React, { useEffect, useState } from 'react'
import { Row, Col, Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

import GoodsItem from '../GoodsItem/GoodsItem'
import { Dispatch } from '../../store'
import { getGoods, getSelectedGoods } from '../../store/selectors/selectors'
import { fetchGoods } from '../../store/actions/goodsActions'
import GoodsItemType from '../../types/GoodsItem'

import { addSelectedGoodsItem, removeSelectedGoodsItem } from '../../store/actions/selectedGoodsActions'

const GoodsList = () => {
  const dispatch = useDispatch<Dispatch>()
  const goods: GoodsItemType[] = useSelector(getGoods)
  const selectedGoods: GoodsItemType['id'][] = useSelector(getSelectedGoods)
  const [isLoading, setLoader] = useState<boolean>(false)

  useEffect(() => {
    setLoader(true)
    dispatch(fetchGoods()).finally(() => setLoader(false))
  }, [dispatch])

  if (isLoading) {
    return <Spin />
  }

  const onAdd = (id: GoodsItemType['id']) => {
    dispatch(addSelectedGoodsItem(id))
  }

  const onDelete = (id: GoodsItemType['id']) => {
    dispatch(removeSelectedGoodsItem(id))
  }

  return (
    <Row gutter={[16, 16]}>
      {goods.map(({ id, image, info, price }) => (
        <Col span={8} key={id}>
          <GoodsItem
            id={id}
            name={info}
            image={image}
            price={price}
            selected={selectedGoods.includes(id)}
            onAdd={onAdd}
            onDelete={onDelete}
          />
        </Col>
      ))}
    </Row>
  )
}

export default GoodsList
