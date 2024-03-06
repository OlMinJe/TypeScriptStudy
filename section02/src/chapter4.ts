/**
 * < 타입 별칭(Type Ailas) >
 * 공통적인 부분이 많아지는 경우에는 'type' 키워드를 사용하여 공통 타입을 만든다.
 * 컴파일 이후에 타입으로 선언한 부분은 완전히 제거된다.
 * - 주의사항 -
 * 같은 스코프 내에서 별칭이 중복되지 않게 주의해야 한다.
 */

type user = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  location: string;
};

let user01: user = {
  id: 1,
  name: 'LEEMINJE',
  nickname: 'SUNNA',
  birth: '2000.02.29',
  location: '경기도',
};
let user02: user = {
  id: 2,
  name: 'HONG',
  nickname: '어르신',
  birth: '0000.00.00',
  location: '경기도',
};

/**
 * < 인덱스 시그니처(Index Signature) >
 * 객체 타입의 정의를 더 유연하게 하도록 도와준다.
 * Q. 어떤 상황에서 필요한가?
 * A. 규칙적인 타입을 갖는 프로퍼티가 수백 개일 때 사용한다.
 * - 주의사항 -
 * 인덱스 시그니처는 규칙을 위반하지 않으면 빈 객체여도 error가 발생하지 않는다.
 */
// type CountryCodes = {
//   Korea: string;
//   UnitedState: string;
//   UnitedKingdom: string;
// };
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type ContryNumberCodes = {
  [key: string]: number;
  /**
   * 빈 값을 넣기 싫을 때는 아래와 같이 프로퍼티를 추가하면 된다.
   * 이때, 추가적인 프로퍼티의 타입은 꼭 인덱스 시그니처와 동일해야 한다.
   */
  Korea: number;
};

let contryNumberCodes: ContryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
