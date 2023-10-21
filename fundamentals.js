// questions on left, answers on right as comments

"" + 1 + 0 // 10 ; + concatenates
"" - 1 + 0 // -1 
true + false // 1 
!true // false
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
"   -9   " + 5 //  -9 5
"   -9   " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
undefined == null // true
undefined === null // false
" \t \n" - 2 // -2

let three = "3"
let four = "4"
let thirty = "30"

let addition = three + four // 34; incorrect; + concatenates strings. we should use numbers instead of strings
let multiplication = three * four // 12; correct; *, /, and - automatically convert strings to numbers
let division = three / four // .75; correct
let subtraction = three - four // -1; correct

let lessThan1 = three < four // true; correct
let lessThan2 = thirty < four /* true; incorrect; JS compares strings character by character, so it compares the 
     3 from "30" and the 4 from "4" and sees that 3 < 4 = true. to fix this, we need to use numbers instead of strings */
     let lessThan3 = 30 < 4

// if (0) console.log('#1 zero is true') // will not print; 0 is false
// if ("0") console.log('#2 zero is true') // will print; non-empty strings are true
// if (null) console.log('null is true') // will not print; null is false
// if (-1) console.log('negative is true') // will print; numbers that are not 0 are true
// if (1) console.log('positive is true') // will print; 1 is not 0