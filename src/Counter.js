import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(5); // 상태의 기본값은 0

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1); // prevNumber는 useState 함수를 개발한 개발자가 정한거임.
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;