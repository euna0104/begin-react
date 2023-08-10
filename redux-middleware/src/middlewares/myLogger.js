const myLogger = store => next => action => {
    console.log(action);
    const result = next(action); // 다음 미들웨어에게 액션 전달

    console.log('\t', store.getState()); 
    return result; //반환값은 dispatch(action)의 결과물
};

export default myLogger;
