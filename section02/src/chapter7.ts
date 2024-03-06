/**
 * < void 타입 함수>
 * 아무것도 없음을 의미하는 타입이다.
 */

// 문자열을 반환하는 함수
function func1(): string {
  return 'hello';
}

// 값을 반환하지 않는 함수
function func2(): void {
  console.log('hello1');
}

/**
 * < void 타입 변수 >
 * void 타입 변수에는 값을 할당할 수 없다.
 * 그러나 tsconfig.json 파일 내에서 "strictNullChecks"의 값을 "false"로 설정하면,
 * 예외적으로 null을 넣을 수 있다.
 */
let a: void;
// a = 1;
// a = 'hello';
// a = {};
a = null;

/**
 * Q. 그렇다면 왜 void 타입을 사용하는 걸까?
 * A. 함수의 결과를 반환하고 싶지 않을 때, 반환 타입으로 undefined이나 null을 넣으면
 *    마지막 코드에 return문을 작성해야 하는 번거로움이 있기 때문에 사용하게 되었다.
 */
function func3(): undefined {
  console.log('hello2');
  return;
}
function func4(): undefined {
  console.log('hello3');
  return null;
}

/**
 * < never 함수 타입 >
 * 존재하지 않는 혹은 불가능한 타입을 의미한다.
 * 밑의 코드는 함수가 종료되지 않아 반환을 할 수 없지만, 반환을 하지 않는다고 설정해놨다.
 * 이러한 모순이 발생하는 걸 방지하기 위해 never 타입을 사용한다.
 */

// function func5(): void {
//   while (true) {}
// }

function func6(): void {
  while (true) {}
}

function func7(): never {
  throw new Error();
}

/**
 * < never 변수 타입 >
 * void 타입과 다르게 그 어떠한 값도 저장할 수 없다.
 * (null 값/undefiend 값/any 타입의 값도 담을 수 없다.)
 */

let a: never;
