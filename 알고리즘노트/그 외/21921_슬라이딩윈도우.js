/*
문제
찬솔이는 블로그를 시작한 지 벌써  N일이 지났다.

요즘 바빠서 관리를 못 했다가 방문 기록을 봤더니 벌써 누적 방문 수가 6만을 넘었다.

찬솔이는 X일 동안 가장 많이 들어온 방문자 수와 그 기간들을 알고 싶다.

찬솔이를 대신해서  X일 동안 가장 많이 들어온 방문자 수와 기간이 몇 개 있는지 구해주자.

입력
첫째 줄에 블로그를 시작하고 지난 일수  N와  X가 공백으로 구분되어 주어진다.

둘째 줄에는 블로그 시작  1일차부터  N일차까지 하루 방문자 수가 공백으로 구분되어 주어진다.

출력
첫째 줄에  X일 동안 가장 많이 들어온 방문자 수를 출력한다. 만약 최대 방문자 수가 0명이라면 SAD를 출력한다.

만약 최대 방문자 수가 0명이 아닌 경우 둘째 줄에 기간이 몇 개 있는지 출력한다.

7 5
1 1 1 1 1 5 1
*/
/* 메모리초과
1. 배열 복사 및 슬라이스 사용
: visitorSoo.slice(i, X + i) 이 부분에서 매 반복마다 새로운 배열을 생성합니다. 
이 배열은 크기가 X인 부분 배열이고, N번 반복하면서 많은 양의 메모리를 소비할 수 있습니다. 
특히 N과 X가 큰 경우 이 문제는 더욱 심각해집니다.

2. 불필요한 중간 저장 배열 생성
: visitors 배열에 모든 부분 합을 저장하고 있습니다. 
이 배열은 결과적으로 최대 및 최대 값의 개수를 찾는 데 사용되지만, 전체 데이터를 저장할 필요는 없습니다. 
직접 최대값을 업데이트하면서 동시에 그 수의 개수를 세는 것이 메모리 사용량을 줄일 수 있는 방법입니다.



const input = require("fs").readFileSync("text.txt").toString().trim().split("\r\n");
const [N, X] = input.shift().split(" ").map(Number);

const visitorSoo = input[0].split(' ').map(Number);

//console.log(visitorSoo);

let visitors = [];
let max = 0;
let maxCnt = 0;
let sum = 0;

for(let i=0; i<N; i++){
    sum = visitorSoo.slice(i, X + i).reduce((acc, curr) => acc + curr , 0);
    visitors.push(sum);
   // console.log(sum);
}

//console.log(visitors);

max = Math.max(...visitors); //방문자 수 중에 가장 큰 수 찾아내기
maxCnt = visitors.filter(element => max === element).length; //큰 수 몇 개 있는 지 찾기


if(max !== 0){//만일 최대방문자수가 0이 아닌 경우
    console.log(max);
    console.log(maxCnt);
}
else if(max === 0){
    console.log("SAD");
}
*/

const input = require("fs").readFileSync("text.txt").toString().trim().split("\r\n");
const [N, X] = input.shift().split(" ").map(Number);
const visitorSoo = input[0].split(' ').map(Number);

let max = 0;
let maxCnt = 0;
let sum = 0;

// 첫 X 일의 방문자 수를 계산
for (let i = 0; i < X; i++) {
    sum += visitorSoo[i];
}
max = sum;


// 슬라이딩 윈도우 기법을 사용하여 나머지 일자들의 합을 계산
for (let i = X; i < N; i++) {
    sum = sum - visitorSoo[i - X] + visitorSoo[i];
    if (sum > max) {
        max = sum;
        maxCnt = 1;
    } else if (sum === max) {
        maxCnt++;
    }
}

// 첫 X일이 최대일 경우를 처리
if (sum === max) {
    maxCnt++;
}

if (max !== 0) {
    console.log(max);
    console.log(maxCnt);
} else {
    console.log("SAD");
}
