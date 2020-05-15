const selection = (src1, src2) => {
  const out = [];
  let count = 0;
  for (let i = 0; i < src1.length; i++) {
    for (let j = 0; j < src2.length; j++) { // Eldöntés, ahol a tömb az src2, a keresett elem az src1[i]
      count++;
      if (src1[i] === src2[j] && !out.includes(src1[i])) {
        out.push(src1[i]);
        break;
      }
    }
  }
  console.log('Lépések', count);
  return out;
};
module.exports {
	selection
}
