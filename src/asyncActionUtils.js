//파라미터로 액션의 타입과 Promise를 만들어주는 함수를 받아온다.
export function createAsyncDispatcher(type, promiseFn) {
    // 성공, 실패에 대한 액션 타입 문자열을 준비한다.
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;

    //새로운 함수를 만든다
    //...rest를 사용하여 나머지 파라미터를 rest 배열에 담는다
    async function actionHandler(dispatch, ...rest) {
        dispatch({ type }); //요청 시작
        try {
            const data = await promiseFn(...rest); //rest 배열을 spread로 넣어준다.
            dispatch({
                type: SUCCESS,
                data
            });
        } catch (e) {
            dispatch({
                type: ERROR,
                error: e
            });
        }
    }
    return actionHandler; //만든 함수 반환
}

export const initialAsyncState = {
  loading: false,
  data: null,
  error: null
};

export const loadingState = {
    loading: true,
    data: null,
    error: null
};

//성공했을 때의 상태 만들어주는 함수
export const success = data => ({
    loading: false,
    data,
    error: null
});

//실패했을 때의 상태 만들어주는 함수
export const error = error => ({
    loading: false,
    data: null,
    error
});

// 세가지 액션을 처리하는 리듀서를 만들어준다.
// type은 action 타입, key는 리듀서에서 사용할 필드 이름이다 (users, user)
export function createAsyncHandler(type, key) {
    // 성공, 실패에 대한 액션 타입 문자열을 준비한다.
    const SUCCESS = `${type}_SUCCESS`;
    const ERROR = `${type}_ERROR`;

    function handler(state, action) {
        switch (action.type) {
            case type:
                return {
                    ...state,
                    [key]: loadingState
                };
            case SUCCESS:
                return {
                    ...state,
                    [key]: success(action.data)
                };
            case ERROR:
                return {
                    ...state,
                    [key]: error(action.error)
                };
            default:
                return state;
        }

    }
    return handler; //반환
}
