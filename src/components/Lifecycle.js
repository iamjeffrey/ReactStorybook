import React, { Component } from 'react'
import { action } from '@storybook/addon-actions'

class LifeCycleComponent extends Component {
    //[Mount Life Cycle] : construct -> getDerivedStateFromProps -> render -> componentDidMount

    /*
        [Update Life Cycle]
            getDerivedStateFromProps->shouldComponentUpdate->render
            ->getSnapshotBeforeUpdate->componentDidUpdate

        getDerivedStateFromProps
            마운트 과정 또는 업데이트 시작 전 호출, props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용

        shouldComponentUpdate
            리렌더링 여부 결정, 특정 메소드에서 this.forceUpdate()를 호출하면 이 과정은 생략됨

        getSnapshotBeforeUpdate
            컴포넌트 변화를 DOM에 반영하기 바로 직전(브라우저에 반영되기 직전) 호출
            리턴한 값은 componentDidUpdate에 세 번째 파라미터 snapshot값으로 전달받을 수 있다
            업데이트 하기 직전 값을 참고 할 일이 있을때(스크롤바 위치 유지 등)
        
        componentDidUpdate
            업데이트 직후 호출, nextProps, prevState을 사용하여 컴포넌트가 가졌던 이전 데이터에 접근할 수 있다
     */

    state = { number: 0, color: null }
    myRef = null
    
    constructor(props) {
        super(props)
    }
    
    static getDerivedStateFromPorps(nextProps, prevState) {
        console.log('getDerivedStateFromPorps')
        //부모에게 받은 받은 color값을 state에 동기화
        if (nextProps.color !== prevState.color) {
            return { color: nextProps.color }
        }
        return null
    }
    
    componentDidMount() { console.log('componentDidMount') }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState)
        return nextState.number % 10 !== 4
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', prevProps, this.props)
        //DOM 변화가 일어나기 전 색상을 componentDidUpdated에 snapshot알수 있게 리턴
        if (prevProps.color !== this.props.color) {
            return this.myRef.style.color
        }
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState)
        if (snapshot) {
            console.log('-업데이트 직전 색상:', snapshot)
        }
    }

    handleClick = () => {
        this.setState({ number: this.state.number + 1 })
    }

    render() {
        const style = { color: this.props.color }
        return (
            <div>
                {/* Rendering error */}
                {/*  {this.props.missing.value} */} 
                <h1 style={style} ref={ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>ADD</button>
            </div>
        )
    }
}

export default LifeCycleComponent