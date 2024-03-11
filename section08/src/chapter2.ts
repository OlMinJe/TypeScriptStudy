/**
 * < 맵드 타입 >
 * 객체 타입을 이용하는 타입이다.
 */
interface User {
  id: number;
  name: string;
  age: number;
}

// interface PartialUser {
//     id?: number;
//     name?: string;
//     age?: number;
//   }

// 맵드 타입 생성
type PartialUser = {
  /**
   * [key in string_union_type] : 객체[key] => "id" : User["id"]은 number 타입인 객체 타입이 된다.
   * 이때, 객체[key] 부분은 인덱스드 엑세스 타입과 동일하다.
   */ //   [key in 'id' | 'name' | 'age']: User[key];
  [key in 'id' | 'name' | 'age']?: User[key];
};

type BooleanUser = {
  //   [key in 'id' | 'name' | 'age']: boolean;
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

function fetchUser(): ReadonlyUser {
  return {
    id: 1,
    name: 'MinJe',
    age: 25,
  };
}

function updateUser(user: User) {}

// 매개변수의 타입이 유저 객체 그 자체라 하나를 변경하려면 모든 매개변수를 다 보내야하는 번거로움
// updateUser({
//   id: 1,
//   name: 'MinJe',
//   age: 24,
// });
