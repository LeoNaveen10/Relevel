/**
 * given no=84 , base=8
 */

let exponent = (no, base, ans, exp) => {
    if (ans >= no) {
        if (ans == no){
            console.log(exp-1);
            return;
        }
        else{
            console.log(exp-2);
            return;
    }
}
    ans= Math.pow(base,exp++);
    exponent(no, base, ans, exp);
}
let exp=1,base=8;
exponent(84, base, 0, exp);

