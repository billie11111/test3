'use client'
import Link from "next/link";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default function LinkPage() {
  return (
    <Wrapper>
      <Link href="https://www.instagram.com/genestory_korea/" target="_blank">진스토리 인스타그램 Link 컴포넌트</Link>
      <a href="https://www.instagram.com/genestory_korea/" target="_blank">진스토리 인스타그램 일반 a태그</a>
    </Wrapper>
  )
}