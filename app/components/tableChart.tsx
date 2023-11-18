'use client'
import { forwardRef, useEffect, useRef, useState } from "react";
import { styled } from "styled-components"

const Wrapper = styled.table`
  display:inline-block;
  width: 100%;

  th {
    padding:0;
  }
`;

const TableHead = styled.thead`
  display: inline-block;
  width: 100%;
  background-color: pink;

  & > tr {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > th {
      width: 25%;
    }
  }
`;

const TableBody = styled.tbody`
  display: inline-block;
  width: 100%;
`;

const TableRow = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;

  .active {
    background-color: red;
    color: white;
  }

  & > th {
    display:inline-block;
    width: 25%;
    height: 100%;
    line-height: 60px;
  }
`;

const TableRowHead = styled.th`
  background-color: skyBlue;
`;

const BackSlash = styled.th`
  display: flex;
  font-size: 14px;
  aspect-ratio: 109/64;
  background-image: url('/images/graph_back_slash.webp');
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
  background-color: #b6b6b6;

  & > div {
    width: 50%;
  }
  
  & > div:first-child {
    text-align: left;
    line-height: 6;
  }

  & > div:last-child {
    text-align: right;
  }
`;


export const TableChart = forwardRef((props: any, ref: any) => {

  const addActiveStyle = () => {

    let targetClassName = []

    if (props.data.organization === 'low') targetClassName.push('1')
    if (props.data.organization === 'middle') targetClassName.push('2')
    if (props.data.organization === 'high') targetClassName.push('3')

    if (props.data.elaboration === 'low') targetClassName.push('1')
    if (props.data.elaboration === 'middle') targetClassName.push('2')
    if (props.data.elaboration === 'high') targetClassName.push('3')

    // ex) 3-2 (high-middle)
    console.log(`${targetClassName[0]}-${targetClassName[1]}`)

    // ex) 3-2 클래스를 찾아서 그 요소에 active CSS 클래스를 부여
    const targetElement = ref.current.getElementsByClassName(`${targetClassName[0]}-${targetClassName[1]}`)
    targetElement[0].classList.add('active')
  }

  useEffect(() => {
    addActiveStyle()
  }, [])

  return (
    <Wrapper>

      {/* Table Head */}
      <TableHead>
        <tr>
          <BackSlash><div>조직화</div><div>정교화</div></BackSlash>
          <th>Lo</th>
          <th>Mi</th>
          <th>Hi</th>
        </tr>
      </TableHead>

      {/* Table Body */}
      <TableBody ref={ref}>
        <TableRow>
          <TableRowHead>Lo</TableRowHead>
          <th className="1-1">(1-1)</th> {/* 조직화: Low, 정교화: Low */}
          <th className="1-2">(1-2)</th> {/* 조직화: Low, 정교화: Middle */}
          <th className="1-3">(1-3)</th> {/* 조직화: Low, 정교화: High */}
        </TableRow>
        <TableRow>
          <TableRowHead>Mi</TableRowHead>
          <th className="2-1">(2-1)</th> {/* 조직화: Middle, 정교화: Low */}
          <th className="2-2">(2-2)</th> {/* 조직화: Middle, 정교화: Middle */}
          <th className="2-3">(2-3)</th> {/* 조직화: Middle, 정교화: High */}
        </TableRow>
        <TableRow>
          <TableRowHead>Hi</TableRowHead>
          <th className='3-1'>(3-1)</th> {/* 조직화: High, 정교화: Low */}
          <th className='3-2'>(3-2)</th> {/* 조직화: High, 정교화: Middle */}
          <th className='3-3'>(3-3)</th> {/* 조직화: High, 정교화: High */}
        </TableRow>
      </TableBody>

    </Wrapper>
  )
})