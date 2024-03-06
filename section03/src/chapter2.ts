/**
 * < Unknown 타입 >
 *
 */

function unknownExam() {
  // 다운캐스팅은 가능하다.
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 업캐스팅은 불가능하다.
  //   let unknownVar: unknown;
  //   let str: string = unknownVar;
  //   let bool: boolean = unknownVar;
}

/**
 * < Never 타입 >
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  } // 이 함수가 반환할 수 있는 건 공집합이라는 의미.

  //   업캐스팅은 가능하다.
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //   다운태스팅은 불가능하다.
  //   let never1: never = 10;
  //   let never2: never = "str";
  //   let never3: never = true;
}

/**
 * < void 타입 >
 */
function voidExam() {
  function voidFunc() {
    console.log("hi");
  }

  // 가능한 업캐스팅
  let voidVar: void = undefined;
}

/**
 * < Any 타입 >
 * 모든 타입의 슈퍼 타입이며, never를 제외한 모든 타입의 서브 타입이다.
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  // 가능한 다운캐스팅
  anyVar = unknownVar;
  // 가능한 업캐스팅
  undefinedVar = anyVar;

  // 불가능한 다운캐스팅 - never 타입은 공집합이라서 안 된다.
  let neverVar: never;
  // neverVar = anyVar;
}
