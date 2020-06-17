let numbers, lottery, i

lottery = []
i = 0

while(i<6){
    numbers = Math.ceil(Math.random()*60)
    if(lottery.indexOf(numbers)<0){
        lottery.push(numbers)
        i++
    }
}

function orderingNumbers(a,b){
    return a-b
}

console.log(lottery.sort(orderingNumbers))