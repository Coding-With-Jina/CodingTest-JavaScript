/*
문제
포켓몬 어찌구 저찌구~(너무 길어서 생략)

입력
첫째 줄에는 도감에 수록되어 있는 포켓몬의 개수 N이랑 내가 맞춰야 하는 문제의 개수 M이 주어져. 
N과 M은 1보다 크거나 같고, 100,000보다 작거나 같은 자연수인데, 자연수가 뭔지는 알지? 모르면 물어봐도 괜찮아. 
나는 언제든지 질문에 답해줄 준비가 되어있어.

둘째 줄부터 N개의 줄에 포켓몬의 번호가 1번인 포켓몬부터 N번에 해당하는 포켓몬까지 한 줄에 하나씩 입력으로 들어와. 
포켓몬의 이름은 모두 영어로만 이루어져있고, 또, 음... 첫 글자만 대문자이고, 나머지 문자는 소문자로만 이루어져 있어. 
아참! 일부 포켓몬은 마지막 문자만 대문자일 수도 있어. 포켓몬 이름의 최대 길이는 20, 최소 길이는 2야. 
그 다음 줄부터 총 M개의 줄에 내가 맞춰야하는 문제가 입력으로 들어와. 
문제가 알파벳으로만 들어오면 포켓몬 번호를 말해야 하고, 숫자로만 들어오면, 포켓몬 번호에 해당하는 문자를 출력해야해. 
입력으로 들어오는 숫자는 반드시 1보다 크거나 같고, N보다 작거나 같고, 입력으로 들어오는 문자는 반드시 도감에 있는 포켓몬의 이름만 주어져. 
그럼 화이팅!!!

출력
첫째 줄부터 차례대로 M개의 줄에 각각의 문제에 대한 답을 말해줬으면 좋겠어!!!. 
입력으로 숫자가 들어왔다면 그 숫자에 해당하는 포켓몬의 이름을, 문자가 들어왔으면 그 포켓몬의 이름에 해당하는 번호를 출력하면 돼. 그럼 땡큐~
*/

//문제이해
//2번째줄부터 N줄까지 포켓몬노트에 순서대로 저장하고 
//N+1줄부터 M개까지 나오는 문제에 포켓몬이 나오면 번호를, 번호가 나오면 포켓몬을 출력

/* 시간초과나옴
const input = require('fs').readFileSync('text.txt').toString().trim().split("\r\n");
const [N, M] = input.shift().split(" ").map(Number);//포켓몬의 개수 N(26), 내가 맞춰야 하는 문제의 개수 M(5)

let poketmonNote =[{
    id: "",
    name:"" 
}];

poketmonNote.shift();

for(let i=0; i<N; i++){
    poketmonNote.push({
        id : i+1,
        name : input[i]
    });
}
input.splice(0,N);//포켓몬노트에 있는건 없애고 문제만 남기기

//console.log(input);//[ '25', 'Raichu', '3', 'Pidgey', 'Kakuna' ]

let result = [];

function findId(name){//문자일 경우 이름 받아서 번호 찾기
    let poketmon = poketmonNote.find(poketmon => poketmon.name === name);
    return poketmon ? poketmon.id:null;
}

for(let i = 0; i<M;i++){
    if(!isNaN(input[i])){//숫자일 경우
        result.push(poketmonNote[input[i]-1].name); 
    }
    else if(isNaN(input[i])){//문자일경우
        result.push(findId(String(input[i])));
    }
}

console.log(result.join("\n"));
*/

const fs = require('fs');
const input = fs.readFileSync('text.txt').toString().trim().split("\r\n");
const [N, M] = input.shift().split(" ").map(Number);

const poketmonNote = [];
const poketmonMap = {}; // ID를 키로 사용하여 포켓몬에 대한 빠른 접근을 위한 맵

for (let i = 0; i < N; i++) {
    const name = input[i];
    poketmonNote.push(name);
    poketmonMap[name] = i + 1;
}

const result = [];

for (let i = N; i < N + M; i++) {
    const query = input[i];
    if (!isNaN(query)) { // 숫자일 경우
        result.push(poketmonNote[query - 1]);
    } else { // 문자일 경우
        result.push(poketmonMap[query]);
    }
}

console.log(result.join("\n"));
