import React from 'react'

import { CommitCard } from '../types'

import CommitItems from '../CommitItems/index'

import { Container, CommitHeader, AuthorData, CommitImg } from './styles'

interface ICommitCard {
  commitCard: CommitCard
}

export default function Commit ({ commitCard }: ICommitCard) {
  return (
    <Container>
      <CommitHeader>
        <CommitImg src={commitCard.author.avatar} />
        <AuthorData>
          <strong>{commitCard.author.name}</strong>
          <span>{commitCard.date}</span>
        </AuthorData>
      </CommitHeader>
      <p>{commitCard.content}</p>
      <hr style={{ opacity: 0.3, marginTop: 20, marginBottom: 20 }} />
      {commitCard.comments.map(c => (
        <CommitItems commit={c} key={c.id} />
      ))}
    </Container>
  )
}
