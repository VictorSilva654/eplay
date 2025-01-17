import { Imagem, Titulo, Precos } from './styles'

import Tag from '../Tag'
import Button from '../Button'
import { formatPrice } from '../../utils'
import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()
  if (!game) return <h3>Carregando...</h3>

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formatPrice(game.prices.old)}</span> por <br />
            {formatPrice(game.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui e confira as ofertas!"
        >
          Aproveite agora!
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
