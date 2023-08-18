import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  width: 100%;
  height: 480px;
  display: block;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  padding-top: 16px;

  &::after {
    background-color: #000;
    opacity: 0.56;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    content: '';
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`

export const Infos = styled.div`
  padding: 16px;
  max-width: 290px;
  background-color: ${cores.preta};
  font-weight: bold;

  h2 {
    font-size: 32px;
  }
  p {
    font-size: 16px;
    margin: 16px 0;
  }
  span {
    display: block;
    text-decoration: line-through;
  }
`
