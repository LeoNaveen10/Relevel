/**
 * tower of hanoi



 Tower of Hanoi is a mathematical puzzle where we have three rods (A, B, and C) and N disks. Initially, all the disks are stacked in decreasing value of diameter i.e., the smallest disk is placed on the top and they are on rod A. The objective of the puzzle is to move the entire stack to another rod (here considered C), obeying the following simple rules: 

Only one disk can be moved at a time.
Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
No disk may be placed on top of a smaller disk.

solution:
  move everything from x to z using y in between

  1. source, aux, to
  2. aux , to , source
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
