function fibonacciSeries(number) {
    let series = [0,1]
    for (let i = 2; i < number; i++) {
        series[i] =  series[i-1] + series[i-2]
    }
    return series
}

console.log(fibonacciSeries(10))