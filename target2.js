function inverterString(string) {
    let invertedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        invertedString += string[i];
    }
    return invertedString;
}

console.log("String original:", entrada);
console.log("String invertida:", stringInvertida);