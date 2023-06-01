function doIndent(tr, indent, cls = '') { // функция для заполнения строки пустыми ячейками
    for (let i = 0; i < indent; i++)
        tr.appendChild(document.createElement('td')).classList = `inv ${cls}`
}

function fill(tr, str, cls = '') { // функция для заполнения строки нужным числом
    str.split('').forEach(c => { let obj = tr.appendChild(document.createElement('td'))
                               obj.innerHTML = c
                               obj.classList = cls });
}

document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('#table')

    let a = '64595654334' // множимое
    let b = '12312321312'  // множитель

    if (eval(`${b}>${a}`)) [a,b] = [b,a] // в переменной "а" всегда большее число

    const edge =  b.length + (a * b[0]).toString().length // итоговое количество ячеек в строке
    let indent = edge // текущий отступ

    let task1 = table.appendChild(document.createElement('tr'))
    doIndent(task1, indent - a.length - 1)
    fill(task1, a) // выводим множимое

    let task2 = table.appendChild(document.createElement('tr'))
    doIndent(task2, indent - b.length - 1, 'bottom')
    fill(task2, b, 'bottom') // выводим множитель

    for (let i = b.length-1; i >= 0; i--) { // поочередные операции умножения множимого на числа множителя
        let tr = table.appendChild(document.createElement('tr'))
        const num = eval(`${b[i]} * ${a}`).toString() // текущее число, которое будет выведено
        
        doIndent(tr, indent - num.length - 1, i == 0 ? 'bottom' : '') // добавляем пустые ячейки до
        fill(tr, num, i == 0 ? 'bottom' : '') // выводим промежуточное число
        doIndent(tr, edge - indent, i == 0 ? 'bottom' : '') // добавляем пустые ячейки после

        indent--
    }

    // выводим ответ
    let answer = table.appendChild(document.createElement('tr'))
    const num = eval(`${a * b}`).toString() // текущее число, которое будет выведено
    num.split('').forEach(c => { answer.appendChild(document.createElement('td')).innerHTML = c })
    console.log(num) // выводим ответ в консоль
})
