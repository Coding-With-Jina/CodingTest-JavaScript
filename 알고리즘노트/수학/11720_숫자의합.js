/*
문제
N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

출력
입력으로 주어진 숫자 N개의 합을 출력한다.

예제 입력 2 
5
54321
예제 출력 2 
15
*/
const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]); // 숫자의 개수 N
const num = input[1].split(''); // 둘째 줄에 주어진 숫자들을 개별 문자로 분리

let result = 0; // 결과를 저장할 변수 초기화

for (let i = 0; i < N; i++) { // 숫자의 개수 N만큼 반복
    result += parseInt(num[i]); // 각 문자를 정수로 변환하여 합산
}

console.log(result); // 결과 출력