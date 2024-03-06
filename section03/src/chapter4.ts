/**
 * < 대수 타입 >
 * 여러 개의 타입을 합성해서 새롭게 만들어낸 타입이다.
 * 이러한 대수 타입에는 합집합 타입과 교집합 타입이 존재한다.
 * 1. 합집합 - union 타입
 * 타입 사이에 '|'를 넣어준다. 이때 타입의 개수는 상관 없이 계속 추가할 수 있다.
 */

// 1-1. 기본 타입의 union
let a: string | number;
a = 1;
a = "hello";

let arr: (number | string | boolean)[] = [1, "hello", true];

/**
 * 1-2. 객체 타입의 union
 * type 별칭을 이용해서 union 타입을 만들 수 있다.
 */
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union = Dog | Person;
// (1) Dog 타입에 해당하는 값 넣어보기
let union1: Union = {
  name: "Jake",
  color: "yellow",
};
// (2) Person 타입에 해당하는 값 넣어보기
let union2: Union = {
  name: "Jake",
  language: "ko",
};
//  (3) Dog와 Person 타입에서 모두 해당하는 값 넣어보기
let union3: Union = {
  name: "Jake",
  color: "yellow",
  language: "ko",
};
// (4) Dog와 Person 타입에서 공통으로 해당하는 값 넣어보기 -> error
// let union4: Union = {
//   name: "Jake",
// };
/**
 * < error 원인 >
 * 두 타입은 누군가의 슈퍼/서브 타입이 아니기 때문이다.
 *  (1)번 - Union1 타입 내에서 Dog 타입에 해당된다.
 *  (2)번 - Union1 타입 내에서 Person 타입에 해당된다.
 *  (3)번 - Union1 타입 내에서 Dog 타입과 Person 타입에 해당된다. => 합집합
 *          (union 타입에서 합집합은 허용된다.)
 *  (4)번 - Union1 타입 내에서 Dog 타입과 Person 타입에 해당되지 않기 때문에 error가 발생한다. => 차집합
 *          (union 타입에서 차집합은 허용되지 않는다.)
 */

/** -------------------------------------------------------------------------------------------------------
 * 2. 교집합 - Intersection 타입
 * 타입 사이에 '&'를 넣어준다. 이때 타입의 개수는 상관 없이 계속 추가할 수 있다.
 * 기본 타입에서는 never 타입으로 바뀌기 때문에 주로 객체 타입에서 사용한다.
 * 객체를 Intersecion 타입으로 만들면, 초기화할 때 해당하는 객체의 프로퍼티를 모두 작성해줘야 한다.
 */

let variable: number & string;
/**
 * 위 코드는 'let variable: never'로 만들어진다.
 * 이유: number와 string를 AND 연산하면 공집합(=불가능한 타입)이기 때문이다.
 */
type Cat = {
  name: string;
  color: string;
};

type Person02 = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};
