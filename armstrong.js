function armstrongCheck(num) {
    let no_of_digits = num.length
    // console.log(num, no_of_digits)
    temp = num
    total = 0
    while (temp != 0) {
        last_digit = temp % 10
        total = total + last_digit ** no_of_digits
        temp = parseInt(temp / 10)
    }
    if (total == num) console.log(num, "is Armstrong number...")
    else console.log(num, "is not an Armstrong number...")
}

armstrongCheck("1023")
armstrongCheck("153")
armstrongCheck("7")