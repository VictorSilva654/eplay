import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 40px;
  background-color: ${cores.cinza};

  h2,
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 24px;
    color: ${cores.branca};
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`
