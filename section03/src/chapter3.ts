/**
 * < 객체 타입의 호환성 >
 * 객체 타입은 프로퍼티를 기준으로 슈퍼 타입과 서브 타입을 결정한다.
 * 밑의 코드에서는 'Animal' 객체가 슈퍼 타입이다.
 * Q. 'Dog'의 프로퍼티가 많은데 왜 'Animal'이 슈퍼 타입인가?
 * A. 'Dog' 객체가 슈퍼 타입인 경우, 'Animal' 객체는 'bread'라는 프로퍼티를 갖고 있지 않기 때문에 오류가 발생한다.
 *    이러한 것처럼 추가 프로퍼티가 없는 객체가 슈퍼 타입이 된다.
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  bread: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brwon",
  bread: "진도",
};

// 업캐스팅 가능
animal = dog;
// 다운캐스팅 불가능
// dog = animal;

// ----------------------------
type Book = {
  name: string;
  price: number;
};
type ProgramingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programingBook: ProgramingBook = {
  name: "한 입 크기로 잘라먹는 타입스크립트",
  price: 33000,
  skill: "typescript",
};

// 업캐스팅 가능
book = programingBook;
// 다운캐스팅 불가능
// programingBook = book;

/**
 * book이라는 변수에 ProgramingBook 타입의 객체의 값들로 초기화하면 오류가 발생한다.
 * 이유: 초과 프로퍼티 검사에 걸렸기 때문이다.
 * < 초과 프로퍼티 검사 >
 * 밑의 형식처럼 변수를 초기화할 때, 초기화하는 값으로 객체 리터럴을 사용하면 발동하는 검사이다.
 * 실제 타입에 정의하지 않은 프로퍼티를 작성하는 경우 에러로 잡는다.
 */
let book2: Book = {
  name: "한 입 크기로 잘라먹는 타입스크립트",
  price: 33000,
  // skill: "typescript", // 초과 프로퍼티 검사에 걸림
};

let book3: Book = programingBook; // 초기화할 때, 객체 리터럴을 사용하지 않았기 때문에 검사에서 통과한다.

/**
 * Q. 함수의 인수로 넣는 경우에는 어떻게 될까?
 * A. 객체 리터럴로 넣으면 초과 프로퍼티 검사에 걸리지만,
 *    객체 리터럴을 변수에 저장해 두고, 변수를 통해 인수로 전달하면 통과된다.
 */
function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 타입스크립트",
  price: 33000,
  //   skill: "typescript",
});
func(programingBook);
