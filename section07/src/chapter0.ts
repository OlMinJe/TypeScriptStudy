/**
 * < 제네릭 >
 * 제네릭은 일반적인/포괄적인 함수이다.
 * 제네릭을 사용하여 함수의 반환값을 가변적으로 지정할 수 있다.
 * '함수명<타입_변수>(value: 타입_변수)'의 형식으로 작성해준다.
 */

function func<T>(value: T): T {
  return value;
}

let num = func(10);
let bool = func(true);
let str = func("string");
let arr = func([1, 2, 3]);
/**
 * 튜플 타입으로 추론되게 하고 싶다
 * => 타입 단언 사용
 * => 제네릭 사용
 */
// let arr1 = func([1, 2, 3] as [number, number, number]);
let arr1 = func<[number, number, number]>([1, 2, 3]);
