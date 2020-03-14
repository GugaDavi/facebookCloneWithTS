import React from 'react'

import { Commit } from '../types'

import { Container, Img, Content } from './styles'

interface ICommit {
  commit: Commit
}

export default function CommitItems ({ commit }: ICommit) {
  return (
    <Container>
      <Img src={commit.author.avatar} />
      <Content>
        <strong>{commit.author.name}</strong> - {commit.content}
      </Content>
    </Container>
  )
}
