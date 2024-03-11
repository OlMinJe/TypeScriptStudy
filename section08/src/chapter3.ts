/**
 * < 템플릿 리터럴 타입 >
 * 타입 간의 조합을 토대로 다양한 조합을 간단하게 생성할 수 있다.
 */
type Color = 'red' | 'black' | 'green';
type Animal = 'dog' | 'cat' | 'chicken';
type ColoredAnimal = `${Color}-${Animal}`;
// "red-dog" | "red-cat" | "red-chicken" | "black-dog" | "black-cat" | "black-chicken" | "green-dog" | "green-cat" | "green-chicken"
