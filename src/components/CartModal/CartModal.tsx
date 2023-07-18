import React, { FC } from 'react'
import { Modal, List, message } from 'antd'

import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem/CartItem'
import GoodsItemType from '../../types/GoodsItem'
import { getGoods, getSelectedGoods } from '../../store/selectors/selectors'
import { removeSelectedGoodsItem, setSelectedGoods } from '../../store/actions/selectedGoodsActions'
import { Dispatch } from '../../store'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const CartModal: FC<Props> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch<Dispatch>()
  const goods: GoodsItemType[] = useSelector(getGoods)
  const selectedGoods: GoodsItemType['id'][] = useSelector(getSelectedGoods)

  const selectedGoodsList = selectedGoods.reduce((acc: GoodsItemType[], item: GoodsItemType['id']) => {
    const goodsItem = goods.find((goodItem) => goodItem.id === item)
    if (!goodsItem) {
      return acc
    }
    return [...acc, goodsItem]
  }, [])

  const onDelete = (id: GoodsItemType['id']) => {
    dispatch(removeSelectedGoodsItem(id))
  }

  return (
    <Modal
      title="Ваш заказ"
      visible={isOpen}
      onOk={() => {
        message.success('Оплачено')
        dispatch(setSelectedGoods([]))
        onClose()
      }}
      onCancel={onClose}
      okText={`Оплатить ${selectedGoodsList
        .reduce((sum, item) => item.price + sum, 0)
        .toLocaleString('ru-RU', {
          style: 'currency',
          currency: 'RUB',
          maximumFractionDigits: 0,
        })}`}
      cancelText="Отменить"
    >
      <List
        itemLayout="horizontal"
        dataSource={selectedGoodsList}
        renderItem={(item) => (
          <CartItem
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
            onDelete={onDelete}
          />
        )}
      />
    </Modal>
  )
}

export default CartModal
