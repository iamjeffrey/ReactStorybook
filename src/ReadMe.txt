//reducer와 useEffect
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_TICK": {
            return {
               ...state,
               count: 0,
               tick: action.tick
            };
        }
        case "ADD_COUNT": {
            return {
                ...state,
                count: state.count + 1
            };
        }
        default:
            return state;
    }
};

const Counter = () => {
    const [ state, dispatch ] = useReducer(reducer, { tick: 1000, count: 0 });

    const handleOnChangeTick = (e) => {
        dispatch({ type: "SET_TICK", tick: parseInt(e.target.value) });
    };

    useEffect(
        () => {
            const time = setInterval(() => {
                dispatch({ type: "ADD_COUNT" });
            }, state.tick);

            return () => clearInterval(time);
        },
        [ state.tick ]
    );

    return (
        <div>
            <p>{state.count}</p>
            <input value={state.tick} onChange={handleOnChangeTick} />
        </div>
    );
}

//submit : button 이벤트로 하지 않고 form에 onSubmit 이벤트를 사용하면
//         "엔터"키를 입력했을 때도 발생하기 때문에 "엔터"키 처리 필요 없음
const onSubmit = useCallback( e => {
    onInsert(value)
    setValue('')

    e.preventDefault() //새로 고침 방지
}, [onInsert, value])
<form onSubmit={onSubmit}>...</form>

//배열 추가 concat
/*
    const onInsert = useCallback(text => {
        const todo = { text }
        setTodos(todos.concat(todo))
    }, [todos])
*/

//============================================
//성능 최적화를 위해서 useState의 함수형 업데이트 사용
//위 처럼 useCallback을 사용할 때 두번째 파라미터에 배열을 넣지 않아도 된다.
//============================================
const onInsert = useCallback(text => {
    const todo = { text }
    setTodos(todos => todos.concat(todo))
}, [])

//filter로 배열에서 항목 삭제
const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
}, [])

//map 특정 값만 바꾸기
const onToggle = useCallback(id => {
    setTodos(
        //특정 원소만 업데이트
        todos.map(
            todo => todo.id === id ? {...todo, checked: !todo.checked} : todo
        )
    )
}, [todos])