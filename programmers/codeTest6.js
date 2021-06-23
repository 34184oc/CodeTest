// x만큼 간격이 있는 n개의 숫자 구하기
// push와 for문의 조건을 사용하여 해결

function solution(x, n) {
  let answer = [];
  
  for (let i = 1; i <= n; i++) {
      answer.push(x * i);
  }

  return answer;
}