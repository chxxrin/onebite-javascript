// 1. 상수 객체 : 추가, 수정, 삭제는 가능! 하지만 완전히 새로운 값을 저장하는건 불가능!
const animal = {
    type: 'cat',
    name: 'navi',
    color: 'black',
};

animal.age = 2;
animal.name = '까망이';
delete animal.color;

// 2. 메서드
// -> 값이 함수인 프로퍼티

const person = {
    name: 'lee',
    sayHi() {
        console.log('hello');
    },
};

person.sayHi();
person["sayHi"]();