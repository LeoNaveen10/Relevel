/**
 * [1,0,2,1,1,0,0,2,1]
 * ans : [0,0,0,1,1,1,1,2,2]
 * in time complexity : n
 */

const arr = [1, 0, 2, 1, 1, 0, 0, 2, 1];

let count0 = 0, count1 = 0, count2 = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0)
        count0++;
    else if (arr[i] == 1)
        count1++;
    else
        count2++;
}
let temp=[];


for(let i=0;i<arr.length;i++){
    if(count0!=0){
        count0--;
        temp.push(0);
        continue;
    }
    else if(count1!=0){
        count1--;
        temp.push(1);
        continue;
    }
    else{
        count2--;
        temp.push(2);
    }
}

console.log("method 2",temp);

for(let i=0;i<count0;i++){
    temp.push(0);
}

for(let i=count0;i<count0+count1;i++){
    temp.push(1);
}
for(let i=(count0+count1);i<(count0+count1+count2);i++){
    temp.push(2);
}

console.log("method 1",temp);
temp.length=0;
