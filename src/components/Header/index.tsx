import React from 'react'
import { MdPerson } from 'react-icons/md'

import { Container, ContainerBody, Profile } from './styles'
import facebookLogo from './facebook-1.png'

export default function Header () {
  return (
    <Container>
      <ContainerBody>
        <img src={facebookLogo} alt="Facebook Logo"/>
        <Profile>
          <strong>Meu Perfil</strong>
          <MdPerson size={24} style={{ marginLeft: 10 }} />
        </Profile>
      </ContainerBody>
    </Container>
  )
}
