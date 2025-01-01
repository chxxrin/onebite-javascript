// 1. if 조건문
let num = 4;

if (num >= 10) {
    console.log("num은 10이상입니다.");
    console.log("조건이 참입니다.");
} else if (num>=5) {
    console.log("num은 5이상입니다.");
} else {
    console.log("num은 10이하입니다.");
    console.log("조건이 거짓입니다.");
}


// 2. switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다

let animal = 'cat';

switch(animal) {
    case 'cat':
        console.log("cat입니다.");
        break;
    case 'dog':
        console.log("dog입니다.");
        break;
    case 'bear':
        console.log("bear입니다.");
        break;
    
}