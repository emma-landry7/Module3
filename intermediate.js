function ucFirstLetters(string) {
    let separate = string.split(' ');
    for (let i = 0; i < separate.length; i++) {
        separate[i] = separate[i].charAt(0).toUpperCase() +
        separate[i].substring(1);
    };
    return separate.join(' ');
}

console.log(ucFirstLetters("los angeles")) //Los Angeles

// function truncate(str, max) {
//     if (str.length <= max) {
//         return str;
//     };
//     return str.slice(0, max) + '...'
// }

const truncate = function(str, max) {
    if (str.length <= max) {
        return str;
    };
    return str.slice(0, max) + "..."
}

console.log(truncate('This text will be truncated if it is too long', 25)) //This text will be truncat...
console.log(truncate("This is a test of my declaration function", 15))
console.log(truncate('Test 2 of my declaration function', 50))

