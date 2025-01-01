// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1,2,3];
const newLength = arr1.push(4,5,6,7);
console.log(arr1);
console.log(newLength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1,2,3];
const poppedItem = arr2.pop(); // 3
console.log(poppedItem);
console.log(arr2); //[1,2]

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고 반환
let arr3 = [1,2,3];
const shiftedItem = arr3.shift();
console.log(shiftedItem); // 1
console.log(arr3); // [2,3]

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1,2,3];
const newLength2 = arr4.unshift(0);
console.log(newLength2); // 4
console.log(arr4); // [0,1,2,3]

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열 반환
// 원본 배열은 바뀌지 않음
let arr5 = [1,2,3,4,5];
let sliced = arr5.slice(2,5); // 2번부터 5번전까지
let sliced2 = arr5.slice(2); // 2번째부터 끝까지
let sliced3 = arr5.slice(-3); // -3번째부터 끝까지
console.log(sliced); // [3,4,5]
console.log(arr5); // [1,2,3,4,5] 
console.log(sliced2); // [3,4,5]
console.log(sliced3); // [3,4,5]

// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1,2];
let arr7 = [3,4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr); // [1,2,3,4]