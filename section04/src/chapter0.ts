/**
 * < 함수 타입 정의 >
 * Q. 함수를 설명하는 가장 좋은 방법은 무엇이 있을까?
 * A. 어떤 [타입] 매개변수를 받고, 어떤 [타입] 결과값을 반환하는지 이야기하면 된다.
 */

function func(a: number, b: number): number {
  return a * b;
}

/**
 * < 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number): number => a + b;

/**
 * < 함수의 매개변수 >
 * 선택적 매개변수는 필수 매개변수의 앞에 와서는 안 된다.
 * 필수 매개변수에 타입이 아닌 기본값을 할당하면, 선택적 매개변수로 바꿀 수 없는 거 같음.
 */
function introduce(name = "MINJE", tall?: number) {
  console.log(`name: ${name}`);
  console.log(`tall: ${tall}`);
  //   console.log(`tall: ${tall + 10}`); // 연산이 안 되는 이유는 tall의 값은 있을수도 있고 없을수도 있는 불완전하기 때문이다
  if (typeof tall === "number") console.log(`tall: ${tall + 10}`);
}

introduce("MINJE", 163);
introduce("MINJE");

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((e) => (sum += e));

  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);

//  튜플 타입으로 풀어보자
function getSum1(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((e) => (sum += e));

  return sum;
}

// getSum1(1, 2, 3);
// getSum1(1, 2, 3, 4, 5); // 3개의 인수가 필요한데 5개를 가져왔습니다.
