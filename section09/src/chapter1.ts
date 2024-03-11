/**
 * < 분산적인 조건부 타입 >
 * 조건부 타입을 유니온과 함께 사용할 때, 조건부 타입이 분산적으로 사용될 수 있게 하는 것이다.
 */
type StringNumberSwitch<T> = T extends number ? string : number;

// 만약 조건부 타입이 분산적으로 작동하지 않게 하고 싶다면, 밑의 형식처럼 작성하면 된다.
type StringNumberSwitch1<T> = T extends [number] ? string : number;
let d1: StringNumberSwitch1<boolean | number | string>;

let a: StringNumberSwitch<Number>;
let b: StringNumberSwitch<string>;
let c: StringNumberSwitch<number | string>;
// 한 번은 number 한 번은 string으로 분리되어 인식하기 떄문에 분산적으로 결과를 가져올 수 있다.

let d: StringNumberSwitch<boolean | number | string>;
/**
 * < 1단계 >
 * StringNumberSwitch<boolean> |
 * StringNumberSwitch<number> |
 * StringNumberSwitch<string> |
 *
 * < 2단계 >
 * number |
 * string |
 * number
 *
 * < 결과 >
 * number | string
 */

/**
 * 분산적인 조건부 타입을 이용하여 유니온 타입에서 특정 타입 제외하기
 */
type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>;
/**
 * < 1단계 >
 * Exclude<number, string>
 * Exclude<string, string>
 * Exclude<boolean, string>
 *
 * < 2단계 >
 * number |
 * never |
 * boolean |
 *
 * < 결과 >
 * number | never | boolean
 * => never는 공집합이기 때문에 다른 집합과 합치면 사라진다.
 */

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
/**
 * < 1단계 >
 * Extract<number, string>
 * Extract<string, string>
 * Extract<boolean, string>
 *
 * < 2단계 >
 * never |
 * string |
 * never |
 *
 * < 결과 >
 * never | string
 * => string
 */
