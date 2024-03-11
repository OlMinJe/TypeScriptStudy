/**
 * < 조건부 타입 >
 * 삼항 연산자를 이용하여 타입을 결정한다.
 */

// number extends string => string 타입을 확장하는 타입이 number인 경우 참이면 string 타입 거짓이면 number 타입
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * < 제네릭과 조건부 타입 >
 */
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string 타입으로 정의된다
let varB: StringNumberSwitch<String>; // number 타입으로 정의된다.

// function removeSpaces(text: string | undefined | null) {
function removeSpaces<T>(text: T): T extends string ? string : number; // 함수 오버로딩
function removeSpaces(text: any) {
  /**
   * 조건문을 이용하여 타입 좁히기를 할 수 있지만, result 변수에 할당되는 타입은 string 혹은 undefined로 잡힌다.
   * => 제네릭 함수로 만들고, 반환값의 타입에 조건부 타입을 이용한다.
   * => 들어오는 값은 알 수 없음 => 타입 단언으로 해결해야 한다.
   */
  if (typeof text === 'string') return text.replaceAll(' ', '') as any;
  else return undefined as any;
  // any가 아쉬우면 함수 오버로딩을 진행한다. -> 반환되는 변수의 타입이 any가 아닌 각 값에 알맞은 타입으로 변한다.
}

let result = removeSpaces('hi im minje');
result.toUpperCase();
let result2 = removeSpaces(undefined);
