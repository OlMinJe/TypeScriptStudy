/**
 * < 타입 변수 응용하기 >
 */

// 1-1. 타입이 하나인 경우
function swap01<T>(a: T, b: T) {
  return [b, a];
}

const [a1, b1] = swap01(1, 2);

// 1-2. 타입이 두 개인 경우
function swap02<T, U>(a: T, b: U) {
  return [b, a];
}


// 2-1. 타입이 배열인 경우
function returnFirstValue<T>(data: T[]) {
  /**
   * error: '0' 형식의 식을 'unknown' 인덱스 형식에 사용할 수 없으므로 요소에 암시적으로 'any' 형식이 있습니다.
   * 이유: 타입 변수를 사용하면 함수 내부에서는 아직 이 타입 변수 T에 할당될 타입이 뭔지 몰라서
   *      혹시모를 오류를 방지하기 위해 'unknown' 타입으로 선언한다.
   */
  return data[0];
}
let num = returnFirstValue([0, 1, 2]);
let str = returnFirstValue(["hello", "ㅎㅎ"]);

/**
 * 2-2. 여러 가지 타입인 배열
 * 튜플 형식으로 작성한다. 이때 두 번쨰 요소의 타입을 '...unknown[]'으로 작성한다
 * => 어떤 타입이며, 몇 개의 데이터를 가져올지 모르기 때문에 rest parameter를 이용한다.
 */
function returnFirstValue1<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let str1 = returnFirstValue1([1, "hello", "ㅎㅎ"]);

// 3. 길이를 구할 수 있는 값만 받아보기(배열, 객체)
function getLength<T extends { length: number }>(data: T) {
  /**
   * Q. 위의 형식은 무슨 의미인지
   * A. number 타입의 length라는 프로퍼티를 가지고 있는 객체를 확장하는 타입으로 T를 제한한다.
   */
  return data.length;
}
let var1 = getLength([1, 2, 3]); // length 프로퍼티가 존재하는 String 타입의 값을 전달
let var2 = getLength("12345"); // length 프로퍼티가 존재하는 Number[] 타입의 값을 전달
let var3 = getLength({ length: 10 }); // length 프로퍼티가 존재하는 객체 타입의 값을 전달
// let var4 = getLength(10);            // 인수로 10을 전달했으므로 오류
