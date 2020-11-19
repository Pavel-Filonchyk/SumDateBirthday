function sumNum(date) {
    let arrDate = date.split("-")
    allSum = []
    for (let i=0; i<=arrDate.length-1; i++){
            let way = arrDate[i].split("")                 
            let numWay = way.map(function (item) { 
                return parseFloat(item);
            });
            let sumWay = 0
        for(k=0; k<=numWay.length-1; k++){
            sumWay += numWay[k]
        }
            allSum.push(sumWay)
    }
    let total = allSum.reduce((a, b) => a + b)
    let totalArr = [total]
    let totalAll = (""+totalArr).split("")
        .map(item => Number(item))
        .reduce((a, b) => a + b)
    if(totalAll>=10){
        let totalMax = (""+totalAll).split("")
        .map(item => Number(item))
        .reduce((a, b) => a + b) 
        return totalMax
        }
    console.log(totalAll)
    return totalAll
}
sumNum("1983-14-18")

