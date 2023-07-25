import React from 'react';

type GreetingsProps = {
    name: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name }) => (
    // props 의 타입을 Generics 로 넣어서 사용
    <div>Hello, {name}</div>
);

export default Greetings;
