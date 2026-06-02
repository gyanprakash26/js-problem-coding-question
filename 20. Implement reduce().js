Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator
            ? callback(accumulator, this[i], i, this)
            : this[i];
    }

    return accumulator;
};