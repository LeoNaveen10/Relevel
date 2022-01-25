const r = require("readline-sync");

no = r.question("Enter no of elements in a array");
var arr = [];
for (let i = 0; i < no; i++) {
    if (i == 0)
        arr[i] = Number(r.question(`enter ${i + 1}st number`))
    else if (i == 1)
        arr[i] = Number(r.question(`enter ${i + 1}nd number`))
    else if (i == 2)
        arr[i] = Number(r.question(`enter ${i + 1}rd number`))
    else
        arr[i] = Number(r.question(`enter ${i + 1}th number`))
}

//console.log(arr);   to check


var findmean = (temparr) => {
    let sum = 0;
    temparr.forEach(element => {
        sum += element;
    });

    return (parseInt(sum / temparr.length));
}


console.log("Mean of the given array is", findmean(arr));

function variance(mean_Value, temparr)//mean=2 for arr=[1,2,3];
{
    let resultarr = temparr.map(element => {
        return Math.pow((element - mean_Value), 2);
    });

    let sum = 0;
    resultarr.forEach(element => {
        sum += element;
    });

    return parseInt(sum / temparr.length);
}


console.log("the variance of the given array is", variance(findmean(arr), arr));

function standard_deviation(variance_value) {
    return Math.sqrt(variance_value);
}

console.log("The standard deviation of the given array is", standard_deviation(variance(findmean(arr), arr)));


function median(temparr) {
    let median_value;
    if (temparr.length % 2 == 0) {  //even nos
           median_value=temparr[temparr.length/2]+temparr[(temparr.length/2)-1];
           return median_value/2;
    }
    else { //odd nos
          median_value= temparr[Math.floor(temparr.length/2)];
          return median_value;
        }
}


 console.log("Median value for the given array is",median(arr));


 function mode(temp_mean,temp_median){              //mode=mean-3(mean-median);
            return temp_mean-3*(temp_mean-temp_median);
 }

 console.log("The mode of the given array is ", mode(findmean(arr),median(arr)));