import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy } from '../modules/counter';
import Counter from '../components/Counter';

function CounterContainer() {
    // 상태 조회. 상태 조회할 때 state의 타입을 RootState로 지정
    // count 값의 타입은 useSelector 가 유추해줌
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch(); // 디스패치 함수 가져오기

    // 각 액션들을 디스패치하는 함수들 만들기
    const onIncrease = () => {
        dispatch(increase());
    };

    const onDecrease = () => {
        dispatch(decrease());
    };

    const onIncreaseBy = (diff: number) => {
        dispatch(increaseBy(diff));
    };

    return (
        <Counter
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={onIncreaseBy}
        />
    );
};

export default CounterContainer;
