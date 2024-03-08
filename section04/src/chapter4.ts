/**
 * < 사용자 정의 타입가드 >
 */
type Dog = {
  name: string;
  isBark: boolean;
};
type Cat = {
  name: string;
  isScratch: boolean;
};
type Animal = Dog | Cat;

// 이렇게 적으면 프로퍼티가 바뀔 때마다 계속 바꿔야 한다.
// function warning(animal: Animal) {
//   if ("isBark" in animal) {
//   } else if ("isScratch" in animal) {
//   }
// }

function isDog(animal: Animal): animal is Dog {
  // true를 return하면 이때 반환값은 Dog 타입이라고 명시해줌.

  // return animal.isBark !== undefined;
  /**
   * error: 'Animal' 형식에 'isBark' 속성이 없습니다.
   * 이유: 타입이 잘 좁혀지지 않았기 때문에 발생한 오류이다.
   * 해결: 'anima'에 밑의 형식처럼 타입을 단언해준다.
   */
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isBark !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    /**
     * 밑의 animal 변수의 타입을 확인해보면, Dog 타입이 아닌 Animal 타입으로 인식하고 있다.
     * 이유: 직접 만든 반환값을 가지고는 타입을 잘 좁혀 주지는 않는다.
     * 해결: 그렇기 때문에, isDog 함수 자체를 타입 가드 역할을 하도록 만들어주면 된다.
     *      위의 'function isDog(animal: Animal) {'코드에 반환 값의 타입을 지정해준다.
     *      'function isDog(animal: Animal): animal is Dog {
     */
    animal;
  } else if ("isScratch" in animal) {
  }
}
