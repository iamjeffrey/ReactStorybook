import React from 'react'
// ref : 특정 input에 포커스 주기, 스크롤 조작, canvas에 그림 그리기 등에 사용
const ScrollBox = ({action}) => {
    const scrollRef = React.createRef()
    const style={
        border: '1px solid gray',
        height: '300px', 
        width: '300px', 
        overflow: 'auto', 
        position: 'relative'
    }
    const innerStyle = {
        width: '100%', 
        height: '650px', 
        background: 'linear-gradient(white,blue)'
    }
    const scrollToBottom = () => {
        const { scrollHeight, clientHeight } = scrollRef.current
        scrollRef.current.scrollTop = scrollHeight - clientHeight
        action([ scrollHeight, clientHeight ])
    }
    return (
        <div>
            <div style={style} ref={scrollRef}>
                <div style={innerStyle} />

            </div>
            <button onClick={
                () => {
                    scrollToBottom()
                }
                }>BOTTOM</button>
        </div>
    )
}

export default ScrollBox