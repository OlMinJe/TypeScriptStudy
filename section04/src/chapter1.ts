/**
 * < 함수 타입 표현식 >
 * type 키워드를 이용하여 함수 모양의 타입을 정의한다.
 */

// 이런 코드를 타입 형식으로 만드는 것
// const add = (a: number, b: number): number => a + b;

type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * < 호출 시그니쳐(콜 시그니쳐) >
 * - 함수의 타입을 분리할 때 사용한다.(함수 타입 표현식과 비슷하게 사용된다.)
 * - 차이점은 호출 시그니쳐의 경우 객체 내에 '(매개변수: 타입): 반환타입;'의 형식으로 작성한다.
 */
type Operation2 = {
  (a: number, b: number): number;
  name: string; // 이렇게도 사용이 가능하다.
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2.name; // 이런식으로도 사용이 가능하다.
