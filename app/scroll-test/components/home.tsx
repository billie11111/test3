'use client'
import { styled } from "styled-components"

const Wrapper = styled.section`
  background-color: #333;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  color: white;
  font-weight: bold;
  border-bottom: 1px solid red;
`;

export default function Home() {
  return (
    <Wrapper>
      <h1>
        <span>Section</span>
      </h1>
    </Wrapper>
  )
}