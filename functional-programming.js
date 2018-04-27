const x = 6; // immutable
// g = 9.8m/s2
// 2000 lines of codes
x + 15;
// x++;
// x += 1;
// x = x + 1;
// for(var i=0;i<7;i++){}
// while(i<7){
//   i++
// }

// f(x) = y
// Pure Function
const y = 5;

const addY = x => x + y; // Impure
const addFiveToY = x => {
  y = x + 5;
}; // Impure;
const pureAdd = (x, y) => x + y;
// pureAdd(3,4) => 7
const abc = (x, y) => {
  console.log(x + y);
};

const randomDouble = x => Math.random() * x; // Deterministic

const addALot = x => {
  const a = pureAdd(x, 6);
  const b = pureAdd(x, 2);
  const c = pureAdd(x, 1);
  const z = x > 6 ? pureAdd(x, 1) : pureAdd(x, 2);
  // if(x > 6){
  //   console.log()
  // }
  return a + b + c + z;
};
