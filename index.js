// const button = document.querySelector('.form__button');
// const input = document.querySelector('#form__input');

// const handleChange = (event) => {
//     console.log(event.target.value)
// }

// input.addEventListener('change', handleChange);

// button.addEventListener('click', (event) => {
//     event.preventDefault();
//     input.removeEventListener('change', handleChange )
//     })


// const buttons = document.querySelectorAll('.btn');
// console.log(buttons)



// buttons.forEach( (button) => {
//     button.addEventListener('click', (event) => {
//         event.preventDefault();
//         console.log('clicked')
//     })
// } )

 /* const presidents = [
    { first: 'George', Last: 'Washington', born: 1732, died: 1799 },
    { first: 'John', Last: 'Adams', born: 1735, died: 1826 },
    { first: 'Ronald', Last: 'Reagan', born: 1911, died: 2004 },
    { first: 'Gerald', Last: 'Ford', born: 1913, died: 2006 },
    { first: 'Richard', Last: 'Nixon', born: 1913, died: 1994 },
    { first: 'John F.', Last: 'Kennedy', born: 1917, died: 1963 },
    { first: 'Harry S.', Last: 'Truman', born: 1884, died: 1972 },
    { first: 'Grover', Last: 'Cleveland', born: 1837, died: 1908 },
    { first: 'Chester A.', Last: 'Arthur', born: 1829, died: 1886 },
    { first: 'Abraham', Last: 'Lincoln', born: 1809, died: 1865 },
    { first: 'Franklin', Last: 'Pierce', born: 1804, died: 1869 },
    { first: 'Lyndon B.', Last: 'Johnson', born: 1908, died: 1973 },
    { first: 'Dwight', Last: 'Eisenhower', born: 1890, died: 1969 },
];

const writers = ['Василий, Жуковский', 'Александр, Грибоедов', 'Александр, Пушкин',
'Владимир, Даль', 'Николай, Языков', 'Федор, Тютчев', 'Николай, Гоголь', 'Алексей, Кольцов',
'Александр, Герцен', 'Иван, Гончаров', 'Михаил, Лермонтов', 'Петр, Ершов', 'Алексей, Толстой',
 'Даниил, Заточкин'];

 // Array.prototype.filter()
 // 1. Отфильтровать президентов которые родились в 1700-х годах.
 const born1700 = presidents.filter((president) => {
     if (president.born >= 1700 && president.born < 1800) {
         return true;
     }
 });
// Array.prototype.map()
// 2. Создать массив с Имя и Фамилия
const firstLast = presidents.map((president) => {
    // return ((president.first) && (president.Last)); // Почему так не работает?
    return `${president.first}, ${president.Last}`;
})
// Array.prototype.sort()
// 2. Отсортировать президентов  по году рождения от старшего к младшему

const oldest = presidents.sort((a, b) => {
    if (a.born > b.born) {
        return 1;
    } else {
        return -1;
    }
})
console.table(oldest) */

 

