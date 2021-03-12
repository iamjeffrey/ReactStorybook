import React, {useState, useMemo, useCallback, useRef} from 'react'

const getAverage = (numbers, action) => {
    action('getAverage 호출...')
    if (numbers.length === 0) return 0
    const sum = numbers.reduce((a, b) => a + b)
    return sum / numbers.length
}

const MemoAverage = ({action}) => {
    const inputEl = useRef(null)
    const id = useRef(1) //함수형 컴포넌트 로컬 변수(렌더링과 무관)
    const setId = (n) => {
        id.current = n
        console.log(id)
    }

    const [list, setList] = useState([])
    const [number, setNumber] = useState('')

    // const onChange = e => { setNumber(e.target.value) }
    // const onInsert = e => {
    //     const nextList = list.concat(parseInt(number))
    //     setList(nextList)
    //     setNumber('')
    // }

    //==============================================
    //숫자, 문자열, 객체처럼 일반 값 재사용하려면 useMemo
    //함수를 재사용하려면 useCallback
    //==============================================

    //----------------------------------------------
    //useCallback : 주로 [렌더링 최적화]에 사용
    //onChange, onInsert 함수는 리렌더링될 때마다 새로 생성, 렌더링 컴포넌트 수가 많아지면 이런 부분을 최적화
    //useCallback(생성하고 싶은 함수, 어떤 값이 바뀌었을 함수를 새로 생성해야하는지 명시하는 배열)
    //----------------------------------------------
    const onChange = useCallback(e => { 
        setNumber(e.target.value)
    }, []) //[] 지정 : 컴포넌트가 처음 렌더링 될때만 함수 생성
    
    const onInsert = useCallback(e => {
        const nextList = list.concat(parseInt(number))
        setList(nextList)
        setNumber('')
        inputEl.current.focus() //useRef를 통해 만든 객체 안의 current값이 실제 엘리먼트
        setId(100)
    }, [number, list]) //number 또는 list가 바뀌었을 때만 함수 생성, 내부적으로 상태값에 의존하는 경우 꼭 추가

    //----------------------------------------------
    //useMemo : 특정 값이 바뀌었을 때만 실행, 주로 [연산 최적화]에 사용
    //----------------------------------------------
    const avg = useMemo(() => getAverage(list, action), [list])

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl} />
            <button onClick={onInsert}>ADD</button>
            <ul>
                {
                    list.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))
                }
            </ul>
            <div>
                {/* useMemo없이 호출하면 입력만 해도 호출됨 */}
                {/* <h3>Average : {getAverage(list, action)}</h3> */}
                <h3>Average : {avg}</h3>
            </div>
        </div>
    )
}
export default MemoAverage