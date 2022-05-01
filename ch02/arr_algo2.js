var arr = { 
    '0': 2,
    '1': 6,
    '2': 10,
    '3': 11,
    '4': 22,
    '5': 1,
    '6': 7,
    'length' : 7,
    'forEach' : function(cb) {
        for(var i=0; i<this.length; i++){
            cb(this[i]);
            console.log(this[i]);
        }
        
    }

}
var sum2= 0;

arr.forEach(function(item){
    sum2 += item;
});
console.log(`Sum : ${sum2}`);

뭐 어떻게 되어가고 있는건가