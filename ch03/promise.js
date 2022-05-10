var num = 11;
// resolve와 reject는 함수
var p1 = new Promise(function(resolve, reject){
    if(num >= 10) {
        resolve(1); //보통 잘 실행됐을때
    }
    else {
        reject(2);  //에러가 발생했을때
    }
});

p1.then(function(result){
    console.log('then : ' + result);
}).catch(function(result) {
    console.log('catch : ' + result);
});