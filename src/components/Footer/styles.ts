import styled from 'styled-components'
import { cores } from '../../styles'
import { HashLink as RouterLink } from 'react-router-hash-link'

export const SectionTitle = styled.h4`
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  font-size: 14px;
`

export const Container = styled.footer`
  padding: 32px 0;
  background-color: ${cores.cinza};
`

export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Link = styled(RouterLink)`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
