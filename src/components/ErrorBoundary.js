import React, { Component } from 'react'

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        //this.props.children로 전달되는 컴포넌트 에러만 catch
        //Error 전달
        this.props.noticeError({error, info})
    }

    render() {
        if (this.state.hasError) return <h1>Occured UI error.</h1>
        return this.props.children
    }
}
export default ErrorBoundary