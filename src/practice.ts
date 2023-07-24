/* 
Type Alias 사용하기
type 은 특정 타입에 별칭을 붙이는 용도로 사용한다. 이를 사용하여 객체를 위한
타입을 설정할 수도 있고, 배열, 또는 그 어떤 타입이던 별칭을 지어줄 수 있다
*/

type Person = {
    name: string;
    age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값
};

// &은 Intersection 으로서 두개 이상의 타입들을 합쳐준다.
type Developer = Person & {
    skills: string[];
}

const person: Person = {
    name: '홍길동'
};

const expert: Developer = {
    name: '박영희',
    skills: ['javascript', 'react']
};

type People = Person[]; // Person[]을 앞으로 Peaple 이라는 타입으로 사용할 수 있다.
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];
