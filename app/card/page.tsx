import CardAnimation from "../components/cardAnimation";

export default function CardPage() {
  return (
    <>
      {/* 스크롤시 active-card 추가, 
      카드 hover시 active-active 클래스가 있으면 
      active-card 클래스를 넣고 없으면 지우기 */}
      <CardAnimation />
    </>
  )
}