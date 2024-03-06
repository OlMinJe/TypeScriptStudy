/*
< 원시 타입 >
- 원시 타입은 동시에 한 개의 값만 저장할 수 있는 타입들을 말한다.
- 배열이나 객체 같은 비 원시 타입들은 동시에 여러 개의 값을 저장할 수 있는 반면, 
- number, string, boolean 등의 원시 타입은 숫자면 숫자, 문자열이면 준자열 딱 하나의 값만 저장할 수 있다.
*/

// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

//  string
let str1: string = 'hello';
let str2: string = `hello`;
let str3: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

//  null
let null1: null = null;

//  undefined
let und1: undefined = undefined;

// 리터럴(=값) 타입은 값 그 자체가 타입이 되는 것들을 의미한다.
let numA: 10 = 10; // 10이라는 값 이외의 값은 허용하지 않음
let boolA: true = true;
