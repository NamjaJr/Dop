// var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol', 'br'];
// var tagCount = {}
//
// for (let tag of tags){
//     if (tagCount[tag]) {
//         tagCount[tag]++
//     }else{
//         tagCount[tag] = 1
//     }
// }
//
// console.log(tagCount)

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