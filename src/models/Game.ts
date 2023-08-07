class Game {
  id: number
  category: string
  image: string
  description: string
  system: string
  title: string
  infos: string[]

  constructor(
    id: number,
    category: string,
    image: string,
    description: string,
    system: string,
    title: string,
    infos: string[]
  ) {
    this.id = id
    this.category = category
    this.image = image
    this.description = description
    this.system = system
    this.title = title
    this.infos = infos
  }
}

export default Game
