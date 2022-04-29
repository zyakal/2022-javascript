var arr = [2, 6, 10, 11, 22, 1, 7];
var resultArr = arr.filter(function(item){
    console.log(item);
    if(item <= 8) {
    return true;}
});

console.log(resultArr);

var newArr = [];
newArr.push(10);
newArr.push(12);
console.log(newArr);
/*
newArr[0] = 10;
newArr[1] = 12;
newArr[5] = 14;


newArr.length = 2;
console.log(newArr);
*/