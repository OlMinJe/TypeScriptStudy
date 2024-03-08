/**
 * < map, forEach 메서드 타입 정의하기 >
 * 이 두 개의 메서드를 이용하면 타입을 유연하게 이용할 수 있다.
 */

// 1. map 메서드
// 메서드 구조 살펴보기
const arr = [1, 2, 3];
const newArr = arr.map((e) => e * 2);

// function map<T>(arr: T[], callback: (item: T) => T) {
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

// 메서드 사용하기
map(arr, (e) => e * 2);
map(["hi", "hello"], (it) => parseInt(it));
/**
 * error: 'number' 형식은 'string' 형식에 할당할 수 없습니다.
 * 그러나 string 타입의 배열을 인수로 전달한다고 해서
 * map 메서드 결과 값이 반드시 string 타입의 배열이 나올 필요는 없다.
 * 해결: 제너릭 함수 타입을 2개로 작성해야 한다.
 */

// 2. forEach 메서드
// 메서드 구조 살펴보기
const arr2 = [1, 2, 3];
arr2.forEach((e) => console.log(e));

// forEach 문은 반환 X
function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

// 메서드 사용하기
forEach(arr, (it) => {
  console.log(it.toFixed());
});

forEach(["123", "1234"], (it) => {
  console.log(it);
});
