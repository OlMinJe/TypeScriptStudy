/**
 * < infer - 조건부 타입 내에서 타입 추론하기 >
 * 단, infer에 오는 값이 슈퍼 타입이 될 수 없는 경우 false이다.
 */
type FuncA = () => string; // () => R
type FuncB = () => number;

type ReturnType<T> = T extends () => string ? string : never;

// string 타입으로 반환된다.
type A = ReturnType<FuncA>;

// 반환값이 number일거라 생각했지만 string 타입으로 반환된다.
type B = ReturnType<FuncB>;

type ReturnType1<T> = T extends () => infer R ? R : never;
type A1 = ReturnType1<FuncA>; // string으로 반환된다.
type B1 = ReturnType1<FuncB>; // number로 반환된다.

// never 타입으로 반환한다. => '() => R'이 number 타입의 슈퍼 타입으로 될 수 없기 떄문이다.
type C1 = ReturnType1<number>;

/**
 * 예제 살펴보기
 */
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
/**
 * < 조건 >
 * 1. T는 프로미스 타입이어야 한다.
 * 2. 프로미스 타입의 결과값 타입을 반환해야 한다.
 */

type PromiseA = PromiseUnpack<Promise<number>>; // 예상: number
type PromiseB = PromiseUnpack<Promise<string>>; // 예상: string
