let count = 0; // num
count += 1;
count = '문자열' // error

const message: string = 'hello world' // string

const done: boolean = true; // boolean

const numbers: number[] = [1, 2, 3]; // num array
const messages: string[] = ['hello', 'world'] // string array

messages.push(1); // error

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있음
let nullableNumber: number | null = null; // number 일수도 있고 null 일 수도 있음

let color: 'red' | 'yellow' | 'orange' = 'red'; // red, orange, yellow 중 하나임
color = 'yellow';
color = 'green'; // error
