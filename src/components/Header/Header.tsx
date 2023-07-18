import React, { useState } from 'react'
import { Typography, Button, Affix } from 'antd'

import { useSelector } from 'react-redux'
import CartModal from '../CartModal/CartModal'
import GoodsItemType from '../../types/GoodsItem'
import { getGoods, getSelectedGoods } from '../../store/selectors/selectors'

const Header = () => {
  const goods: GoodsItemType[] = useSelector(getGoods)
  const selectedGoods: GoodsItemType['id'][] = useSelector(getSelectedGoods)
  const [isModalVisible, setModalVisible] = useState(false)
  const showModal = () => {
    setModalVisible(true)
  }
  const hideModal = () => {
    setModalVisible(false)
  }

  const total = selectedGoods.reduce((acc, item) => {
    const goodsPrice = goods.find((goodItem) => goodItem.id === item)
    if (!goodsPrice) {
      return acc
    }
    return acc + goodsPrice.price
  }, 0)

  return (
    <>
      <Affix>
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 24,
            paddingBottom: 24,
          }}
        >
          <Typography.Title style={{ marginBottom: 0 }}>McDonald’s</Typography.Title>
          {selectedGoods.length > 0 ? (
            <Button type="primary" onClick={showModal}>
              Корзина на {total} ₽
            </Button>
          ) : (
            <Button type="primary" disabled>
              Корзина пустует
            </Button>
          )}
        </section>
      </Affix>

      <CartModal isOpen={isModalVisible} onClose={hideModal} />
    </>
  )
}

export default Header
