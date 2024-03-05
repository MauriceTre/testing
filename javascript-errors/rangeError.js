//Folgender Code wirft einen RangeError
const array =[];

try{
    array.length = -1;
}catch(err){
    console.log();
}
