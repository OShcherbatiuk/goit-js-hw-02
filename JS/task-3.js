const findLongestWord = function (string) {
    
    const newArray = string.split(' ')
    const longestWord = '';

    for (let i = 0; i < newArray.lenght; i +=1) {
        if (newArray[i].lenght > longestWord.lenght) {
            longestWord = newArray[i]
        }
    }

    return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'