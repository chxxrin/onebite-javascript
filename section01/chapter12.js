// 1. 함수 표현식은 호이스팅의 대상이 되지 않음!!

function funcA(){
    console.log('funcA');
}

let varA = funcA;
console.log(varA);
varA();

// 익명함수
let varB = function () {
    console.log("funcB");
};

varB();

// 2. 화살표 함수(arrow function)
let varC = () => {
    return 1;
}

console.log(varC());

let varD = () => 1;
console.log(varD);

let varE = (value) => value + 1;
console.log(varE(11));

let varF = (value) => {
    console.log(value);
    return value + 1;
};
console.log(varF(10));