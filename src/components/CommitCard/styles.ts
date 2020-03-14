import { ImgHTMLAttributes } from 'react'
import styled from 'styled-components'

interface IMG {
  src: string
}

export const Container = styled.div`
  margin: 0px auto;
  max-width: 700px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.133916);
  border-radius: 4px;
  margin-bottom: 15px;

  p {
    font-size: 14px;
    line-height: 22px;
    color: #3E3E3E;
  }
`

export const CommitHeader = styled.div`
  display: flex;
  margin-bottom: 15px;
`

export const CommitImg = styled.img.attrs((props: ImgHTMLAttributes<IMG>) => ({
  src: props.src
}))`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
`

export const AuthorData = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: #4A4A4A;
    font-size: 16px;
  }

  span {
    color: #9A9A9A;
    font-size: 12px;
  }
`
