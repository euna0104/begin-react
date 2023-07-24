"use strict";
/*
Type Alias 사용하기
type 은 특정 타입에 별칭을 붙이는 용도로 사용한다. 이를 사용하여 객체를 위한
타입을 설정할 수도 있고, 배열, 또는 그 어떤 타입이던 별칭을 지어줄 수 있다
*/
var person = {
    name: '홍길동'
};
var expert = {
    name: '박영희',
    skills: ['javascript', 'react']
};
var people = [person, expert];
var color = 'red';
var colors = ['red', 'orange'];
