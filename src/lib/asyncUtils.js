// 리덕스 모듈 리팩토링
// Promise에 기반한 Thunk를 만들어주는 함수
export const createPromiseThunk = (type, promiseCreator) => {
    const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    // promiseCreator가 단 하나의 파라미터만 받는다는 전제
    return param => async dispatch => {
        // 요청 시작
        dispatch({ type, param });
        try {
            // 결과물의 이름을 patload로 통일
            const payload = await promiseCreator(param);
            dispatch({ type: SUCCESS, payload }); // 성공
        } catch (e) {
            dispatch({ type: ERROR, payload: e, error: true }); // 실패
        }
    };
};

// 리듀서에서 사용할 수 있는 여러 유틸 함수들
export const reducerUtils = {
    // 초기 상태, 초기 데이터값은 기본적으로 null
    initial: (initialData = null) => ({
        loading: false,
        data:initialData,
        error: null
    }),
    // 로딩중 상태
    loading: (prevState = null) => ({
        loading: true,
        data: prevState,
        error: null
    }),
    // 성공 상태
    success: payload => ({
        loading: false,
        data:payload,
        error: null
    }),
    // 실패 상태
    error: error => ({
        loading: false,
        data: null,
        error: error
    })
};
