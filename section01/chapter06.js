// 1. 묵시적 형 변환 
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = '20';

const result = num + str; // 숫자를 문자열로 자동 형 변환해줌
console.log(result); // 1020
console.log(typeof result); // string

// 2. 명시적 형 변환
// -> 개발자가 내장함수 등을 이용해서 직접 형 변환을 명시
// 숫자만 있는 문자열 -> 숫자 : Number(문자열변수명)
// 문자, 숫자 혼합된 문자열 -> 숫자 : parseInt(문자열변수명)
let str1 = '10';
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = '10개';
let strToNum2 = parseInt(str2);
console.log(10 + strToNum2);

// 숫자 -> 문자열 : String(숫자변수명)
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + '입니다.');