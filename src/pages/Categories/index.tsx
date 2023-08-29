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
        <ProductsList
          games={gamesAcao}
          title="Ação"
          background="gray"
          id="action"
        />
        <ProductsList
          games={gamesRPG}
          title="RPG"
          background="black"
          id="rpg"
        />
        <ProductsList
          games={gamesEsportes}
          title="Esportes"
          id="sports"
          background="gray"
        />
        <ProductsList
          id="fight"
          games={gamesLuta}
          title="Luta"
          background="black"
        />
        <ProductsList
          id="simulation"
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
