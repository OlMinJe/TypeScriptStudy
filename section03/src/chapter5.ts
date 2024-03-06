/**
 * < 타입 추론 >
 * 타입스크립트는 점진적인 타입 시스템을 통해 타입을 추론한다.
 * 즉, 타입이 정의되어 있지 않은 변수의 타입을 자동으로 추론하는 것이다.
 * 이러한 타입 추론을 활용하면, 효율적인 코드를 작성할 수 있다.
 *
 * < 타입스크립트가 타입 추론이 가능한 상황 >
 * 1. 일반적인 변수를 선언하고 초기화하는 경우(이때, 초기 값을 기준으로 변수를 추론한다.)
 *    - 이때, 변수 'c'와 같이 복잡한 구조인 경우에도 값이 명확하기 때문에 쉽게 추론한다.
 *    - 일반적인 객체를 구조분해할 때도 잘 추론한다.
 * 2. 함수
 *    - 반환값을 기준으로 반환값의 타입을 추론한다.
 *    - 매개변수는 기본값이 설정되어 있을 때 자동으로 타입을 추론한다.
 * ✔ 그냥 마우스 커서를 변수에 올려보면 알 수 있다.
 */
let a = 10;
let b = "string";
let c = {
  id: 1,
  name: "MINJE",
  profile: {
    nickname: "SUNNA",
  },
  urls: ["https://github.com/olminje"],
};
let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];
// 배열도 최대한 맞춰준다.
let arr = [1, "string"];

function func(message = "hello") {
  return "hello";
}

/**
 * < 당황스러운 추론들 >
 * 1. 일반적인 변수에 아무 값도 할당하지 않은 경우에는 any 타입이 된다.
 *  - 만약 number 타입 값을 할당하고 나면, number 타입으로 바뀌기 때문에
 *    원래 any 타입인데도 toUpperCase를 사용할 수 없다.
 *  - 그리고 다른 타입의 값을 할당하고 나면, 해당 타입으로 바뀌기 때문에 toUpperCase를 사용할 수 있다.
 *      => 이렇게 any 타입이 계속 바뀌는 걸 'any 타입의 진화'라고 부른다.
 *      => 암묵적인 any 타입의 진화
 * ※ 암묵적인 any 타입의 진화가 일어나지 않게 타입을 지정하는 것이 가장 바람직하다.
 *
 * 2. const로 선언한 변수는 타입이 초기 값으로 설정된다.
 */
let d;
d = 10;
d.toFixed();
// d.toUpperCase(); // 'number' 형식에는 'toUpperCae'를 사용할 수 없다.

d = "hello";
d.toUpperCase();
// d.toFixed(); // 'string' 형식에는 'toFixed'를 사용할 수 없다.

const num = 10;
const str = "hello";

/**
 * < 타입 넓히기 >
 * 타입 추론시 최대한 공통적인 타입을 맞추는 것을 '타입 넓히기'라고 한다.
 */
