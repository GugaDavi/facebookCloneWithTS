export interface CommitCard {
  id: number
  author: Author
  date: string
  content: string
  comments: Commit[]
}

export interface Author {
  name: string
  avatar: string
}

export interface Commit {
  id: number
  author: Author
  date: string
  content: string
}
