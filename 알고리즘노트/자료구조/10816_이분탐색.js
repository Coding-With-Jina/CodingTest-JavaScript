/*
문제
숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 
정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 상근이가 가지고 있는 숫자 카드의 개수 N(1 ≤ N ≤ 500,000)이 주어진다. 
둘째 줄에는 숫자 카드에 적혀있는 정수가 주어진다. 
숫자 카드에 적혀있는 수는 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다.

셋째 줄에는 M(1 ≤ M ≤ 500,000)이 주어진다. 
넷째 줄에는 상근이가 몇 개 가지고 있는 숫자 카드인지 구해야 할 M개의 정수가 주어지며,
 이 수는 공백으로 구분되어져 있다. 이 수도 -10,000,000보다 크거나 같고, 10,000,000보다 작거나 같다.

출력
첫째 줄에 입력으로 주어진 M개의 수에 대해서, 각 수가 적힌 숫자 카드를 상근이가 몇 개 가지고 있는지를 공백으로 구분해 출력한다.
*/
/* 시간초과
const fs = require('fs');
const input = fs.readFileSync('text.txt').toString().trim().split("\r\n");

const N = parseInt(input.shift().split(" "));//상근이가 가지고 있는 숫자 카드의 개수 N
const NumCard = input.shift().split(" ").map(Number);//상근이가 가지고 있는 숫자 카드에 적혀있는 정수
const M = parseInt(input.shift().split(" "));//M
const ownedCard = input.shift().split(" ").map(Number);//상근이가 몇개 가지고 있는지 알아볼 숫자카드들 

let count=0;
let result=[];

for(const char of ownedCard){
    for(let i=0; i<=NumCard.length;i++){
        if(char === NumCard[i]){
            count+=1;
        }
    }
    result.push(count);
    count=0;
}

console.log(result.join(' '));
*/
//----------------------------------------------------------------------------------------------------------
const fs = require('fs');
const input = fs.readFileSync('text.txt').toString().trim().split("\r\n");

const N = parseInt(input.shift().split(" "));//상근이가 가지고 있는 숫자 카드의 개수 N
const NumCard = input.shift().split(" ").map(Number);//상근이가 가지고 있는 숫자 카드에 적혀있는 정수
const M = parseInt(input.shift().split(" "));//M
const ownedCard = input.shift().split(" ").map(Number);//상근이가 몇개 가지고 있는지 알아볼 숫자카드들 

console.log(NumCard);
const map = new Map();

/* 
1. map을 이용해서 카드 종류는 key, 카드의 장수를 value값으로 저장한다.
2. map이 key를 가지고 있으면 value 값을 +1 해준다
3. 원래 갖고 있는 카드인 nArr을 map으로 만들어준다.
4. 비교하려는 카드인 mArr의 각 element가 map에 있는지 확인하고 있으면 몇 장 갖고 있는지를 result배열에 push 한다.

new Map() – 맵을 만듭니다.
map.set(key, value) – key를 이용해 value를 저장합니다.
map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.
map.has(key) – key가 존재하면 true, 존재하지 않으면 false를 반환합니다.
map.delete(key) – key에 해당하는 값을 삭제합니다.
map.clear() – 맵 안의 모든 요소를 제거합니다.
map.size – 요소의 개수를 반환합니다.
*/

// NumCard 배열의 각 원소에 대해서
NumCard.forEach((ele) => {
    // 현재 원소가 이미 map에 있다면
    if (map.has(ele)) {
        // 해당 원소의 카운트를 1 증가
        map.set(ele, map.get(ele) + 1)
    } else {
        // 없다면 새로운 원소로 추가하고, 개수를 1로 설정
        map.set(ele, 1)
    }
})

let result = [];

// ownedCard 배열의 각 원소에 대해서
ownedCard.forEach((ele) => {
    // map에 해당 숫자가 있는지 확인
    if (map.has(ele)) {
        // 있다면 그 숫자의 개수를 결과 배열에 추가
        result.push(map.get(ele))
    } else {
        // 없다면 0을 결과 배열에 추가
        result.push(0)
    }
})

console.log(result.join(' '));

