const n = 3 
const m = 394274638;
const s = 3;

const handle = () => {
  return (s + m%n -1) % n;
}

console.log(handle());