/**
 * < Any 타입 >
 * 특정 변수의 타입을 확신할 수 없을 때 혹은 모를 때 사용한다.
 * 모든 타입을 대신하여 사용하기 때문에, 메서드를 자유롭게 사용할 수 있다.
 * 모든 타입에 할당할 수 있다.
 */

let anyVar: any = 'hello';
let num: number = 10;
num = anyVar; // 타입 오류가 발생하지 않는다.

/**
 * < 단점 >
 * 밑의 코드와 같이 함수에 사용할 수 없는 메서드인데, 오류로 인식이 안 된다.
 * Q. 그렇다면 오류는 언제 발생할까?
 * A. 런타임 시 발생한다.
 */
anyVar = () => {};
// anyVar.toUpperCase();

/**
 * < Unknwon 타입 >
 * any 타입과 비슷하지만 더 안전하게 사용이 가능하다.
 * < 차이점 >
 * 1. 타입이 지정된 변수에 값으로 할당할 수 없다.
 * 2. toUpperCase()와 같은 메서드를 사용할 수 없다.
 * 3. 사칙 연산이 불가능하다.
 *
 * 단, 이러한 차이점을 이겨내고 any 타입처럼 할당하고 싶은 경우에는 '타입 정제'를 이용한다.
 *
 */
let unknownVar: unknown;
unknownVar = '';
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; // error
// < 타입 정제 하기 >
if (typeof unknownVar === 'number') {
  num = unknownVar;
  unknownVar.toUpperCase();
}
