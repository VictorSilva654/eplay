import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }
`

export const Items = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const ItemList = styled.li`
  margin-right: 16px;
`
export const LinkChart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`
