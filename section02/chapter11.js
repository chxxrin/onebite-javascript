console.log(1);
setTimeout(()=>{
    console.log(2);
}, 3000); // 원하는 코드를 특정시간 이후에 실행시키도록 하는 비동기함수(Web APIs에 콜백함수와 함께 전달!)
console.log(3);

