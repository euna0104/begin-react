/* 함수에서 타입 정의하기 */
function sumArray(numbers: number[]): number {
    // 함수의 파라미터로 어떤 타입을 넣어야 하는지 바로 알 수 있다
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);
