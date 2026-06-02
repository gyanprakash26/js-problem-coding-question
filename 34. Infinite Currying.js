function sum(a) {
    return function b(b){
        if(b){
            return sum(a+b);
    }
    return a
}

}
console.log(sum(1)(2)(3)(4)())