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
        }
    },
    'filter' : function(cb) {
            var tempArr = [];
            for(var i=0 ; i<this.length; i++)
            {
                var val = this[i];
                if(cb(val, i)) {
                    tempArr.push(this[i]);
                }

            }
            
            return tempArr;
    },
    'map' : function (cb) {
        var tempArr = [];
        for(var i=0 ; i<this.length; i++)
            {
                //var val = this[i];
                //var result = cb(val);
                //tempArr.push(result);

                tempArr.push(cb(this[i], i));
            }
        return tempArr;

        
    }
        
}



var result2Arr = arr.map(function (item,i){
    if(item < 10){
        return item*2;
    }
    return item;
}); 



console.log(result2Arr); // [4, 12, 10, 11, 22, 2, 14]