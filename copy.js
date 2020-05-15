const copy2x = (src, dest) => {
  for (let i = 0; i < src.length; i++) {
    dest[i] = src[i] * 2;
  }
  return dest;
};

module.exports = {
	copy2x
}
