'use client'
import { motion, useTransform, Variants } from "framer-motion"
import { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { fadeInAnimationsVariants } from "./animation";
import Home from "./components/home";



//Styles
const Wrapper = styled(motion.section)`
  background-color: #333;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6vw;
  color: white;
  font-weight: bold;
  border-bottom: 1px solid red;

  span {
    display:block;
  }
`;

//Component



//Page
export default function ScrollTestPage() {


  return (
    <motion.main initial="hidden" animate="show">

      {/* Section_01 */}
      <Wrapper>
        <h1>
          <motion.span
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
              amount: 1,
            }}
            transition={{
              bounce: 0,
              duration: 0.5,
              delay: 0.5
            }}
          >
            Title
          </motion.span>
        </h1>
      </Wrapper>

      {/* Section_02 */}
      <Wrapper>
        <h1>
          <motion.span
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
              amount: 1,
            }}
            transition={{
              bounce: 0,
              duration: 0.5,
              delay: 0.5
            }}
          >
            Title
          </motion.span>
        </h1>
      </Wrapper>

      {/* Section_03 */}
      <Wrapper>
        <h1>
          <motion.span
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
              amount: 1,
            }}
            transition={{
              bounce: 0,
              duration: 0.5,
              delay: 0.5
            }}
          >
            Title
          </motion.span>
        </h1>
      </Wrapper>

      {/* Section_04 */}
      <Wrapper>
        <h1>
          <motion.span
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
              amount: 1,
            }}
            transition={{
              bounce: 0,
              duration: 0.5,
              delay: 0.5
            }}
          >
            Title
          </motion.span>
        </h1>
      </Wrapper>




    </motion.main>
  )
}