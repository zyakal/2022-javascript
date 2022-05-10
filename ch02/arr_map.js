var arr = [2, 6, 10, 11, 22, 1, 7];
var resultArr = arr.map(function(item, idx){
    return item + 1;
})
console.log(arr);
console.log(resultArr);


var result2Arr = arr.map(function(item, idx){
        if(item<10){
            return item*2;
        }
        return item;
    }); 



console.log(result2Arr);