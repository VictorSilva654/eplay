import { Imagem, Titulo, Precos } from './styles'
import fotoMiles from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${fotoMiles})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo>Marvel&apos;s Spider Man Miles Morales para PS4 e PS5</Titulo>
        <Precos>
          De <span>R$ 250,00</span> por <br />
          R$ 99,00
        </Precos>
      </div>
      <Button
        type="link"
        to="/promocoes"
        title="Clique aqui e confira as ofertas!"
      >
        Aproveite agora!
      </Button>
    </div>
  </Imagem>
)

export default Banner
