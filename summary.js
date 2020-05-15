const sumArray = (arr) => {	// first comment and must have comment on development
    let sum = 0;
    for(const element of arr) {
        sum+= element;
    }
    return sum;
};
module.exports = {
	sum: sumArray
}
