/**
 * < 인터페이스 확장 >
 * 상속해주는 인터페이스는 객체 형식이면 type으로 선언해도 문제 없다.
 * 단, 상속받는 인터페이스는 type으로 사용할 수 없다.
 */

interface Animal {
  name: string;
  color: string;
}
interface Dog extends Animal {
  isBark: boolean;
}
interface Cat extends Animal {
  /**
   * < 상속받은 프로퍼티의 재사용 >
   * 상속받은 인터페이스의 프로퍼티를 재정의할 수 있다.
   * 단, 해당 프로퍼티의 타입이 원본 타입의 서브 타입이어야 한다.
   * 민약, 프로퍼티의 타입을 변경하는 경우에는 오류가 발생한다.
   */
  //   name: "CuteCat";
  isScratch: boolean;
}
interface Chicken extends Animal {
  ifFly: boolean;
}

// 'name'과 'color'가 Animal 인터페이스에서 상속받은 걸 확인할 수 있다.
const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

/**
 * < 다중 확장 >
 */
interface DogCat extends Dog, Cat {}
/**
 * error: 'DogCat' 인터페이스는 'Dog' 및 'Cat' 형식을 동시에 확장할 수 없다.
 * - 에러코드 ts(2320)을 찾아보니 '두 가지 모두와 호환되는 속성을 선언하는 것을 고려해 보세요.'라는 의미를 가지고 있었다.
 * 해결: 위의 'Cat' 인터페이스에 재할당한 프로퍼티를 주석처리
 */

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
