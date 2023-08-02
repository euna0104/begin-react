// ducks 패턴 사용. 액션타입, 액션생성함수, 리듀서를 모두 작성

// 액션 타입 선언
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'cunter/INCREASE_BY' as const;

// 액션 생성함수 선언
export const increase = () => ({
    type: INCREASE
});

export const decrease = () => ({
    type: DECREASE
});

export const increase_By = (diff: number) => ({
    type: INCREASE_BY,
    // 액션에 부가적으로 필요한 값을 payload 라는 이름으로 통일
    payload: diff
});

// 모든 액션 객체들에 대한 타입 준비
// ReturnType<typeof____>는 특정 함수의 반환값을 추론해준다
// 상단부에서 액션타입을 선언할때 as const를 하지 않으면 이 부분이 제대로 작동하지 않는다.
type CounterAction =
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>;

// 이 리덕스 모듈에서 관리 할 상태의 '타입'을 선언
type CounterState = {
    count: number;
};

// 초기 상태를 선언한다.
const initialState: CounterState = {
    count: 0
};

// 리듀서 작성
// state와 함수의 반환값이 일치하도록 작성
// 액션에서는 CounterAction을 타입으로 설정
function counter(
    state: CounterState = initialState,
    action: CounterAction
): CounterState {
    switch (action.type) {
        case INCREASE:
            return { count: state.count + 1 };
        case DECREASE:
            return { count: state.count - 1 };
        case INCREASE_BY:
            return { count: state.count + action.payload };
        default:
            return state;
    }
}

export default counter;
