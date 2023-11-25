'use client'
import { useEffect, useRef } from "react"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { styled } from "styled-components";

const Wrapper = styled.main`
  section {
    height: 100vh;
    background-color: #aac5aa;

    h1 {
      font-size: 30px;
      font-weight: 700;
    }
  }

  section:nth-child(2n){
    background-color: #f6b2bd;
  }
`;

gsap.registerPlugin(ScrollTrigger);

export default function ScrollPage() {
  const pinRef = useRef(null)

  useEffect(() => {

    // gsap.to(pinRef.current, {
    //   background: "#b6b356",
    //   color: "#124335",

    //   scrollTrigger: {
    //     trigger: pinRef.current,
    //   },
    // })

    gsap.timeline({
      scrollTrigger: {
        trigger: pinRef.current,
        scrub: 1,
        markers: true
      }
    })

  }, [])

  return (
    <Wrapper>
      {/* SECTION 01 */}
      <section>
        <h1>SECTION 01</h1>
      </section>

      {/* SECTION 02 */}
      <section ref={pinRef}>
        <h1>SECTION 02</h1>
      </section>

      {/* SECTION 03 */}
      <section>
        <h1>SECTION 03</h1>
      </section>
    </Wrapper>
  )
}