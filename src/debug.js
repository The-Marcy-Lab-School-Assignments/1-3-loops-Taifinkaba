const brokenLoop = (start, end) => {
  let result = '';
  for (let i = start; i <= end; i ++) {
    result += i;
  }
  return result;
};
// console.log(brokenLoop(1, 10));

const brokenNested = () => {
  let result = '';
  for (let m = 0; m < 2; m++) {
    for (let i = 0; i < 10; i++) {
      result += `-${m}${i}`;
    }
  }
  return result.slice(1);
};
// console.log(brokenNested(20));

module.exports = {
  brokenLoop,
  brokenNested,
};
