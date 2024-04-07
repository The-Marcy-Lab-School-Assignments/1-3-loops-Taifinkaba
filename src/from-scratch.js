const loop0UpTo10 = () => {
  for(let i = 0; i < 10; i++){
    console.log(i);
  }
};
// loop0UpTo10();

const loop5to10 = () => {
  for(let m = 5; m <= 10; m++){
    console.log(m);
  }
};
// loop5to10();

// you do NOT need an if check
const loopEvenNumbersUpTo10 = () => {
  for(let n = 0; n < 10; n += 2){
    console.log(n);
  }
};
// loopEvenNumbersUpTo10();

const countdown5to0 = () => {
  for(let o = 5; o >= 0; o--){
    console.log(o);
  }
};
// countdown5to0();

const loopUpToNum = (num) => {
  for(let p = 0 ; p < num; p++){
    console.log(p);
  }
};
// loopUpToNum(30);

const fizzbuzz = () => {
  for(let q = 1; q <= 100; q++){
    if(q % 3 === 0 && q % 5 === 0){
      console.log("fizzbuzz");
    }else if(q % 3 === 0){
      console.log("fizz");
    }else if(q % 5 === 0){
      console.log("buzz");
    }else{
      console.log(q);
    }
  }
};
// fizzbuzz();

module.exports = {
  loop0UpTo10,
  loop5to10,
  loopEvenNumbersUpTo10,
  countdown5to0,
  loopUpToNum,
  fizzbuzz,
};
