function firstTask() {
    let num = 5
    while (num < 10){
        console.log(num);
        num++
    }

    return num
}
console.log(firstTask())


// При помощи цикла for вывести числа от 20 до 10 в консоль. 
// В обратном порядке (20, 19, 18...). 
// Когда цикл дойдет до числа 13 - остановить весь цикл
function secondTask() {
    for (i=20; i >= 1 ; i--){
        if (i === 13) {
            break;
        }
        console.log(i);

    }
    return i
}  
console.log (secondTask());




// При помощи цикла for выведите чётные числа от 2 до 10 включительно

function thirdTask() {
    for (i=2; i < 10; i++){
        if(i % 2===0 || i == 10){
            console.log(i);
           
        }
    }
    return i
}
console.log(thirdTask());



// Перепишите цикл  for на вариант с while. 
// Результат должен остаться точно таким же. 
// Не создайте бесконечный цикл! Иначе браузер может зависнуть.


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// 3
// 5
// 7
// 9
// 11
// 13
// 15


for (let i = 2; i <= 16; i++) {
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
}

let numbers = 17;
while (numbers < 16){
    console.log(numbers);
     
}