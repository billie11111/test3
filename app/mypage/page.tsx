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
  background-color: #b5b065;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 30px;
  padding-right: 30px;

  & > div {
    width: 100%;
    background-color:white;
    display: flex;

    & > div:first-child {
      width: 40%;
      border: 1px solid red;
      background-color: yellow;
      padding: 30px;
    }

    & > div:last-child {
      width: 60%;
      border: 1px solid red;
      padding: 30px;

      & > div {
        border: 1px solid black;
        height: 300px;
      }
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
  background-color: #b5b065;
`

const Footer = styled.footer`
  width: 100%;
  height: 250px;
  background-color: gray;
`

export default function MyPage() {
  return (
    <Wrapper>
      <Header>Header</Header>
      <Container>
        <SideMenu>Aside</SideMenu>
        <CommonSection>
          <div>
            <div>Fixed</div>
            <div><div>box 01</div><div>box 02</div></div>
          </div>
        </CommonSection>
      </Container>
      <DesignBg />
      <Footer>Footer</Footer>
    </Wrapper>
  )
}