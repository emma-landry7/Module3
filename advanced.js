// Question 1:
function makeCounter(startsFrom, incrementBy) {
    let currentCount = startsFrom;

    return function() {
        currentCount += incrementBy;
        console.log(currentCount)
        return currentCount;
    };
}

// let counter1 = makeCounter(0, 1);

// counter1()
// counter1()

// let counter2 = makeCounter(5, 5)
// counter2()
// counter2()
// counter2()
// counter2()
// counter1()

// Question 2:
// a) they will print in this order: #4, #3, #2, #1

// function delayMsg(msg) {
//     console.log(`This message will be printed after a delay: ${msg}`)
// }
const delayMsg = (msg) => console.log(`This message will be printed after a delay: ${msg}`)

// setTimeout(delayMsg, 100, '#1: Delayed by 100ms')
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms')
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms')
// delayMsg('#4: Not delayed at all')

// let canceledMsg = setTimeout(delayMsg, 15000, '#5: Delayed by 15 seconds')
// clearTimeout(canceledMsg)

// Question 3:
// let msg = 'default'
// function printMe() {
//     console.log(`printing debounced message: ${msg}`)
// }

// console.log('Go!')
// printMe = debounce(printMe, 2000, 'hello') 
// function debounce(func, ms, message) {
//     let timer;
//     msg = message
//     return function() {
//         clearTimeout(timer);
//         timer = setTimeout(() => {func()}, ms);
//     }
// }

// setTimeout(printMe, 100)
// setTimeout(printMe, 200)
// setTimeout(printMe, 300)

// Question 4:
