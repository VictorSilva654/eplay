import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: promocoes } = useGetOnSaleQuery()
  const { data: emBreve } = useGetSoonQuery()

  if (promocoes && emBreve) {
    return (
      <>
        <Banner />
        <ProductsList
          games={promocoes}
          title="Promoções"
          background="gray"
          id="on-sale"
        />
        <ProductsList
          games={emBreve}
          title="Em breve"
          background="black"
          id="soon"
        />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Home
