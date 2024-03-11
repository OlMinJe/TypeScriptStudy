/**
 * < 인덱스드 엑세스 타입 >
 * [1] 객체 타입
 * 객체 타입으로 부터 특정 프로퍼티를 뽑아서 함수의 매개변수에 적용할 수 있도록 해준다.
 * 기존 프로퍼티가 계속 수정되는 경우, 유용하게 사용할 수 있다.
 * 단, '타입["타입"]'의 형식으로 작성한다. (이때, 인덱스에 들어가는 건 값이 아닌 타입이다.)
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

// function printAuthorInfo(author: { id: number; name: string }) {
//   console.log(`${author.name}-${author.id}`);
// }

// Post 타입에서 객체의 이름이 "author"인 프로퍼티를 가져온다.
function printAuthorInfo(author: Post['author']) {
  console.log(`${author.name}-${author.id}`);
}

// Post 타입에서 객체의 이름이 "author"이며, "id"인 프로퍼티만 가져온다.
function printAuthorInfoDetail(author: Post['author']['id']) {
  console.log(`${author}`);
}

const post: Post = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '이정환',
  },
};

/**
 * [2] 배열 타입
 */
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

// 요소의 타입을 먼저 작성하고, 프로퍼티를 가져온다..
function printAuthorInfo02(author: PostList[number]['author']) {
  console.log(`${author.name}-${author.id}`);
}

// 대괄호 안에 작성된 하나의 요소의 타입만 가져온다.
const postList: PostList[number] = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '이정환',
  },
};
// number 타입을 작성한 것과 같다. (값이 아닌 타입으로 넣었기 때문)
const postList2: PostList[0] = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '이정환',
  },
};

/**
 * [3] 튜플 타입
 */
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3]; // 길이가 '3'인 튜플 형식 'Tup'의 인덱스 '3'에 요소가 없습니다.
type TupNum = Tup[number]; // 3개 타입의 최적의 공통 타입인 유니온 타입으로 추출한다.
