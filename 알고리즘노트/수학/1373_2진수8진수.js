/*
문제
2진수가 주어졌을 때, 8진수로 변환하는 프로그램을 작성하시오.

입력
첫째 줄에 2진수가 주어진다. 주어지는 수의 길이는 1,000,000을 넘지 않는다.

출력
첫째 줄에 주어진 수를 8진수로 변환하여 출력한다.

예제 입력 1 
11001100
예제 출력 1 
314
*/

//2진수에서 8진수로 만드려면 
//2진수를 오른쪽에서부터 3개씩 잘라서 묶는다
//3자리로 묶은 숫자에 2진수 자리값을 곱한다
//곱한 값을 모두 더한다. 


const input = require('fs').readFileSync("text.txt").toString().trim().split("");

// 새로운 배열을 생성
const inputArray = [];

// 배열의 뒤쪽에서부터 3개씩 요소를 가져와 새 배열에 추가
for (let i = input.length; i > 0; i -= 3) {
    inputArray.push(input.slice(Math.max(0, i - 3), i));
}

// 결과를 뒤집어 원래 순서대로 만들고
inputArray.reverse();
  
//console.log(inputArray);
//console.log(input);

//만일 3개씩 나누고 남은 숫자가 2자리수인 경우 0을 붙인다.
if(inputArray[0].length<3){
    inputArray.forEach(subArray => {
        while (subArray.length < 3) {
          subArray.unshift('0');
        }
      });
}
//소수점 기준 오른쪽
else if(inputArray[inputArray.length-1].length<3){

    inputArray.forEach(subArray => {
        while (subArray.length < 3) {
            inputArray.push('0');
        }
      });
}

//console.log(inputArray);

const newArray = inputArray.map(function(subArray) {

    // subArray의 요소를 뒤집어서 계산
    subArray = subArray.reverse().map((value, index) => {
        return value * Math.pow(2, index);//세자리로 묶은 숫자에 2진수의 자리값을 곱한다.
        
    }).reverse(); // 다시 원래 순서로 뒤집기 

    //배열끼리 더하기
    let sum=0;
    for(const char of subArray){
        sum += char;
    }

    return sum;    

  });

  console.log(newArray.join(""));


//----------------------------------------------------------------------
/* 더 쉽고 간단한 방법
let answer = '';
function convert8(num) {
  return parseInt(num, 2).toString(8);
}
while (input.length > 3) {
  let splitted = input.slice(input.length - 3, input.length);
  answer = convert8(splitted) + answer;
  input = input.slice(0, input.length - 3);
}
console.log(convert8(input) + answer);
*/
//------------------------------------------------------------------------
