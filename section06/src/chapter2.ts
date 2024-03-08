/**
 * < 타입스크립트의 클래스 >
 * 타입스크립트의 클래스는 자바스크립트의 클래스로 취급이 되면서 동시에 타입으로도 취급된다.
 * => 타입으로 사용할 수 있는 이유는 타입스크립트가 구조적 타입 시스템을 사용하기 때문에,
 *    클래스의 구조를 보고 필드와 메서드 등이 있으면 해당 클래스를 타입으로 만들어준다.
 */

import { off } from "process";

/**
 * < TIP >
 * 클래스를 토대로 만들어지는 객체를 미리 만들어보자.
 * const employee = {
  name: "MINJE",
  age: 25,
  position: "developer",
  work() {
    console.log("일한다.");
  },
};
 */

class Employee {
  // name; // 'name' 멤버에는 암시적으로 'any' 형식이 포함된다.
  // name:string; // 속성 'name'은 이니셜라이져(=초기값)가 없고 생성자에 할당되어 있지 않습니다

  // 해결 방법[1] - name?: string = ''; (비추천)
  // 해결 방법[2] - name: sting = ''; (초기값을 선언해도 되는 상황에서 ok)
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("일한다.");
  }
}

// < 클래스 더 확장하기 >
class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

// < 인스턴스 생성하기 >
const employee = new Employee("MINJe", 25, "개발자");
console.log(employee); // { name: 'MINJe', age: 25, position: '개발자' }

// < 클래스를 타입처럼 사용하기 >
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
