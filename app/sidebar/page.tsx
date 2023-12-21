'use client'
import { styled } from "styled-components"

const Wrapper = styled.div`
  
`

const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: skyblue;
  text-align: center;
  line-height: 80px;
  font-size: 20px;
  font-weight: bold;
  position: sticky;
  top:0;
  left:0;
  z-index:1000;
`

const Container = styled.main`
  max-width: 1140px;
  margin: auto;
  display: flex;
  flex-direction: row;
  border: 1px solid red;
`

const SideMenu = styled.aside`
  width: 300px;
  height: calc(100vh - 80px);
  background-color: pink;
  position: sticky;
  top: 80px;
`

const CommonSection = styled.section`
  width: calc(100% - 300px);
  background-color: green;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 30px;
  padding-right: 30px;

  & > ul {
    display:flex;
    flex-direction: column;
    gap: 30px;
    & > li {
      padding: 30px 10px;
      box-sizing:border-box;
      border: 1px solid black;
      width: 100%;
      background-color: yellow;
    }
  }
`

const DesignBg = styled.div`
  width: 50%;
  height: 100vh;
  z-index: -1;
  position: fixed;
  right: 0;
  top: 0;
  background-color: green;
`

const Footer = styled.footer`
  width: 100%;
  height: 250px;
  background-color: gray;
`

export default function SidePage() {
  return (
    <Wrapper>
      <Header>Header</Header>
      <Container>
        <SideMenu>Aside</SideMenu>
        <CommonSection>
          <ul>
            <li>item</li>
            {/* <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li> */}
          </ul>
        </CommonSection>
      </Container>
      <DesignBg />
      <Footer>Footer</Footer>
    </Wrapper>
  )
}