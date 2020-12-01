const logItems = function(array) {
    let result;
    for (let i = 0; i < array.lenght; i += 1){
        result += `${i+1} - ${array[i]}`
    }
    console.log(result)
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));