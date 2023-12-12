'use client'
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const LayerBgContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupWrapper = styled.div`
  width: 800px;
  height: 600px;
  max-height: 90%;
  background: #ffff;
  border-radius: 1.6rem;
  padding: 5.4rem 0rem;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ViewContainer = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  overflow: hidden;
  display: flex;
  padding: 2rem 0;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  animation: textLoop 100s linear infinite;

  &:hover {
    /* animation-play-state: paused;
    cursor: pointer; */
  }

  @keyframes textLoop {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-88%, 0, 0);
      transform: translate3d(-88%, 0, 0);
    }
  }
`;

const CardItem = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ffff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 16px;
`;

export default function SlidePage() {
  return (
    <Wrapper>
      <LayerBgContainer>
        <PopupWrapper>

          <ViewContainer>
            <CardContainer>
              <CardItem className="card-item">Card1</CardItem>
              <CardItem className="card-item">Card2</CardItem>
              <CardItem className="card-item">Card3</CardItem>
              <CardItem className="card-item">Card4</CardItem>
              <CardItem className="card-item">Card5</CardItem>

              <CardItem className="card-item">Card1</CardItem>
              <CardItem className="card-item">Card2</CardItem>
              <CardItem className="card-item">Card3</CardItem>
              <CardItem className="card-item">Card4</CardItem>
              <CardItem className="card-item">Card5</CardItem>

              <CardItem className="card-item">Card1</CardItem>
              <CardItem className="card-item">Card2</CardItem>
              <CardItem className="card-item">Card3</CardItem>
              <CardItem className="card-item">Card4</CardItem>
              <CardItem className="card-item">Card5</CardItem>

              <CardItem className="card-item">Card1</CardItem>
              <CardItem className="card-item">Card2</CardItem>
              <CardItem className="card-item">Card3</CardItem>
              <CardItem className="card-item">Card4</CardItem>
              <CardItem className="card-item">Card5</CardItem>

              <CardItem className="card-item">Card1</CardItem>
              <CardItem className="card-item">Card2</CardItem>
              <CardItem className="card-item">Card3</CardItem>
              <CardItem className="card-item">Card4</CardItem>
              <CardItem className="card-item">Card5</CardItem>

              <CardItem className="card-item">Card1</CardItem>
              <CardItem className="card-item">Card2</CardItem>
              <CardItem className="card-item">Card3</CardItem>
              <CardItem className="card-item">Card4</CardItem>
              <CardItem className="card-item">Card_30</CardItem>
            </CardContainer>
          </ViewContainer>


        </PopupWrapper>
      </LayerBgContainer>
    </Wrapper>
  )
}