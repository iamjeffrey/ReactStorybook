import { useReducer } from 'react'

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}

export default function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm)
    const onChange = e => {
        //e.target.name을 참조해서 setState
        dispatch(e.target)
    }
    return [state, onChange]
}