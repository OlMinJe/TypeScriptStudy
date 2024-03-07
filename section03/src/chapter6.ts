// < 타입 단언(Type Assertion) >
type Person = {
  name: string;
  age: number;
};

/**
 * 1. person 변수의 타입으로 Person을 지정.
 * 2. 초기화 값으로 빈 객체를 할당
 * => error : '{}' 형식에 'Person' 형식의 name, age 속성이 없습니다.
 * => 원인 : person 변수가 빈 객체를 기준으로 초기화 값을 잡는다.
 */

// let person: Person = {};
// person.name = "이정환";
// person.age = 27;

/**
 * person 변수를 Person 타입으로 만들고, 초기값을 빈 객체로 할당하기 위해서 어떻게 해야할까?
 * => 해결: 변수 뒤가 아닌, 값 뒤에 as 키워드를 사용하여 type을 명시한다.
 * - 이렇게 개발자가 직접 타입을 단언하는 것을 '타입 단언'이라고 말한다.
 * - '타입 단언'은 '값 as 타입'으로 특정 값을 원하는 타입으로 단언할 수 있는 걸 의미한다.
 *
 */
let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

// -------------------------------------------------------------------------------

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  bread: "진도",
  // }; // error
} as Dog;

/**
 * < 타입 단언의 규칙 >
 * '값(A) as 단언(B)' 형식에서 (1)A가 B의 슈퍼타입이거나 (2)A가 B의 서브타입어야 한다.
 */

// (1)번 규칙 만족
let num1 = 10 as never;
// (2)번 규칙 만족
let num2 = 10 as unknown;
// 규칙 불만족으로 error: 'number' 형식을 'string' 형식으로 변환한 작업은 실수일 수 있다.
// let num3 = 10 as string;

/**
 * < 다중 단언 >
 * 10 as unknwon으로 단언된 후, unknwon as string으로 단언하면 오류가 발생하지 않는다.
 * 중간에 unknwon을 넣으면 어찌어찌 된다.
 * 알아놓으면 좋긴한데 사용하지 말기..
 */
let num3 = 10 as unknown as string;

/**
 * < const 단언 >
 * 변수를 선언했을 때, const로 선언한 거와 같이 사용할 수 있다.
 * 특히 객체 타입과 사용할 때 활용도가 있는 편이다.
 * as const를 붙인 객체는 'readonly' 속성으로 변한다.
 */
let num4 = 10 as const;
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

/**
 * < Non Null 단언 >
 * '!' 키워드를 사용하며, 이 키워드를 사용한 값은 null 혹은 undefined가 아니라고 믿게 만든다.
 * 이러한 특징으로 타입스크립트는 이 값을 string으로 인식하게 된다.
 */
type Post = {
  type: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "MINJE",
};

/**
 * < ? 키워드 >
 * 옵셔널체이닝으로, 해당 프로퍼티의의 값이 null이거나 undefined인 경우
 * 값 전체를 undefined로 만들어주는 연산자이다.
 *
 * 해결: Non null 단언 연산자를 사용한다.
 */
// const len: number = post.author?.length;

// string 타입으로 인식하여, 문자열의 길이를 구하게 된다.
const len: number = post.author!.length;
