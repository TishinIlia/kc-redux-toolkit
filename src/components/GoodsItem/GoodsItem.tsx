import React, { FC } from 'react'
import { Card } from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'

interface Props {
  id: string
  name: string
  image: string
  price: number
  selected: boolean
  onDelete: (id: string) => void
  onAdd: (id: string) => void
}

const GoodsItem: FC<Props> = ({ id, name, image, price, selected, onDelete, onAdd }) => {
  return (
    <Card
      hoverable
      cover={<img alt={name} src={image} />}
      actions={[
        price.toLocaleString('ru-RU', {
          style: 'currency',
          currency: 'RUB',
          maximumFractionDigits: 0,
        }),
        selected ? (
          <DeleteOutlined
            key="delete"
            style={{ color: '#ff4d4f' }}
            onClick={() => {
              onDelete(id)
            }}
          />
        ) : (
          <PlusOutlined
            key="add"
            onClick={() => {
              onAdd(id)
            }}
          />
        ),
      ]}
    >
      <Card.Meta title={name} />
    </Card>
  )
}

export default GoodsItem
