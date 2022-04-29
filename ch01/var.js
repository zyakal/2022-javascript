// 변수할당은 총 세가지

var n1;
// es6 전에 쓰던 방식 ,  호이스팅 O

var nn2 = 20;
n1 = 30;
var nn3 = n1 + nn2;

console.log('nn3 : ' + nn3);
console.log('10' + 10); // 자료형이 다르면 문자형이 있을 경우 무조건 문자형으로 변환해서 처리한다.
console.log('10' - 10);
console.log('10' * 10);
console.log('10' / 10);
console.log(10 + 10 + '10');
console.log(10 + 10 * '10');
console.log('10' + 10 + 10);



let n2;  // 변수
const N3= 10; // 상수
// es6 부터 쓰는 방식 , 호이스팅 X