/*
문제
준규가 가지고 있는 동전은 총 N종류이고, 각각의 동전을 매우 많이 가지고 있다.

동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다. 이때 필요한 동전 개수의 최솟값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N과 K가 주어진다. (1 ≤ N ≤ 10, 1 ≤ K ≤ 100,000,000)

둘째 줄부터 N개의 줄에 동전의 가치 Ai가 오름차순으로 주어진다. (1 ≤ Ai ≤ 1,000,000, A1 = 1, i ≥ 2인 경우에 Ai는 Ai-1의 배수)

출력
첫째 줄에 K원을 만드는데 필요한 동전 개수의 최솟값을 출력한다.
*/

const input = require("fs").readFileSync("text.txt").toString().trim().split("\r\n");
const [N, K] = input.shift().split(" ").map(Number); //첫째줄 N과 K 저장
const coins = input.map(Number);


//console.log(N);
//console.log(K);
//console.log(coins);

//그리디알고리즘
//특정 값을 채우기 위해서 먼저 가장 큰 수를 선택하고
//그 다음 큰 수를 선택하고 해서 점점 낮은 수를 선택하게 하기

//4200원을 채우기 위해서 
//채우고자 하는 자리수에 맞는 큰수를 선택 (4200원은 4자리숫자니까 1000원 또는 5000원 선택)
//coins의 요소와 4200을 가장 큰수에서부터 비교해서 4200보다 작은 수를 선택하게 하기
//선택한 숫자를 4200에서 빼고 똑같이 또 비교하기 

//N:10, K:4200

let coinCnt = 0;
let cal = K;
let coinSave = 0; // coinSave 초기화

for (let i = N - 1; i >= 0; i--) { // 배열의 첫 번째 요소까지 포함하도록 변경
    const coin = coins[i];
    while (cal !== 0 && coin <= cal) { // 두 조건을 하나의 while문에 결합
        coinSave += coin;
        coinCnt += 1; // 사용된 코인 개수 카운팅
        cal -= coin; // 사용한 코인 기본 금액에서 차감하면서 남은 액수 계속 반복 계산
        if (coinSave === K) {
            break;
        }
    }
    if (coinSave === K) { // 외부에서도 체크하여 중복 계산 방지
        break;
    }
}

console.log(coinCnt);

  