import React, { useState } from 'react'

const Say = ({action}) => {
    //배열 비구조화 할당
    const array = [1, 2]
    const [one, two] = array

    const [message, setMessage] = useState('')
    const [status, setStatus] = useState({a: 'on', b: 'off'})
    const [values, setValues] = useState([{id: 1, value: true}])
    const onClickEnter = () => {
        setMessage('Hellow!')
        const didStatus = status
        //b키값만 변경
        const willStatus = { ... didStatus, b: 'on'}
        setStatus(willStatus)
        
        //새로운 배열을 만들어서 변경(불변성 유지를 해주어야 컴포넌트 성능을 최적화 할수 있다)
        let willValues = values.concat({id: 2, value: false})
        setValues(willValues)

        //Remove는 .filter()로 특정 원소만 제외 시키고 set한다
    }
    const onClickLeave = ()=> {
        setMessage('Bye~')
        action(values)
        action(status)
    }
    return (
        <div>
            <button onClick={onClickEnter}>Enter</button> 
            <button onClick={onClickLeave}>Exit</button>
            <h3>{message}</h3>
        </div>
    )
}

export default Say