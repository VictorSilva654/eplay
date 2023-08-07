import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import diablo from '../../assets/images/diablo.png'
import star_wars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import resident from '../../assets/images/resident.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'lalalalala',
    title: 'Resident Evil',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description: 'lalalalala',
    title: 'Resident Evil',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    description: 'lalalalala',
    title: 'Resident Evil',
    system: 'Switch',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 4,
    category: 'RPG',
    description: 'lalalalala',
    title: 'Zelda',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: zelda
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'lalalalala',
    title: 'Star Wars',
    system: 'Windows',
    infos: ['05/2025'],
    image: star_wars
  },
  {
    id: 6,
    category: 'Ação',
    description: 'lalalalala',
    title: 'Diablo',
    system: 'Windows',
    infos: ['05/2024'],
    image: diablo
  },
  {
    id: 7,
    category: 'Ação',
    description: 'lalalalala',
    title: 'Resident Evil',
    system: 'Switch',
    infos: ['04/2023'],
    image: resident
  },
  {
    id: 8,
    category: 'RPG',
    description: 'lalalalala',
    title: 'Zelda',
    system: 'Windows',
    infos: ['05/2024'],
    image: zelda
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="Ação" background="gray" />
    <ProductsList games={emBreve} title="RPG" background="black" />
    <ProductsList games={promocoes} title="Aventura" background="gray" />
    <ProductsList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
