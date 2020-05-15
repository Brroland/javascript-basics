const countElement = (arr, element) => {	// development comment for commit
    let count =0;
    for (let i=0; i < arr.length; i++){
        if (arr[i] === element) {
            count++;
        }

    }
    return count;
};
module.exports = {
	countElement
}
