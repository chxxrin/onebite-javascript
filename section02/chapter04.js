// 1. Spread 연산자
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1,2,3];
let arr2 = [4,...arr1,5,6];
console.log(arr2);

let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    ...obj1,
    c:3,
    d:4,
}

console.log(obj2);

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// 나머지 매개변수
// 배열에 한 번에 넣을 수 있다
// 뒤에 남은 매개변수를 모두 칭함
// 단, rest 매개변수 뒤에는 추가적인 매개변수 불가능!

function funcB(one, two, ...rest){
    console.log(rest);
}

funcB(...arr1)