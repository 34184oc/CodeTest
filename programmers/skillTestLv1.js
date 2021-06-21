// 숫자 n을 하나씩 나눠 각각의 수를 더한 값을 구하는 코드짜기
// ex) n = 123 answer = 6

function solution(n) {
  let answer = 0;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
      answer += parseInt(n.charAt(i));
  }
  return answer;
}