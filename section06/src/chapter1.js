/**
 * < 자바스크립트의 클래스 >
 * 동일한 모양의 객체를 여러 개 만들다보면 중복되는 코드가 많아진다.
 */

let studentA = {
  name: "MINJE",
  grade: "A",
  age: 25,
  study() {
    console.log("공부하는 중");
  },
  introduce() {
    console.log("할로");
  },
};

// let studentB = {
//   name: "SUNNA",
//   grade: "B",
//   age: 27,
//   study() {
//     console.log("공부하는 중이지요");
//   },
//   introduce() {
//     console.log("집가고 싶다");
//   },
// };

class Student {
  /**
   * < 필드 >
   * 필드를 설정하면 이 클래스가 만들어내는 객체는 모두 필드에 해당하는 프로퍼티를 갖게 된다.
   */
  name;
  grade;
  age;

  /**
   * < 생성자 >
   * 실제로 객체를 만드는 메서드를 의미한다.
   */
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드 만들기
  study() {
    console.log("공부하는 중이지요");
  }
  introduce() {
    console.log("집가고 싶다");
  }
}

/**
 * < 인스턴스 >
 * 클래스를 이용하여 객체를 생성한 것을 의미한다.
 */
let studentB = new Student("SUNNA", "A+", 27); // Student의 instance이다.
console.log(studentB);
studentB.study();
studentB.introduce();

/**
 * < 클래스 상속 >
 * extends 키워드로 상속받을 수 있다.
 * 대신 생성자에서 매개변수 값은 상속받은 부모 클래스에 있는 값까지 작성해야 한다.
 * 이 매개변수를 참조하기 위해서 생성자 안에 'super'라는 키워드를 부모 클래스의 필드를 가져온다.
 */
class StudentDeveloper extends Student {
  favoritSkill;

  constructor(name, grade, age, favoritSkill) {
    super(name, grade, age);
    this.favoritSkill = favoritSkill;
  }

  programing() {
    console.log(`${this.favoritSkill}로 프로그래밍 하는 중`);
  }
}
