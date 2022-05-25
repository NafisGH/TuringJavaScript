// // Упражнения
// console.log('Упражнение 1')
// let obj = {
//   a: 1, 
//   b: 2, 
//   c: 3,
// }

// console.log(obj)

// console.log('Упражнение 2')
// let obj2 = {
//     a: 1, 
//     b: 2, 
//     c: 3,
//   }
//   for(let val in obj2) {
//     console.log(obj2[val])
//   }

//   console.log('Упражнение 3')

//   let arr1 = ['a', 'b', 'c', 'd'];
//   let arr2 = [1, 2, 3, 4];
//   let arr3 = ['Jon', 'Jack', 'Ivan', 'Bob'];

//   let collection = new Map([
//       [arr1, 'Первый массив'],
//       [arr2, 'Второй массив'],
//       [arr3, 'Третий массив'],
//   ]);

//   console.log(collection.get(arr1))
//   console.log(collection.get(arr2))
//   console.log(collection.get(arr3))

//   for(let kayarr of collection.values()){
//       console.log(kayarr);
//   }

//   console.log('Упражнение 4')

//   let map = new Map ([
//     ["огурец", 500],
//     ["помидор", 350],
//     ["лук",    50]
//   ]);
  

// for(let key of map.keys()){
//     console.log(key);
// }

// console.log('Упражнение 5')

// let mySet = new Set();

// mySet.add(1);
// mySet.add(2);
// mySet.add(3);

// console.log(mySet)

// console.log('Упражнение 6')

// let mySet2 = new Set([1, 2, 3]);

// console.log(mySet2.has(3))
// console.log(mySet2.has(4))

// console.log('Упражнение 7')
// // Не понял как сделать

// console.log('Упражнение 8')

// let objMap = new Map();

// objMap.set('Monday', 'понедельник');
// objMap.set('Tuesday', 'вторник');
// objMap.set('Wednesday', 'среда');
// objMap.set('Thursday', 'четверг');
// objMap.set('Friday', 'пятница');
// objMap.set('Saturday', 'суббота');
// objMap.set('Sunday', 'воскресенье');

// console.log(objMap.get('Wednesday'))
// console.log('______________________________________________________')

// console.log('Домашка от 11.04.2022');
// console.log('Упражнение 1');

// let container1 = document.getElementsByClassName('container');
// console.log(container1);
// let container2 = document.querySelector('.container');
// console.log(container2);
// let mainContainter2 = document.querySelector('#main_containter');
// console.log(mainContainter2);

// console.log('Упражнение 2');
// let test5 = document.querySelector('.test5');
// console.log(test5);
// test5.className = 'Positive';

// let page2 = document.querySelector('.page2');
// console.log(page2)

// let list1 = document.querySelector('.box');
// list1.classList.add('Red');
// list1.classList.toggle ('Redit');

// console.log('Упражнение 3');
// const textBox = document.querySelector('.box')
// const newDivBox = document.createElement('div')
// textBox.before(newDivBox);

// newDivBox.innerHTML = '<h1>Hello i am JS code</h1>'

// newDivBox.classList.add('newDivBox1')

// newDivBox.style.backgroundColor = 'red';
// newDivBox.style.width = '200px'

// console.log('Упражнение 4');

// const TopList = document.querySelector('.toplist')


// const toplist2 = document.querySelector('.toplist2')
// toplist2.style.backgroundColor = 'grey'

// console.log('______________________________________________________')
// console.log('Домашка от 05.05.2022');
// console.log('Упражнение 1');

// let flag1 = true;
// let flag2 = false;



// let promise = new Promise ((resolve, reject) => {
// 	setTimeout(() => {
// 		if (flag1) {
// 			resolve('Good promise')
// 		} else {
// 			reject('error')
// 		}
// 	}, 2000)
	
// })

// let promise2 = new Promise ((resolve, reject) => {
// 	setTimeout(() => {
// 		if (flag2) {
// 			resolve('Good promise 2')
// 		} else {
// 			reject('error')
// 		}
// 	}, 4000)
	
// })

// async function test1(){
// 	try {
// 		let result = await promise;
// 		console.log(result)
// 		let result2 = await promise2;
// 		console.log(result2)
// 	} catch(error) {
// 		console.log(error)
// 	}
// 	console.log('Промис завершился все равно')
// }
// test1()

// console.log(' Week-4 day-3 Домашка 16.05.22')
// console.log(' Задание №1')

// const promise = fetch('https://jsonplaceholder.typicode.com/todos', {
// 	method: 'GET'
// })

// promise
// .then((response) => {
// 	return response.json();
// })
// .then((data) => {
// 	console.log(data)
// })
// .catch(() => {})
// .finally(() => {})

// console.log(' Задание №2')

// const promise = fetch('https://jsonplaceholder.typicode.com/users/9', {
// 	method: 'GET'
// })

// promise
// .then((response) => {
// 	return response.json();
// })
// .then((data) => {
// 	console.log(data)
// })
// .catch(() => {})
// .finally(() => {})





  




