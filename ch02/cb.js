function sum(n1, n2) {
    return n1 + n2;
}

var ddd = sum; //js 의 function은 1급객체라 주소값을 줄 수있따.

console.log(ddd(10,20));

function sum(n1, n2) {
    console.log(1111);
}

console.log(ddd(10,20));
