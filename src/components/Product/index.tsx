import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos } from './style'

type Props = {
  title: string
  description: string
  category: string
  system: string
  image: string
  infos: string[]
}

const Product = ({
  title,
  description,
  category,
  system,
  image,
  infos
}: Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{description}</Descricao>
    </Card>
  )
}

export default Product
