'use client'
import { styled } from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
  }
`

export default function EmptySpace() {
  return (
    <Wrapper>
      <h1>Scroll Down</h1>
    </Wrapper>
  )
}