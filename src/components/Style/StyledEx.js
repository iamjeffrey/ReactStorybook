import React, {  } from 'react'
import styled, { css } from 'styled-components'

const sizes = {
    desktop: 1024,
    tablet: 768
  };

// 위에있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어줍니다.
// 참고: https://www.styled-components.com/docs/advanced#media-templates
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)};
      }
    `;
  
    return acc;
  }, {});

//Tagged 템플릿 리터털 문법 style의 엘리먼트
const Box = styled.div`
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    ${media.desktop`width: 368px;`}
    ${media.tablet`width: 100%;`}

    /* @media (max-width: 768) {
        width: 100%;
    } */
`

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 0.4rem;
    padding: 0.5rem;
    display: flex;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    /* & 자기 자신 선택 가능 */
    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }

    /* 조건부 스타일링 : inverted props가 있으면 특정 스타일 부여 */
    ${
        props => props.inverted && 
        css`
            background: none;
            border: 2px solid white;
            color: white;
            &:hover {
                background: white;
                color: black;
            }
        `
    }

    & + button { 
        margin-left: 1rem;
    }
`

//기본 button에 스타일링한 Element
const Button2 = styled('button')`
    color: red;
`

const H1 = styled.h1`
    font-size: 1rem;
`

function tagged(...args) {
    console.log(args)
}

const StyledEx = ({action}) => {
    //Tagged 템플릿 리터털 그대로 출력
    tagged`hello ${{foo: 'bar'}} ${() => 'world'}!`
    const s = "sss"
    
    return (
        <div>
        <H1>Tagged 템플릿 리터털 엘리먼트, size 객체에 따라 자동으로 media 쿼리 함수, 조건부 스타일링 EX</H1>
        <Box>
            <Button>CIRCLE</Button>
            <Button inverted>CIRCLE2</Button>
            <Button2>YELLOW</Button2>
        </Box>
        </div>
    )

}
export default StyledEx