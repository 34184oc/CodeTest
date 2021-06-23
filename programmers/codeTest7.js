// 두 수를 뽑아서 더하는 문제 :3

function solution(numbers) {
  const answer = [];
  
  for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
       const sum = numbers[i] + numbers[j];
          if (answer.indexOf(sum) < 0) answer.push(sum);
      }
  }
  answer.sort((a,b) => a - b);
  return answer;
}