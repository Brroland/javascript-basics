const union = (src1, src2) => {
  const out = [];
  for (const element of src1) { // Másolás tétel feltétel nélkül
    out.push(element);
  }
  for (let i = 0; i < src2.length; i++) {
    if (!out.includes(src2[i])) {
      out.push(src2[i]);
    }
  }
  return out;
};
module.exports = {
	union
}
