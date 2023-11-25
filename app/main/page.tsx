'use client'
import { animated, useScroll, useSpring } from '@react-spring/web'
import { styled } from 'styled-components'

const AnimatedBox = styled.div`
  width: 80px;
  height: 80px;
  background: #ff6d6d;
  border-radius: 8px;
`;

export default function MainPage() {

  //Spring
  const [props, api] = useSpring(() => ({
    from: { x: 0 },
  }))

  //Event
  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    })
  }

  return (
    <>
      <AnimatedBox
        as={animated.div}
        onClick={handleClick}
        style={props}
      />
    </>
  )
}