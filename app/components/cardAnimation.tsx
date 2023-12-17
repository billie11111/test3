'use client'
import { useInView } from "framer-motion"
import { useRef } from "react"
import { styled } from "styled-components"
import EmptySpace from "./emptySpace"
import FlipCard from "./flipCard"

const Wrapper = styled.div`
  border: 1px solid red;
`
const FlipCardContainer = styled.main`
  display:flex;
  flex-direction: column;
  gap: 20vh;
  background-color: black;
`

export default function CardAnimation() {
  const firstCardRef = useRef(null)
  const secondCardRef = useRef(null)
  const thirdCardRef = useRef(null)
  const cardRefArr = [firstCardRef, secondCardRef, thirdCardRef]

  const isInView = (idx: number) => {
    const isInView = useInView(cardRefArr[idx], { amount: 0.5 })
    return isInView;
  }

  return (
    <Wrapper>
      <EmptySpace />
      <FlipCardContainer>
        {[1, 2, 3].map((_, idx: number) => (

          <FlipCard
            key={idx}
            cardRef={cardRefArr[idx]}
            isInView={isInView(idx)}
          />
        ))}
      </FlipCardContainer>
    </Wrapper>
  )
}