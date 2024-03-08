/**
 * < 인터페이스 >
 * - 타입에 이름을 지어주는 또 다른 문법이다.
 * - 인터페이스는 객체의 구조를 정의한느데 특화된 문법으로 상속, 합침 등의 특수한 기능을 제공한다.
 *
 * < 인터페이스와 타입 키워드의 차이점 >
 * - 인터페이스는 union(|)/intersection 타입을 만들 수 없다.
 *  => 해당 인터페이스를 타입으로 적용한 객체나 type 등에서는 인터페이스를 union(|)/intersection으로 사용할 수 있다.
 */

interface Person {
  // 읽기 전용 프로퍼티도 사용할 수 있다.
  readonly name: string;
  // 선택적 프로퍼티도 사용할 수 있다.
  age?: number;
  // 메서드 정의를 'sayHi: () => void;'이렇게 할 수 있지만, 호출 시그니처 형식으로도 사용이 가능하다.
  sayHi(): void;
  /**
   *  < 함수 오버로딩 구현 >
   * - 함수 타입 표현식이 아닌 호출 시그니쳐를 이용해야 한다.
   */
  sayHi(a: number, b: number): void;
} // 이 뒤에 union(|)/intersection 타입 허용 X

const person: Person = {
  name: "MINJE",
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();
