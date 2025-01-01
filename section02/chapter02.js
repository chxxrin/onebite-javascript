function returnFalse() {
    console.log("false 함수");
    return false;
}

function returnTrue() {
    console.log("true 함수");
    return true;
}


// || 는 앞에꺼 기준
// && 는 뒤에꺼 기준

// 단락평가 : returnFalse()만으로 값이 결정되므로 false함수만 출력이 됨
console.log(returnFalse() && returnTrue());

// 단락평가X : returnTrue()만으로는 값이 결정되지 않으므로 둘다 출력됨
console.log(returnTrue() && returnFalse()); 

// 단락평가X
console.log(returnFalse() || returnTrue());

// 단락평가
console.log(returnTrue() || returnFalse()); 

// 단락평가 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({name:'Lee'});