// 1. 함수 선언
function greeting(){
    console.log("hello~");
}

// 2. 함수 실행
console.log("호출전");
greeting();
console.log("호출후");

function getArea(width, height){
    function another(){
        console.log("another");
    }

    let area = width * height;
    another();
    return area;    
    console.log('hello'); // 함수는 return 하면 종료하므로 return 아래의 코드는 실행되지 않는다.
}

let result = getArea(20,30);
console.log(result);

// JS의 호이스팅 : 함수 선언문이 호출문보다 아래에 있어도 끌어올려서 선언되므로 문제없이 실행된다!!