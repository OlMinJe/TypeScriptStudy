/**
 * < 서로소 유니온 타입 >
 * 교집합이 없는 타입으로만 만든 유니온 타입을 의미한다. (서로소 관계)
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};
type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};
type Guest = {
  tag: "Guest";
  name: string;
  visitCount: number;
};
type User = Admin | Member | Guest;

function login01(user: User) {
  // 각 다른 타입에서 값을 비교했지만, tag 프로퍼티를 추가하여 직관적으로 확인할 수 있다.
  // if ("kickCount" in user) {
  if (user.tag === "ADMIN") {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님 현재까지 ${user.Point}모았습니다`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
  }
}

// 혹은 switch-case문을 사용할 수 있다.
function login02(user: User) {
  switch (user.tag) {
    case "ADMIN":
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    case "MEMBER":
      console.log(`${user.name}님 현재까지 ${user.Point}모았습니다`);
      break;
    case "Guest":
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문`);
      break;
  }
}
