var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br'];
var tagCount = {}

for (let tag of tags){
    if (tagCount[tag]) {
        tagCount[tag]++
    }else{
        tagCount[tag] = 1
    }
}

console.log(tagCount)

function averageOfPositivNumbers(arr){
    let sum = 0
    let count = 0

    for (let i = 0; i< arr.length; i++) {
        if (arr[i] > 0){
            sum += arr[i]
            count++
        }
    }
    if (count === 0) {
        return 'Нет'
    }
    return sum / count
}

var numbers = [2, -78, 45,4,-7,-6,-10, 26, 30, 8]
console.log(averageOfPositivNumbers(numbers))




function sumOfPositiveSquares(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            const square = arr[i] * arr[i];
            sum += square;
        }
    }
    return sum;
}
const array = [1, -2, 3, -4, 5, 6, -7];
const result = sumOfPositiveSquares(array);
console.log("Сумма квадратов положительных чисел:", result);


const words = ['text', 'frontend', 'apple', 'table', 'tea', 'JavaScript'];
function filterWordsWithTAndA(words) {
    const filteredWords = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase();
        if (word.includes('t') && word.includes('a')) {
            filteredWords.push(words[i]);
        }
    }
    return filteredWords;
}
const result1 = filterWordsWithTAndA(words);
console.log(result1);
