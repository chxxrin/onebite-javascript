// 1. 배열 순회
let arr = [1,2,3];

// 1-1. 배열 인덱스 (인덱스를 순회)
for(let i=0;i<arr.length;i++){
    console.log(arr[i]); // 1 2 3
}

let arr2 = [4,5,6,7,8];
for(let i=0;i<arr2.length;i++){
    console.log(arr2[i]);
}

// 1-2. for of 반복문 (배열안에 있는 값을 순회): 배열에만 가능!
for(let item of arr){
    console.log(item); // 1 2 3
}

// 2. 객체 순회
let person = {
    name: 'Lee',
    age: 27,
    hobby: 'tennis',
};

// 2-1. Object.keys 
// 객체에서 key값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for(let key of keys){
    const value = person[key]
    console.log(key, value);
}

// 2-2. Object.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for(let value of values) {
    console.log(value);
}

// 2-3. for in : 객체에만 가능!
for(let key in person) {
    const value = person[key];
    console.log(key, value); // name age hobby
}