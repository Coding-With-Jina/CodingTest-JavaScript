/*
문제
괄호 문자열(Parenthesis String, PS)은 두 개의 괄호 기호인 ‘(’ 와 ‘)’ 만으로 구성되어 있는 문자열이다. 그 중에서 괄호의 모양이 바르게 구성된 문자열을 올바른 괄호 문자열(Valid PS, VPS)이라고 부른다. 한 쌍의 괄호 기호로 된 “( )” 문자열은 기본 VPS 이라고 부른다. 만일 x 가 VPS 라면 이것을 하나의 괄호에 넣은 새로운 문자열 “(x)”도 VPS 가 된다. 그리고 두 VPS x 와 y를 접합(concatenation)시킨 새로운 문자열 xy도 VPS 가 된다. 예를 들어 “(())()”와 “((()))” 는 VPS 이지만 “(()(”, “(())()))” , 그리고 “(()” 는 모두 VPS 가 아닌 문자열이다. 

여러분은 입력으로 주어진 괄호 문자열이 VPS 인지 아닌지를 판단해서 그 결과를 YES 와 NO 로 나타내어야 한다. 

입력
입력 데이터는 표준 입력을 사용한다. 입력은 T개의 테스트 데이터로 주어진다. 입력의 첫 번째 줄에는 입력 데이터의 수를 나타내는 정수 T가 주어진다. 각 테스트 데이터의 첫째 줄에는 괄호 문자열이 한 줄에 주어진다. 하나의 괄호 문자열의 길이는 2 이상 50 이하이다. 

출력
출력은 표준 출력을 사용한다. 만일 입력 괄호 문자열이 올바른 괄호 문자열(VPS)이면 “YES”, 아니면 “NO”를 한 줄에 하나씩 차례대로 출력해야 한다. 
*/

//const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = require('fs').readFileSync('text.txt').toString().trim().split('\r\n');
const len = input.shift();
let result=[];

//기호 '('와 ')'의 개수를 카운트하여 '(' 기호 일 시 1을 더해주고 ')' 기호 일 시 1을 빼준다.
//만약 VPS 인 문자열일 시 '(' 기호와 ')' 개수가 서로 딱 떨어지므로 0이 나오게 됨
//카운트된 수가 -1이 될 시 닫치지 않는 ')' 기호가 존재한다는 뜻이므로 해당 문자열은 VPS가 아닌 문자열이 되는거

for (let i = 0; i < len; i++) {
  let count = 0;
  for(let a of input[i]){
    if(a === '('){
      count+= 1;
    }else{
      count+= -1;
    }

    if(count<0) break;  
  }


 result.push(count === 0 ? 'YES' : "NO");

}

console.log(result.join('\n'));