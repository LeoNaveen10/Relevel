// console.log("Hello ".repeat(3))
// console.log("Welcome ".repeat(5))
/*
n = 11 (User ODD input)     m = (n + 1) / 2 = 6
                i    .    *
              ---------------
.....*          1    5    1        (i, m, n)
....***         2    4    3   . => (m - i)
...*****        3    3    5
..*******       4    2    7   * => (2 * i - 1)
.*********      5    1    9
***********   __6____0___11__ 
.*********      7    1    9
..*******       8    2    7   . => (i - m)
...*****        9    3    5
....***        10    4    3   * => (2 * (n - i) + 1)
.....*         11    5    1
              ---------------
               Tracing Table
*/
const readline = require("readline-sync")
function pattern2(n) {
    if (n % 2 == 0) {
        console.log("Please provide ODD layer number...")
        return
    }
    m = (n + 1) / 2;
    console.log("Value of m =", m)
    for(i = 1; i <= n; i++) {
        if (i > m) {
            d = (i - m)
            s = (2 * (n - i) + 1)
        } else {
            d = (m - i)
            s = (2 * i - 1)
        }
        console.log(".".repeat(d) + "*".repeat(s))
    }
}

// pattern2(13)
// pattern2(10)
// pattern2(12)
n = Number(readline.question("Please enter ODD layer number: "))
pattern2(n)


// console.log("Hello ".repeat(3))
// console.log("Welcome ".repeat(5))
/*
n = 11 (User ODD input)     m = (n + 1) / 2 = 6
                i    .    *
              ---------------
***********     1    0   11        (i, m, n)
.*********      2    1    9   . => ()
..*******       3    2    7
...*****        4    3    5   * => ()
....***         5    4    3
.....*        __6____5____1__ 
....***         7    4    3
...*****        8    3    5  . => ()
..*******       9    2    7
.*********     10    1    9  * => ()
***********    11    0   11
              ---------------
               Tracing Table
*/
const readline = require("readline-sync")
function pattern2(n) {
    if (n % 2 == 0) {
        console.log("Please provide ODD layer number...")
        return
    }
    m = (n + 1) / 2;
    console.log("Value of m =", m)
    for(i = 1; i <= n; i++) {
        if (i > m) {
            d = (i - m)
            s = (2 * (n - i) + 1)
        } else {
            d = (m - i)
            s = (2 * i - 1)
        }
        console.log(".".repeat(d) + "*".repeat(s))
    }
}

// pattern2(13)
// pattern2(10)
// pattern2(12)
n = Number(readline.question("Please enter ODD layer number: "))
pattern2(n)