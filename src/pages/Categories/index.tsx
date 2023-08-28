import ProductsList from '../../components/ProductsList'
import {
  useGetActionGameQuery,
  useGetFightGameQuery,
  useGetRPGGameQuery,
  useGetSimulationGameQuery,
  useGetSportsGameQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesAcao } = useGetActionGameQuery()
  const { data: gamesLuta } = useGetFightGameQuery()
  const { data: gamesRPG } = useGetRPGGameQuery()
  const { data: gamesSimulacao } = useGetSimulationGameQuery()
  const { data: gamesEsportes } = useGetSportsGameQuery()

  if (gamesAcao && gamesEsportes && gamesLuta && gamesRPG && gamesSimulacao) {
    return (
      <>
        <ProductsList games={gamesAcao} title="Ação" background="gray" />
        <ProductsList games={gamesRPG} title="RPG" background="black" />
        <ProductsList
          games={gamesEsportes}
          title="Esportes"
          background="gray"
        />
        <ProductsList games={gamesLuta} title="Luta" background="black" />
        <ProductsList
          games={gamesSimulacao}
          title="Simulação"
          background="gray"
        />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Categories
