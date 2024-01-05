/**
 * tower of hanoi
 */

let count =0
function Toh(n,x,y,z){
    if(n>=1){
        Toh(n-1,x,y,z);
        console.log(`movement of ${n} from ${x} to ${y}`);
        count++;
        Toh(n-1,y,z,x);
    }
}

Toh(2,"x","y","z");
console.log("total movement is :", count);
