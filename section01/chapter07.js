// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3+2;
let num2 = 3-2;
let num3 = 3*2;
let num4 = 3/2;
let num5 = 3%2;

let num6 = 1+2*10;
console.log(num6);

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
num7 -= 10;
num7 *= 2;
num7 /= 3;
num7 %= 3;

console.log(num7);

// 4. 증감 연산자
let num8 = 10;
console.log(++num8); // 전위연산 11
console.log(num8++); // 후위연산 11
console.log(num8); // 12

// 5. 논리 연산자
let or = true || false; // true
let and = true && false; // false
let not = !true; // false

console.log(or, and, not);

// 6. 비교 연산자 (== 2개를 쓰면 1과 '1'이 같다고 나오므로 === 3개를 쓰자)
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
console.log(comp1, comp2);

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;

