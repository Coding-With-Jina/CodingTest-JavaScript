/*
문제
두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에는 두 개의 자연수가 주어진다. 이 둘은 10,000이하의 자연수이며 사이에 한 칸의 공백이 주어진다.

출력
첫째 줄에는 입력으로 주어진 두 수의 최대공약수를, 둘째 줄에는 입력으로 주어진 두 수의 최소 공배수를 출력한다.

예제 입력 1 
24 18
예제 출력 1 
6
72
*/

const input = require('fs').readFileSync("text.txt").toString().trim().split(" ");


//최대공약수 >> 두 수를 동시에 나눌수있는 가장 큰 수 / b와 a를 b로 나눈 나머지의 최대공약수
let a = parseInt(input[0]>input[1]?input[0]:input[1]);
let b = parseInt(input[0]<input[1]?input[0]:input[1]);

//a와b의 나머지를 b에다 넣고 a에 b를 넣어서 b가 0이 되었을때 a가 최대공약수
while(b!==0){
    let temp = b;
    b = a % b;
    a = temp;
}

let a2 = parseInt(input[0]>input[1]?input[0]:input[1]);
let b2 = parseInt(input[0]<input[1]?input[0]:input[1]);

//최소공배수 >> 두 정수를 곱한 수에 최대공약수로 나눈 값
let result2 = a2*b2/a;

console.log(a);
console.log(result2);



