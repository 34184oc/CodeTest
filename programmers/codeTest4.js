// 입력한 길이의 숫자 중 뒷자리 4개를 제외하고 별(*)표 처리하기

function solution(num) {
  const numLength = num.length - 4;
  
  return "*".repeat(numLength) + num.substring(numLength);
  
}

