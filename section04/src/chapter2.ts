/**
 * < 함수 타입 호환성 >
 * - 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단한다.
 * - 조건
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 조건 (1) 반환값의 타입이 호환되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10; // 20을 반환하면 당연히 오류남

a = b;
b = a; // error: 'number' 형식은 '10' 형식에 할당할 수 없습니다

/**
 * 조건 (2) 매개변수의 타입이 호환되는가?
 * 2-1. 매개변수의 개수가 같을 때
 *  - 매개변수를 기준으로 함수 타입의 호환성을 판단할 때는 업 캐스팅일 때는 안 되고, 다운 캐스팅은 된다.
 *  - 이유:
 *
 * 2-2. 매개변수의 개수가 다를 때
 */

// 호환된다.
type C = (value: number) => void;
type D = (value: number) => void;
// 'c = d'는 호환되지 않는다.
// type C = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d;
d = c;

// ----------------------------------
type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // 업 캐스팅 안 됨.

type Func1 = (a: number, b: nuber) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; // 'Func1' 형식은 'Func2' 형식에 할당할 수 없다.
