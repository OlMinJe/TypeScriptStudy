/**
 * < keyof 연산자 >
 * 객체의 key의 경우 타입을 정의하기 애매하다.
 * 이때 이 애매함을 해결하기 위해 유니온 타입으로 만들어주는 keyof 키워드를 사용한다.
 *
 * < 주의할 점 >
 * - 무조건 type에만 사용해야 한다.
 */
interface Person {
  name: string;
  age: number;
}

// function getPropertyKey(person: Person, key) {
function getPropertyKey(person: Person, key: keyof Person) {
  /**
   * key의 타입을 Person으로 만들어 준다.
   * -> Person 타입으로 부터 모든 프로퍼티의 키를 union 타입으로 추출된다.
   * -> "name" | "age"의 형식으로 타입이 만들어짐.
   */
  return person[key];
}

const person: Person = {
  name: '민제',
  age: 25,
};

getPropertyKey(person, 'name'); // 민제

/**
 * < keyof 연산자와 typeof 연산자 >
 * 타입스크립트에서 typeof 연산자는 타입을 정의할 때 사용하면 동작이 바뀐다.
 */
// person 변수를 추론하여 타입을 할당한다.
type Person01 = typeof person1;

// 위의 방식을 이용하여 객체가 아닌 변수를 토대로 타입을 할당할 수 있다.
function getPropertyKey1(person: Person, key: keyof typeof person) {
  return person[key];
}

const person1 = {
  name: '민제',
  age: 25,
};

getPropertyKey(person, 'name'); // 민제
