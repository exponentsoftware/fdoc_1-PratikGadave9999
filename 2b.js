var array = [];
while(array.length < 7){
    var r = Math.floor(Math.random() * 10) + 1;
    if(array.indexOf(r) === -1)
    {
        array.push(r);
    }
}
console.log(array);