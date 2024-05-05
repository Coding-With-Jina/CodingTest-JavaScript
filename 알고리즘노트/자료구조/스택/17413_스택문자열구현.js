/*
문제
문자열 S가 주어졌을 때, 이 문자열에서 단어만 뒤집으려고 한다.

먼저, 문자열 S는 아래와과 같은 규칙을 지킨다.

알파벳 소문자('a'-'z'), 숫자('0'-'9'), 공백(' '), 특수 문자('<', '>')로만 이루어져 있다.
문자열의 시작과 끝은 공백이 아니다.
'<'와 '>'가 문자열에 있는 경우 번갈아가면서 등장하며, '<'이 먼저 등장한다. 또, 두 문자의 개수는 같다.
태그는 '<'로 시작해서 '>'로 끝나는 길이가 3 이상인 부분 문자열이고, '<'와 '>' 사이에는 알파벳 소문자와 공백만 있다. 단어는 알파벳 소문자와 숫자로 이루어진 부분 문자열이고, 연속하는 두 단어는 공백 하나로 구분한다. 태그는 단어가 아니며, 태그와 단어 사이에는 공백이 없다.

입력
첫째 줄에 문자열 S가 주어진다. S의 길이는 100,000 이하이다.

출력
첫째 줄에 문자열 S의 단어를 뒤집어서 출력한다.


예제 입력 1 
baekjoon online judge
예제 출력 1 
noojkeab enilno egduj
*/

const input = require('fs').readFileSync("text.txt").toString().trim();
    let result = '';          // 결과를 저장할 빈 문자열
    let currentWord = '';     // 현재 단어를 임시로 저장할 문자열
    let insideTag = false;    // 태그 안에 있는지 여부를 확인하는 플래그

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (char === '<') {  // 태그 시작을 발견했을 때
            // 태그 시작 전에 처리 중이던 단어가 있다면 뒤집어서 결과에 추가
            if (currentWord) {
                result += currentWord.split('').reverse().join('');
                currentWord = '';  // 처리가 끝난 단어 초기화
                //console.log(result);
            }
            insideTag = true;   // 태그 안에 들어갔음을 표시
            result += char;     // 결과 문자열에 태그 시작 기호('<') 추가
        } else if (char === '>') {  // 태그 끝을 발견했을 때
            insideTag = false;  // 태그에서 나왔음을 표시
            result += char;     // 결과 문자열에 태그 끝 기호('>') 추가
        } else if (insideTag) {  // 태그 내부의 문자 처리
            result += char;     // 태그 내부의 문자는 그대로 결과에 추가
        } else if (char === ' ') {  // 공백 문자를 만났을 때
            // 공백 전에 단어가 있었다면 뒤집어서 결과에 추가
            if (currentWord) {
                result += currentWord.split('').reverse().join('');
                currentWord = '';  // 처리가 끝난 단어 초기화
            }
            result += char;     // 결과 문자열에 공백 추가
        } else {  // 일반적인 단어의 문자 처리
            currentWord += char;  // 현재 단어에 문자 추가
        }
    }

    // 문자열 끝에 남아 있는 단어가 있다면 뒤집어서 결과에 추가
    if (currentWord) {
        result += currentWord.split('').reverse().join('');
    }

  console.log(result);  // 최종 문자열 반환
