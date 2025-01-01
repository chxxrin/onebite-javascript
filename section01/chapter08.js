// 1. null 병합 연산자 : ??
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4); // var2의 10

let var5 = var1 ?? var3;
console.log(var5);

let var6 = var3 ?? var2;
console.log(var6); // 둘다 값이 있다면 앞에 있는 값이 출력됨

let userName = 'lee';
let userNickName = 'winterwood';

let displayName = userName ?? userNickName;
console.log(displayName);

//  2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자

let var7 = 1; // number
console.log(typeof var7); // string

var7 = 'hello'; // int
console.log(typeof var7); // string

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;

let res = (var8 % 2 === 0) ? "even" : "odd";
console.log(res);