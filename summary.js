const sumArray = (arr) => {
    let sum = 0;
    for(const element of arr) {
        sum+= element;
    }
    return sum;
};
module.exports = {
	sum: sumArray
}
