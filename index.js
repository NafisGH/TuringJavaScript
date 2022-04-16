// Упражнения
console.log('Упражнение 1')
let obj = {
  a: 1, 
  b: 2, 
  c: 3,
}

console.log(obj)

console.log('Упражнение 2')
let obj2 = {
    a: 1, 
    b: 2, 
    c: 3,
  }
  for(let val in obj2) {
    console.log(obj2[val])
  }

  console.log('Упражнение 3')

  let arr1 = ['a', 'b', 'c', 'd'];
  let arr2 = [1, 2, 3, 4];
  let arr3 = ['Jon', 'Jack', 'Ivan', 'Bob'];

  let collection = new Map([
      [arr1, 'Первый массив'],
      [arr2, 'Второй массив'],
      [arr3, 'Третий массив'],
  ]);

  console.log(collection.get(arr1))
  console.log(collection.get(arr2))
  console.log(collection.get(arr3))

  for(let kayarr of collection.values()){
      console.log(kayarr);
  }

  console.log('Упражнение 4')

  let map = new Map ([
    ["огурец", 500],
    ["помидор", 350],
    ["лук",    50]
  ]);
  

for(let key of map.keys()){
    console.log(key);
}

console.log('Упражнение 5')

let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(mySet)

console.log('Упражнение 6')

let mySet2 = new Set([1, 2, 3]);

console.log(mySet2.has(3))
console.log(mySet2.has(4))

console.log('Упражнение 7')
// Не понял как сделать

console.log('Упражнение 8')

let objMap = new Map();

objMap.set('Monday', 'понедельник');
objMap.set('Tuesday', 'вторник');
objMap.set('Wednesday', 'среда');
objMap.set('Thursday', 'четверг');
objMap.set('Friday', 'пятница');
objMap.set('Saturday', 'суббота');
objMap.set('Sunday', 'воскресенье');

console.log(objMap.get('Monday'))
