import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
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
              <HashLink to="/#soon">Em breve</HashLink>
            </ItemList>
            <ItemList>
              <HashLink to="/#on-sale">Promoções</HashLink>
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
