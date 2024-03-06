/**
 * < 열거형 타입(Enumerable Type) >
 * 여러 가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입이다.
 * Q. enum 타입은 왜 필요한가?
 * A. 관리자 같은 중요한 속성에 값을 설정할 때, 실수할 수 있는 걸 방지하기 위해 사용한다.
 *
 * < 숫자형 enum >
 * 숫자를 자동으로 할당되게 하거나 직접 부여하여 사용할 수 있다. (기본값 0, +1씩 증가한다.)
 * 참고로 직접 부여한 값이 101이라면 그 다음 프로퍼티는 102라는 값을 가지게 된다.
 *
 * < 문자형 enum >
 * 헷갈리는 값에 사용하면 좋다.
 */
enum Role {
  ADMIN = 0, // 관리자
  USER = 1, // 유저
  GUEST = 2, // 게스트
}
enum Language {
  korean = 'ko',
  english = 'en',
}

const user101 = {
  name: 'MIN',
  role: Role.ADMIN,
  language: Language.korean,
};
const user102 = {
  name: 'JE',
  role: Role.USER,
};
const user103 = {
  name: 'LEE',
  role: Role.GUEST,
};

console.log(user101, user102, user103);
// { name: 'MIN', role: 0, language: 'ko' } { name: 'JE', role: 1 } { name: 'LEE', role: 2 }

/**
 * < 중요 >
 * enum으로 정의한 타입은 컴파일 이후에도 사라지지 않는다.
 * 이러한 특징으로 인해 객체와 달리 값으로 사용할 수 있다.
 */
