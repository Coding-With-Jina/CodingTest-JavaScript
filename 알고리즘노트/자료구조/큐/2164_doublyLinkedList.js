/*
문제
N장의 카드가 있다. 각각의 카드는 차례로 1부터 N까지의 번호가 붙어 있으며, 
1번 카드가 제일 위에, N번 카드가 제일 아래인 상태로 순서대로 카드가 놓여 있다.

이제 다음과 같은 동작을 카드가 한 장 남을 때까지 반복하게 된다. 
우선, 제일 위에 있는 카드를 바닥에 버린다. 그 다음, 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.

예를 들어 N=4인 경우를 생각해 보자. 카드는 제일 위에서부터 1234 의 순서로 놓여있다. 
1을 버리면 234가 남는다. 여기서 2를 제일 아래로 옮기면 342가 된다. 
3을 버리면 42가 되고, 4를 밑으로 옮기면 24가 된다. 마지막으로 2를 버리고 나면, 남는 카드는 4가 된다.

N이 주어졌을 때, 제일 마지막에 남게 되는 카드를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정수 N(1 ≤ N ≤ 500,000)이 주어진다.

출력
첫째 줄에 남게 되는 카드의 번호를 출력한다.
*/
/* 시.간.초.과!!! 😡😡😡
const fs = require('fs');
const input = fs.readFileSync('text.txt').toString().trim().split(" ");
const N = input.map(Number);
const card = [];

while(card.length<N){//1부터 N번까지 카드생성
    for(let i=0; i<N;i++){
        card.push(Number(i+1));
    }
}

card.reverse(); //1번 카드가 제일 위에 있어서 뒤집음 

//console.log(card);//[ 6, 5, 4, 3, 2, 1 ]
  
while(true){//카드가 한개 남을때까지 위에서부터 하나씩 버리고 바로 다음 숫자 맨 앞으로 보내기
    if(card.length<2){//카드가 1장 남았을때 멈춤
        //console.log(card);
        break;
    }
    for(let i=1;i<N;i++){ 
            card.pop(); //위에서 하나 버리고
            let moveNum = card.pop(); //앞으로 보낼 숫자 삭제하고
            card.unshift(moveNum); //앞에다 밀어넣기
    }
}

console.log(card.join());
*/

const fs = require('fs');
const input = fs.readFileSync('text.txt').toString().trim().split(" ");
// const N = input.map(Number);
// const card = [];

// while(card.length<N){//1부터 N번까지 카드생성
//     for(let i=0; i<N;i++){
//         card.push(Number(i+1));
//     }
// }

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
        this.length++;
        return newNode;
    }

    getHead(){
        return this.head.value;
    }

    removeHead(){
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }

    getSize(){
        return this.length;
    }
}

const list = new LinkedList();

for(let i = 1; i <= input; i++) {
    list.push(i)
};

for(;;){//for(;;) 어떤 조건이 충족 될때까지 무한 루프
    if(list.getSize() <= 1) {
        break;
    };

    list.removeHead();
    list.push(list.getHead());
    list.removeHead();
}

console.log(list.getHead());


