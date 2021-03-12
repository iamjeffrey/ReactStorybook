import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'
import LifeCycleComponent from './Lifecycle'

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

class LifeCycleContainer extends Component {
    state = { color: '#000000' }
    handleClick = () => {
        this.setState({ color: getRandomColor() })
    }

    noticeError = (error) => {
        console.log(error)
        //서버로 에러 전달..
    }

    //[책 page 188참고]
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Random Color</button>
                <ErrorBoundary noticeError={this.noticeError}>
                    <LifeCycleComponent 
                        action={this.props.action} 
                        color={this.state.color} />
                </ErrorBoundary>
            </div>
        )
    }
}

export default LifeCycleContainer