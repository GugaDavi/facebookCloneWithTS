import { ImgHTMLAttributes } from 'react'

import styled from 'styled-components'

interface IMG {
  src: string
}

export const Container = styled.div`
  display: flex;
`

export const Img = styled.img.attrs((props: ImgHTMLAttributes<IMG>) => ({
  src: props.src
}))`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin-right: 10px;
`

export const Content = styled.div`
  padding: 10px 15px;
  border-radius: 20px;
  background-color: #EEEEEE;
  color: #3E3E3E;
  font-size: 14px;
  margin-bottom: 10px;
`
