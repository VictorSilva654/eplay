import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos } from './style'

type Props = {
  title: string
  description: string
  category: string
  system: string
  image: string
  infos: string[]
  id: number
}

const Product = ({
  title,
  description,
  category,
  system,
  image,
  infos,
  id
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }
    return description
  }

  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{getDescription(description)}</Descricao>
    </Card>
  )
}

export default Product
