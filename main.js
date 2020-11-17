/*
Задача сложить все цифры дня рождения формата "1983-14-18"
1+9+8+3  +  1+4  +  1+8 = 35 = 8
Вопрос во вложенном цикле (не подсчитывается сумма allSum = 0)
И возможно этот код упростить?
Ответь по возможности
*/

function sumNum(date) {
    let arrDate = date.split("-")
            console.log(arrDate)
        allSum = 0
        console.log(allSum)   
    for (let i=0; i<=arrDate.length-1; i++){
            let way = arrDate[i].split("")
                console.log(way)                   
            let numWay = way.map(function (item) {   //let numWay = Number(way1) или +
                return parseFloat(item);
            });
                console.log(numWay)
            let sumWay = 0
           
        for(k=0; k<=numWay.length-1; k++){
            sumWay += numWay[k]
        }
            console.log(sumWay)
        allSum += sumWay
    }
}
sumNum("1983-14-18")