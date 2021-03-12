import React, { useEffect } from 'react'
import useInputs from './useInputs'

//useInputs에 구현
// function reducer(state, action) {
//     return { ...state, [action.name]: action.value }
// }

const InfoCustomHooks = ({action}) => {
    //* 여러 컴포넌트에서 공유할 수 있게, Custom hooks
    const [state, onChange] = useInputs({ name: '', nickname: '' })
    // const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' })

    //========================================================
    //[useEffect] : 렌더링 될때 마다 작업 수행하도록 설정하는 Hooks
    //componetDidMount + componentDidUpdate 형태
    //첫번째 파라미터 : 의존 값이 변경되면 실행되는 callback
    //첫번째 파라미터 : 의존하는 값 배열
    //두번째 파라미터 빈배열([])를 추가하면 처음 렌더링될 때만 실행하고 업데이트될때는 실행되지 않음
    //========================================================
    // useEffect(() => {
        //  실행할 로직 구현
    //     action("Completed rendering")
    //     action({name, nickname})
    // }, [])

    //특정값이 업데이트 될 때만 실행
    // useEffect(() => {
    //     action(name, "Completed rendering")
    // }, [name])
    
    const { name, nickname } = state 
    useEffect(() => {
        //컴포넌트가 나타날때는 effect
        console.log('effect', name) 

        //Unmount 또는 업데이트되기 직전 어떤 작업을 수행하고 싶으면 cleanup를 리턴
        return () => {
            //컴포넌트가 사리질때는 cleanup
            console.log('Cleanup', name) //뒷정리 함수가 호출될때는 업데이트되기 직전의 값
        }
    })

    // //두번째 파라미터에 빈 배열([])을 지정하면 cleanup 함수는 unmount될때만 호출
    // useEffect(() => {
    //     console.log('effect', name)
    //     //Unmount 또는 업데이트되기 직전 어떤 작업을 수행하고 싶으면 cleanup를 리턴
    //     return () => {
    //         console.log('Cleanup', name) //뒷정리 함수가 호출될때는 업데이트되기 직전의 값
    //     }
    // }, [])

    //useInputs에 구현
    // const handleChange = e => {
    //     //e.target.name을 참조해서 setState
    //     dispatch(e.target)
    // }

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>Name:</b> {name}
                </div>
                <div>
                    <b>NickName: </b> {nickname}
                </div>
            </div>
        </div>
    )
}
export default InfoCustomHooks