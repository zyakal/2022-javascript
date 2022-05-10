function fn1() {
   
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(10);
        }, 2000);
    });
    
}

function fn2(val) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(val + val);
        }, 1000);
    });
}

var p1 = fn1();
/*
p1.then(function(result){
    console.log(result);
    var p2 = fn2(result);
    p2.then(function(result2) {
        console.log('result2 : ' + result2);
    });
});

*/

p1.then(function(result){
    return result;    
})
. then(function(result){
    return fn2(result);
})
.then(function(result){
    console.log('result :' + result);
});



// resolve 함수를 호출하면 then 함수를 호출하게 되고, then함수를 호출하면 ?

// 내일은 promise 를 await, async를 활용하여 then 을 쓰지않고 작성할 수 있도록
// try catch 와 Ajax 해봄