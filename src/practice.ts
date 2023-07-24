/* 일반 객체를 interface 로 타입 설정하기 */
interface Person {
    name: string;
    age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값
}
interface Developer extends Person {
    skills: string[];
}

const person: Person = {
    name: '홍길동',
    age: 20
};

const expert: Developer = {
    name: '박영희',
    skills: ['javascript', 'react']
};

const people: Person[] = [person, expert]; // 배열로 선언
