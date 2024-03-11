/**
 * < 맵드 기반의 유틸리티 타입 2 - Pick, Omit, Record >
 * (1) Pick<T, K>
 * - 뽑다, 고르다
 * - 객체 타입으로부터 특정 프로퍼티만 딱 골래내는 타입
 */
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 직접 구현하기
type Pick<T, K extends keyof T> = {
  //무조건 T로 들어오는 객체 타입에 키캆들을 추출한 유니온 타입의 서브 타입만 K로 들어올 수 있다.
  // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'
  [key in K]: T[key];
};

// Post 타입으로 부터 'title'과 'content'만 가져옴
const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '옛날 글',
  content: '옛날 컨텐츠',
};

/**
 * (2) Omit<T, K>
 * - 생략하다, 빼다
 * - 객체 타입으로 부터 특정 프로퍼티를 제거하는 타입이다.
 */
// 직접 구현하기
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/**
 * T = Post, K = 'title'
 * Pick<Post, Exclude<Keyof Post, 'title'>>
 * Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>
 * Pick<Post, 'content' | 'tags' | 'thumbnailURL'>
 */

const noTitlePost: Omit<Post, 'title'> = {
  content: '',
  tags: [],
  thumbnailURL: '',
};

/**
 * (3) Record<K, V>
 * 번거로운 중복 코드를 쉬운 방법으로 타입을 정의할 수 있는 타입이다.
 * 동일한 패턴을 갖는 객체를 쉽게 구현할 수 있다.
 */
// type ThumbnailLegacy = {
//   large: { url: string };
//   medium: { url: string };
//   small: { url: string };
//   watch: { url: string };
// };

// 직접 구현해보기
type Record<K extends keyof any, V> = {
  // 무슨 객체인지는 모르겠지만 아무튼 어떤 객체의 key 타입이라고 제약을 걸어줌
  [key in K]: V;
};

type Thumbnail = Record<'large' | 'medium' | 'small' | 'watch', { url: string }>;
