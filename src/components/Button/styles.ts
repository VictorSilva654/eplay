import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  padding: 8px 16px;
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.verde : 'transparent'};
  color: ${cores.branca};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.verde : cores.branca)};
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  background-color: transparent;
  color: ${cores.branca};
  border: 2px solid ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
`
