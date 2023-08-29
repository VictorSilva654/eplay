import { Link } from 'react-router-dom'
import { HeaderBar, ItemList, Items, LinkChart } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="Eplay" />
        </Link>
        <nav>
          <Items>
            <ItemList>
              <Link to="/categories">Categorias</Link>
            </ItemList>
            <ItemList>
              <a href="#">Novidades</a>
            </ItemList>
            <ItemList>
              <a href="#">Promoções</a>
            </ItemList>
          </Items>
        </nav>
      </div>
      <LinkChart onClick={openCart}>
        {items.length} - Produto(s)
        <img src={carrinho} alt="Carrinho" />
      </LinkChart>
    </HeaderBar>
  )
}

export default Header
