var n1 = 10;
var s1 = '20';
s1 = parseInt(s1);  // 자료형태 변환

console.log(n1 + s1);

var s2 = '20';
s2 = Number(s2);
console.log(n1 + s2);

console.log('Number : ' + parseInt("12a34"));
console.log('Number : ' + Number("12a34"));