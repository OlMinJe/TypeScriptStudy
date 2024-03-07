/**
 * < 타입 좁히기 >
 * 조건문 등을 이용하여 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 것을 의미한다.
 */

function func(value: number | string) {
  // value.toFixed; // error: 'string | number' 형식에 'toFixed' 속성이 없습니다.
  // value.toUpperCase(); // error: 'string | number' 형식에 'toUpperCase' 속성이 없습니다.
  /**
   * 위의 에러는 '타입 좁히기' 기능 때문에 발생함.
   * Q. 위의 코드와 다르게 밑의 코드가 실행되는 이유는?
   * A. 어떤 변수가 특정 조건문을 통과하여 더 좁은 타입임을 보장한다면,
   *    타입스크립트는 이 변수를 더 좁은 타입으로 자동 추론해준다.
   *    이때, 타입을 좁히기 위한 조건문을 '타입 가드'라고 말한다.
   */

  if (typeof value === "number") value.toFixed;
  else if (typeof value === "string") value.toUpperCase();
}

/**
 * < 여러 가지의 타입 가드 >
 * Date 타입 등을 타입 가드로 구별하기 위해, 타입을 "object"로 설정하는 경우에는 조심해야 한다.
 * 이유: 함수의 매개변수로 null도 허용한다고 가정하고 밑의 코드를 살펴보자.
 *      'typeof value === "object"'에서 null 값을 통과시키기 때문에,
 *      타입 가드를 통해 넘어온 값이 Date 타입임을 보장할 수 없다.
 * 해결: 'instanceof' 키워드를 사용한다.
 *
 * < instanceof 키워드 >
 * '값 instanceof 타입'의 형식으로 사용하며, true/false를 반환한다.
 * 왼쪽의 값이 타입의 객체인지를 판단하는 걸 의미한다.
 */

function func1(value: number | string | Date | null) {
  if (typeof value === "number") value.toFixed;
  else if (typeof value === "string") value.toUpperCase();
  // else if (typeof value === "object") value.getTime(); // error: 'value'는 'null'일 수 없다.
  else if (value instanceof Date) value.getTime();
}

/**
 * < in 타입 가드 >
 *
 */

type Person = {
  name: string;
  age: number;
};

function func2(value: number | string | Date | null | Person) {
  if (typeof value === "number") value.toFixed;
  else if (typeof value === "string") value.toUpperCase();
  else if (value instanceof Date) value.getTime();
  // else if (value instanceof Person) value;
  else if (value && "age" in value) console.log(`${value.name} 입니다.`);
  /**
   * error: 'Person'은 형식만 참조하지만, 여기서는 값으로 사용되고 있습니다.
   * 이유: instance 연산자에서 값은 오른쪽 클래스의 instance인지 호가인하는 연산자이다.
   *      위의 Date는 자바스크립트 내장 객체이기에 사용할 수 있었지만,
   *      위의 코드는 클래스가 아닌 객체이기 때문에 오류가 발생함.
   * 해결: 객체에는 'in' 연산자를 사용하여 타입 가드를 진행한다.
   *      '값 in 객체'는 객체 안에 값이 있는지 판단한다.
   * error: 'value'는 'null'일 수 있다.
   * 이유: value의 타입으로 들어올 수 있는 값에서 null이 존재하기 때문이다.
   * 해결: 'value && "값" in value'의 형식으로 적는다.
   *      앞에 value를 넣어 value가 있을 때에만 실행되도록 한다.
   * => JavaScript에서는 null과 undefined가 모두 "falsy" 값으로 간주되므로,
   *    이 체크를 통해 value가 유효한 객체인지 확인한다.
   */
}
