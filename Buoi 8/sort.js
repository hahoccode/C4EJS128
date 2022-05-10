// const list = [];
// list.push('hello')
// list = [] 1 dia chi o nho moi

const list = [12, 10, 1, 2, 3, 8, 5, 7]; // 8 -> lap lai ->
// 12 10  1 2 3 8  5  7
//b1 1 ....
//b2 1 2 ...
//b3 1 2 3 ...

for (let i = 0; i < list.length - 1; i++) {
  let min = list[i];
  let index = i;
  for (let j = i + 1; j < list.length; j++) {
    if (min > list[j]) {
      min = list[j];
      index = j;
    }
  }
  list[index] = list[i];
  list[i] = min;
}

console.log(list);
