// 액션 타입 선언
// as const를 붙여줌으로써 action.type의 값을 추론하는 과정에서 
// string으로 추론되지 않고 'counter/INCREASE'와 같이 실제 문자열 값으로 추론되도록 하기.
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// 액션 생성함수 선언
export const increase = () => ({
    type: INCREASE
});

export const decrease = () => ({
    type: DECREASE
});

export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    // 액션에 부가적으로 필요한 값을 payload 라는 이름으로 통일
    payload: diff
});

// 모든 액션 객체들에 대한 타입 준비
// ReturnType은 특정 함수의 반환값을 추론해준다.
// as const를 잘 작성해주어야 동작한다.
type CounterAction =
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>;

// 리덕스 모듈에서 관리 할 상태의 타입 선언
type CounterState = {
    count: number;
};
// 초기 상태 선언
const initialState: CounterState = {
    count: 0
};

// 리듀서 작성
// state와 함수의 반환값이 일치하도록 작성
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
