// 1. for반복문
for (let i=1;i<=10;i++) {
    console.log(`${i}번 반복`);

    if (idx % 2 === 0) {
        continue; // 실행하지 않고 바로 다음 반복으로 넘어감!
    } 

    if (i >= 5) {
        break; // 아예 반복문 종료! 
    }

}

