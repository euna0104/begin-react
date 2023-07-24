"use strict";
/* 함수에서 타입 정의하기 */
function sumArray(numbers) {
    // 함수의 파라미터로 어떤 타입을 넣어야 하는지 바로 알 수 있다
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
