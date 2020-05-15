const separate = (src) => {	// separating into 2 arrays
  const evens = [];
  const odds = [];
  let evenIndex = 0;
  let oddIndex = 0;
  for (let i = 0; i < src.length; i++) {
    if (src[i] % 2 === 0) {
      evens[evenIndex++] = src[i];
    } else {
      odds[oddIndex++] = src[i];
    }
  }
  return {
    evens,
    odds
  };
};
module.exports {
	separate
}
