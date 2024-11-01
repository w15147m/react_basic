function sumOfArray(array) {
 return  array.reduce((sum, val)=> sum + val, 0)
}
function genTickets(numbers) {
  let array = new Array(numbers);
  for (let index = 0; index < array.length; index++) {
    array[index] = Math.floor(Math.random() * 7);
  }
  return array;
}
export { genTickets, sumOfArray };
