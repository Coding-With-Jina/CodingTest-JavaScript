/*
문제
알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

입력
첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.

출력
첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.

예제 입력 1 
Mississipi
예제 출력 1 
?
예제 입력 2 
zZa
예제 출력 2 
Z
*/

//const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const input = require("fs").readFileSync("text.txt").toString().trim().split("\n");
const alphabet = input.toUpperCase();
const count = {};

//문자별 빈도수 계산
for(const char of alphabet){
    count[char] = (count[char]||0)+1; //count[char] 값이 없으면 0
   // console.log(count[char],char)
}

//가장 높은 빈도수 찾기
let maxCount=0;
let result = '';
for(const char in count){
    if(count[char]>maxCount){
        maxCount = count[char];
        result = char;
    }else if(count[char]==maxCount){
        result='?';
    }
}

console.log(result);
