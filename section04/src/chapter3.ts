/**
 * < 함수 오버로딩 >
 * 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법이다.
 * 참고로 JS에서는 지원하지 않고, TS에서만 지원한다.
 */

/**
 * 오버로드 시그니쳐
 * - 함수의 여러 버전들
 * - 함수를 오버로딩하기 위해서 각각 매개변수 별로 다른 버전 명시하기.
 * - 이때, 구현 시그니쳐를 작성하면 오류가 사라진다.
 */
function func(a: number): void;
function func(a: number, b: number, c: number): void;

/**
 * < 실제 구현부(= 구현 시그니쳐) >
 * 원래는 매개변수를 정의해줘야 하지만 안해도 잘 된다는 걸 알아두자!
 *
 */

// [정상] 밑의 함수와 중복 함수로 오류남.
// function func() {}

// [정상] 기본적인 것
// function func(a: number, b: number) {}

// [비정상] 오버로드 시그니처와 구현 시그니처가 호환되지 않는다.
// function func(a: number, b: number, c: number) {
//   a.toFixed();
// }

// [정상] 매개변수의 개수의 차이가 있는 경우 최대한 선택적 프로퍼티로 정의해서, 모든 매개변수들이 의미있도록 만들어준다.
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") console.log(a + b + c);
  else console.log((a *= 20));
}

func(1);
func(1, 2, 3);
