/**
 * < 프로미스(Promise)와 제네릭 >
 * 비동기로 받아오는 타입을 안전하게 정의할 수 있다.
 * 제네릭 타입으로 정의를 안 하면 기본적으로는 비동기 처리의 결과값이 Unknown 타입이 된다.
 */

// [1] 일반적인 코드 - 타입 좁히기 코드 필수.
// const promise = new Promise((resolve, reject) =>
//   setTimeout(() => resolve(20), 2000)
// );

// promise.then((res) => {
//   if (typeof res === "number") console.log(res * 10);
// });

// [2] 제네릭 타입 변수 사용하기
// const promise1 = new Promise<number>((resolve, reject) => {
// setTimeout(() => {
//     resolve(20);
//     reject("실패");
// }, 2000);
// });

// promise.then((res) => console.log(res * 10));

/**
 * < 프로미스를 반환하는 함수의 타입을 정의 >
 */
interface Post {
  id: number;
  title: string;
  content: string;
}

// fetchPost()의 타입이 'Promise<Post>'로 정의된 것을 확인할 수 있다.
function fetchPost() {
  return new Promise<Post>((resolve, reject) =>
    setTimeout(() => {
      resolve({
        id: 1,
        title: "제목",
        content: "본문",
      });
    }, 2000)
  );
}

const postRequest = fetchPost();
postRequest.then((post) => {
  post.id;
  post.title;
  post.content;
});
