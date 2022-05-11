var p1 = new Promise(function(resolve) {
    resolve(1);
});
// 10을 리턴하더라도 새로운 promise 객체를 생성한다
var p2 = p1.then(function(result){
    return 10;
});

p2.then(function(result){
    console.log('result : ' + result);
});