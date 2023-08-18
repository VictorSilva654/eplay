import { Container, Title } from './styles'

export type Props = {
  background: 'gray' | 'black'
  title: string
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      {children}
    </div>
  </Container>
)

export default Section
