/*
문제
후위 표기식과 각 피연산자에 대응하는 값들이 주어져 있을 때, 그 식을 계산하는 프로그램을 작성하시오.

입력
첫째 줄에 피연산자의 개수(1 ≤ N ≤ 26) 가 주어진다. 그리고 둘째 줄에는 후위 표기식이 주어진다. 
(여기서 피연산자는 A~Z의 영대문자이며, A부터 순서대로 N개의 영대문자만이 사용되며, 길이는 100을 넘지 않는다) 
그리고 셋째 줄부터 N+2번째 줄까지는 각 피연산자에 대응하는 값이 주어진다. 
3번째 줄에는 A에 해당하는 값, 4번째 줄에는 B에 해당하는값 , 5번째 줄에는 C ...이 주어진다, 
그리고 피연산자에 대응 하는 값은 100보다 작거나 같은 자연수이다.

후위 표기식을 앞에서부터 계산했을 때, 식의 결과와 중간 결과가 -20억보다 크거나 같고, 20억보다 작거나 같은 입력만 주어진다.

출력
계산 결과를 소숫점 둘째 자리까지 출력한다.

1. 스택 준비: 빈 스택을 준비합니다.
2. 입력 처리: 입력된 후위 표기식을 왼쪽에서 오른쪽으로 한 문자씩 읽습니다.
3. 피연산자 처리:숫자를 만나면 스택에 푸시(push)합니다.
4. 연산자 처리:연산자를 만나면, 스택에서 피연산자 두 개를 팝(pop)합니다. 첫 번째 팝된 요소를 오른쪽 피연산자로, 두 번째 팝된 요소를 왼쪽 피연산자로 설정합니다.
두 피연산자에 대해 연산을 수행한 후, 그 결과를 다시 스택에 푸시합니다.
5. 계산 완료:표현식의 끝에 도달하면 스택에 남아 있는 값이 계산 결과가 됩니다. 이 값을 팝하여 최종 결과를 얻습니다.


*/


let input = require("fs").readFileSync("text.txt").toString().trim().split("\r\n");
const len = Number(input.shift());//첫번째줄 피연산자 개수
const postFix= input.shift().split("");//두번째줄 후위 표기식

input = input.map((item) => Number(item));//1, 2, 3, 4, 5

//console.log("postFix = "+postFix);//A,B,C,*,+,D,E,/,-
  



//input에 담긴 숫자들을 A-Z 순서대로 매칭
let idx = 65;//idx 에 65를 설정하고
let dict = {};
for(let i=0; i<input.length;i++){//알파벳으로 변환하여 주어지는 숫자의 길이만큼 for 문을 돌려서 A부터 차례대로 숫자를 할당
    dict[String.fromCharCode(idx)]=Number(input[i]);
    idx+=1;
}


//console.log(dict);//{ A: 1, B: 2, C: 3, D: 4, E: 5 }

const stack = [];

for(let char of postFix){
    if(char !== '*' && char !== '+' && char !== '/' && char !== '-'){//숫자를 만나면 stack에 push 
        stack.push(dict[char]); //미리 만들어둔 dict에 value값(숫자)으로 push 
    }
    let popNum = 0;
    switch(char){
        case '*':
            popNum = parseFloat(stack[stack.length-2])*parseFloat(stack[stack.length-1]);
            //console.log("popNum = "+popNum);
            stack.pop();
            stack.pop();
            stack.push(popNum);
            break;
        case '+':
            popNum = parseFloat(stack[stack.length-2])+parseFloat(stack[stack.length-1]);
            //console.log("popNum = "+popNum);
            stack.pop();
            stack.pop();
            stack.push(popNum);
            break;  
        case '/':
            popNum = parseFloat(stack[stack.length-2])/parseFloat(stack[stack.length-1]);
            //console.log("popNum = "+popNum);
            stack.pop();
            stack.pop();
            stack.push(popNum);
            break; 
        case '-':
            popNum = parseFloat(stack[stack.length-2])-parseFloat(stack[stack.length-1]);
            //console.log("popNum = "+popNum);
            stack.pop();
            stack.pop();
            stack.push(popNum);
            break;                               
    }
}
console.log(parseFloat(stack.join("\n")).toFixed(2)); //A+B*C-D/E //소수점 2자리까지 나타내기위해 toFixed(2)사용
