// TODO: write code here

export default function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}
console.log(sum([1, 2]));