// Question 1:
function makeCounter(startsFrom, incrementBy) {
    let currentCount = startsFrom;

    return function() {
        currentCount += incrementBy;
        console.log(currentCount)
        return currentCount;
    };
}

let counter1 = makeCounter(0, 1);

counter1()
counter1()

let counter2 = makeCounter(5, 5)
counter2()
counter2()
counter2()
counter2()
counter1()
