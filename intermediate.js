function ucFirstLetters(string) {
    let separate = string.split(' ');
    for (let i = 0; i < separate.length; i++) {
        separate[i] = separate[i].charAt(0).toUpperCase() +
        separate[i].substring(1);
    };
    return separate.join(' ');
}

console.log(ucFirstLetters("los angeles")) //Los Angeles