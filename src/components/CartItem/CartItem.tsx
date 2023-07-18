import React, { FC } from 'react'
import { Button, List, Avatar } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

interface Props {
  id: string
  name: string
  description: string
  image: string
  price: number
  onDelete: (id: string) => void
}

const CartItem: FC<Props> = ({ id, name, description, price, image, onDelete }) => {
  return (
    <List.Item
      key={id}
      actions={[<Button key="delete" shape="circle" danger icon={<DeleteOutlined />} onClick={() => onDelete(id)} />]}
    >
      <List.Item.Meta avatar={<Avatar src={image} />} title={name} description={description} />
      <div>
        {price.toLocaleString('ru-RU', {
          style: 'currency',
          currency: 'RUB',
          maximumFractionDigits: 0,
        })}
      </div>
    </List.Item>
  )
}

export default CartItem
