import Button from '../Button'
import {
  CartContainer,
  Overlay,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './styles'
import img from '../../assets/images/zelda.png'
import Tag from '../Tag'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={img} />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
          <CartItem>
            <img src={img} />
            <div>
              <h3>Nome do jogo</h3>
              <Tag>RPG</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Quantity>2 jogo(s) no carrinho</Quantity>
        <Prices>
          Total de R$ 250,00 <span>em até 6x sem juros</span>
        </Prices>
        <Button
          variant="primary"
          type="button"
          title="Clique aqui para continuar com a compra"
        >
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
