/*
문제
정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

명령은 총 여섯 가지이다.

push X: 정수 X를 큐에 넣는 연산이다.
pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
size: 큐에 들어있는 정수의 개수를 출력한다.
empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
입력
첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 2,000,000)이 주어진다. 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 문제에 나와있지 않은 명령이 주어지는 경우는 없다.

출력
출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.
*/

const input = require("fs").readFileSync("text.txt").toString().trim().split("\r\n");

// 큐를 위한 클래스 정의
class Queue {
    constructor() {
        this.head = null;  // 큐의 맨 앞을 가리키는 포인터
        this.tail = null;  // 큐의 맨 뒤를 가리키는 포인터
        this.size = 0;     // 큐의 현재 크기
    }

    // 새 노드 생성을 위한 헬퍼 함수
    createNode(value, prev, next) {
        return {
            value,  // 노드에 저장될 값
            prev,   // 이전 노드를 가리키는 포인터
            next    // 다음 노드를 가리키는 포인터
        };
    }

    // 큐의 뒤쪽에 요소를 추가
    push(value) {
        const curNode = this.createNode(value, this.tail, this.head);
        if (this.head) {
            // 큐가 비어있지 않은 경우, tail과 head를 업데이트
            this.tail.next = curNode;
            this.head.prev = curNode;
            this.tail = curNode;
        } else {
            // 큐가 비어있는 경우, head와 tail 모두 curNode를 가리킴
            this.head = curNode;
            this.tail = curNode;
            curNode.prev = curNode;
            curNode.next = curNode;
        }
        this.size++;
    }

    // 큐의 앞쪽에서 요소를 제거
    pop() {
        if (this.size > 2) {
            // 큐의 크기가 2 이상인 경우
            const value = this.head.value;
            this.head = this.head.next;
            this.head.prev = this.tail;
            this.tail.next = this.head;
            this.size--;
            return value;
        } else if (this.size === 2) {
            // 큐의 크기가 2인 경우
            const value = this.head.value;
            this.head = this.tail;
            this.tail.prev = this.tail;
            this.tail.next = this.tail;
            this.size--;
            return value;
        } else if (this.size === 1) {
            // 큐의 크기가 1인 경우
            const value = this.head.value;
            this.head = null;
            this.tail = null;
            this.size--;
            return value;
        } else {
            // 큐가 비어있는 경우
            return -1;
        }
    }

    // 큐가 비어 있는지 확인
    empty() {
        return this.size ? 0 : 1;
    }

    // 큐의 맨 앞 요소 반환
    front() {
        return this.head ? this.head.value : -1;
    }

    // 큐의 맨 뒤 요소 반환
    back() {
        return this.tail ? this.tail.value : -1;
    }
}

//명령어 처리 및 출력
const myQueue = new Queue();  // 큐 인스턴스 생성
const output = [];            // 출력을 저장할 배열

// 입력받은 명령어들을 처리
for (let i=1; i<input.length; i++) {
    const [command, value] = input[i].split(" ");
    switch(command) {
        case "push": 
            myQueue.push(value); 
            break;  // 값을 큐에 push

        case "pop": 
            output.push(myQueue.pop()); 
            break;  // 큐에서 pop

        case "size": 
            output.push(myQueue.size); 
            break;  // 큐의 크기 출력

        case "empty": 
            output.push(myQueue.empty()); 
            break;  // 큐가 비었는지 확인

        case "front": 
            output.push(myQueue.front()); 
            break;  // 큐의 front 값 출력

        case "back": 
            output.push(myQueue.back()); 
            break;  // 큐의 back 값 출력
    }
}

// 결과 출력
console.log(output.join("\n"));