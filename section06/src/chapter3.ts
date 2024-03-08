/**
 * < 접근 제어자(Access Modifier) >
 * - public   : 모든 범위에서 접근이 가능하다. (default value)
 * - private  : 클래스 내부에서만 접근할 수 있다.
 * - proteced : 클래스 내부 혹은 파생 클래스 내부에서만 접근할 수 있다.
 */

class Employee {
  //   private name: string;
  //   protected age: number;
  //   public position: string;

  /**
   * < 자동 필드 생성 >
   * 생성자에 접근 제어자를 작성하면, 필드를 따로 작성하지 않아도 된다.
   * 추가로 접근 제어자가 붙어있는 매개변수들은 값 초기화도 자동으로 한다.
   */
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  work() {
    console.log(`${this.name}은 일한다.`);
  }
}

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

  func() {
    console.log(`${this.age} 입니다.`);
  }
}

const employee = new Employee("MINJe", 25, "개발자");

// 필드의 접근 제어자가 public인 경우에만 오류가 발생하지 않는다.
employee.position = "어르신";
