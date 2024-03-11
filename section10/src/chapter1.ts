/**
 * < 맵드 기반의 유틸리티 타입 1 - Partial, Required, Readonly >
 * (1) Partial<T>
 * - 부분적인, 일부분의
 * - 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */
// interface Post {
//   title: string;
//   tags: string[];
//   content: string;
//   thumbnailURL?: string;
// }

// Post 타입을 선택적 프로퍼티로 바꿔준다.
// const draft: Partial<Post> = {
//   title: '제목입니다.',
//   content: '초안~',
// };

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// Partial 직접 구현해보기
type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: '제목입니다.',
  content: '초안~',
};

/**
 * (2) Required<T>
 * - 필수의, 필수적인
 * - Partial 타입과 반대로 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */
// Required 직접 구현해보기
type Required<T> = {
  // '-?'는 선택적 프로퍼티를 제외하겠다.
  [key in keyof T]-?: T[key];
};
const withThumbnailPost: Required<Post> = {
  title: '힘둘다,',
  tags: ['ts'],
  content: "'",
  thumbnailURL: 'http://',
};

/**
 * (3) Readonlcy<T>
 * - 읽기 전용 수정 불가
 * - 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */
// Readonly 구현해보기
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: '보호된 게시글',
  tags: [],
  content: '',
};
// readonlyPost.content = '';
