import { useState } from 'react'
import Section from '../Section'
import { GalleryItem } from '../../pages/Home'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'
import { Item, ItemsList, Action, Modal, ModalContent } from './styles'

interface Modal extends GalleryItem {
  isVisible: boolean
}

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<Modal>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaItem = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <ItemsList>
          {items.map((media, index) => (
            <Item
              key={index}
              onClick={() =>
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }
            >
              <img src={getMediaCover(media)} alt="Mídia carregada" />
              <Action>
                <img src={getMediaItem(media)} alt="Clique para maximizar" />
              </Action>
            </Item>
          ))}
        </ItemsList>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Icone para fechar"
              onClick={() => closeModal()}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Gallery
