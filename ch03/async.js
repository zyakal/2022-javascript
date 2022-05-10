console.log('A');
setTimeout(function() {
    console.log('B');
    setTimeout(function() {
        console.log('C');
        setTimeout(function() {
            console.log('D');
        }, 500);
    }, 1000);
    
    
    
}, 2000);

// 싱글 스레드, 비동기 방식 예시 --> 콜백지옥
// 통신쪽은 프라미스를 꼭 씀





