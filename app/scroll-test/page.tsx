'use client'
import { motion, useScroll, useTransform, Variants } from "framer-motion"
import { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { fadeInAnimationsVariants, pathVariants, svgVariants } from "./animation";
import InterviewSVG from "./components/interviewSVG";
import IntroSVG from "./components/introSVG";
import VisionSVG from "./components/visionSVG";

//Styles
const Wrapper = styled(motion.section)`
  background-color: #333;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6vw;
  color: white;
  font-weight: bold;

  span {
    display:block;
  }
`;

const IntroContainer = styled.div`
  min-width: 1440px;
  margin: calc(80px + 120px) auto auto;
  padding: 140px 0 0;
  //border: 1px solid red;
`;

const Container = styled.div`
  min-width: 1440px;
  margin: auto;
  /* border: 1px solid red; */

  .interview-svg {
    width: 97%;
    position: relative;
    top: -2px;
  }
`;

//Page
export default function ScrollTestPage() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"]
  });

  return (
    <motion.main initial="hidden" animate="show">

      {/* Section_01 */}
      <Wrapper>
        <IntroContainer>
          <IntroSVG svgVariants={svgVariants} pathVariants={pathVariants} />
        </IntroContainer>
      </Wrapper>

      {/* Section_02 */}
      <Wrapper ref={ref}>
        <Container>
          <InterviewSVG scrollYProgress={scrollYProgress} />
        </Container>
      </Wrapper>



      {/* Section_03 */}
    </motion.main>
  )
}