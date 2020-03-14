import React, { useState } from 'react'
import json from '../../state'

import { CommitCard as CommitsList } from '../../components/types'

import Header from '../../components/Header'
import CommitCard from '../../components/CommitCard'

import { Container, CommitsBody } from './styles'

export default function Home () {
  const [contenct] = useState<CommitsList[]>(json)

  return (
    <Container>
      <Header />
      <CommitsBody>
        {contenct?.map(c => (
          <CommitCard commitCard={c} key={c.id} />
        ))}

      </CommitsBody>
    </Container>
  )
}
