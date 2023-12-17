'use client'
import { useEffect } from "react"
import { styled } from "styled-components"

const Wrapper = styled.div`
  padding: 54px 24px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid red;
`
const FlipCardWrapper = styled.div`
  /* &:hover .card-inner {
    transform: rotateY(180deg);
  } */

  &.flipped .card-inner {
    transform: rotateY(0deg);
  }
`
const CardContainer = styled.div`
  width: 250px;
  aspect-ratio: 2/3;
  perspective: 1000px; 
`
const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: rotateY(180deg);
`
const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 30px;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
  background-color: #c995cc;
  border-radius: 16px;
  font-size: 100px;
  text-align: center;
  line-height: 300px;
`
const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 30px;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
  background-color: #71D3C2;
  transform: rotateY(180deg);
  border-radius: 16px;
`

export default function FlipCard(props: any) {
  //console.log(props.isInView)
  return (
    <Wrapper>
      <FlipCardWrapper
        ref={props.cardRef}
        className={props.isInView ? 'flipped' : ''}
        onMouseEnter={(event: any) => {

          //flipped 스타일 클래스를 가지고있으면 remove
          if (props.cardRef.current.classList.contains('flipped')) {
            props.cardRef.current.classList.remove('flipped')
          }
        }}

        onMouseLeave={(event: any) => {
          //flipped 스타일 클래스가 없으면 add
          if (!props.cardRef.current.classList.contains('flipped')) {
            props.cardRef.current.classList.add('flipped')
          }
        }}
      >
        <CardContainer>
          <CardInner className="card-inner">
            <CardFront>🫛</CardFront>
            <CardBack>설명</CardBack>
          </CardInner>
        </CardContainer>
      </FlipCardWrapper>
    </Wrapper>
  )
}