import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import {
  CartContainer,
  Overlay,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'
import Tag from '../Tag'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formatPrice, getTotalPrice } from '../../utils'

const Cart = () => {
  const { visible, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <CartContainer className={visible ? 'visible' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{formatPrice(item.prices.current)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <Quantity>{items.length} jogo(s) no carrinho</Quantity>
            <Prices>
              Total de {formatPrice(getTotalPrice(items))}{' '}
              <span>em até 6x sem juros</span>
            </Prices>
            <Button
              onClick={goToCheckout}
              variant="primary"
              type="button"
              title="Clique aqui para continuar com a compra"
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            Carrinho vazio! Por favor, insira um produto para continuar.
          </p>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
