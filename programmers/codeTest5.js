// 2차원배열 두 개를 더한 값을 반환하기

function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
      answer[i] = [];
      for (let j = 0; j < arr1[i].length; j++) {
          answer[i].push(arr1[i][j] + arr2[i][j]);
      }
  }
  return answer;
}