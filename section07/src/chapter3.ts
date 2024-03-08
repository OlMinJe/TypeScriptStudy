/**
 * < 제네릭 인터페이스와 제네릭 타입 별칭 >
 * 1. 제네릭 인터페이스
 * 제네릭 함수와 동일하게 만들어준다.
 * 제네릭 인터페이스를 사용할 때는 타입 변수에 할당할 타입을 꺽쇠 내부에 지정해줘야 한다.
 * (타입 변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터)
 */
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 2. 인덱스 시그니쳐와 함께 사용
 */
// 인덱스 시그니쳐
// interface NumberMap {
//   [key: string]: number;
// }

// let numberMap1: NumberMap = {
//   key: -1231,
//   key2: 23414,
// };

interface NumberMap {
  [key: string]: number;
}
let numberMap1: NumberMap = {
  key: -1231,
  key2: 23414,
};

interface Map<V> {
  [key: string]: V;
}
let stringMap: Map<string> = {
  key: "value",
};
let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 3. 제네릭 타입 별칭
 * 제네릭 인터페이스와 크게 다를거 없다.
 */
type Map2<V> = {
  [key: string]: V;
};
let stringMap2: Map2<string> = {
  key: "hello",
};

/**
 * 제네릭 인터페이스의 활용 예시
 * - 유저 관리 프로그램
 * - 유저 구분: 학생 / 개발자
 */

interface Student {
  type: "student";
  school: string;
}
interface Developer {
  type: "developer";
  skill: string;
}
interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  //   if (user.profile.type !== "student") {
  //     console.log("잘못 오셨습니다");
  //     return;
  //   }
  // 제네릭 인터페이스를 사용하면 타입 좁히기를 안 해도 된다.

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "MIN",
  profile: {
    type: "developer",
    skill: "Typescript",
  },
};
