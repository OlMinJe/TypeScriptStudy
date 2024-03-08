/**
 * < 제네릭 클래스 >
 * 클래스의 타입을 하나하나 선언하지 않아도 된다.
 */

// 타입만 다른 중복 코드이다.
// class StringList {
//   constructor(private list: string[]) {}

//   push(data: string) {
//     this.list.push(data);
//   }

//   pop() {
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }

// const stringList = new StringList([1, 2, 3]);

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2"]);
stringList.pop();
stringList.push("4");
stringList.print();
