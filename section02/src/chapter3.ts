// 객체

// let user: object = { id: 1, name: 'MINJE' };
// user.id; // 객체의 프로퍼티에 접근하려면 오류가 난다.

/**
 * 오류 메시지: 'object' 형식에 'id' 속성이 없습니다.
 * 이유: 타입스크립트에서 object는 객체로만 선언한다고 하는거지, 그 안에 있는 내용은 모르기 때문이다.
 * 해결: object 타입이 아닌 객체 리터럴 타입을 사용한다.
 */

// 객체 리터럴 타입 사용
let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'MINJE',
};

user.id;

/**
 * Q. 왜 이런 과정을 거치는 걸까?
 * A. 타입스크립트는 구조를 기반으로 타입을 정의하기 때문이다.
 *    이러한 특징을 '구조적 타입 시스템'이라고 한다.
 * <=> 반대로 이름을 기반으로 타입을 정의하는 건 '명목적 타입 시스템'이다.
 */

/**
 * Q. 만약 'id'를 선택적으로 추가한다면 어떻게 해야할까?
 * A. 프로퍼티에 '?'를 추가한다. 이러한 프로퍼티를 선택적 프로퍼티(optional property)라고 한다.
 */
let user1: {
  id?: number;
  name: string;
} = {
  id: 101,
  name: "MINJE'S",
};

user1 = {
  name: 'SUNWOO',
};

/**
 * Q. 변경하면 안되는 값일 경우에는?
 * A. 'readonly' 속성을 추가해준다.
 */
let config: {
  readonly apiKey: string;
} = {
  apiKey: 'MYAPIKEY',
};

// config.apiKey = '바꿔보기'; // 읽기 전용 속성이므로 'apiKey'에 할당할 수 없다는 오류가 발생
