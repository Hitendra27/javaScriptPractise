
// callbacks, promises and async 

// data variable
const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];

// callbacks
// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;

//     }, 1000);
// }

// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         callback();
//     }, 2000);

// }

// createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

// Promises
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;

    }, 1000);
}

function createPost(post, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;

            if(!error) {
                resolve();
            }else {
                reject('Error: Something went wrong')
            }
        }, 2000);
    });
}

// createPost({title: 'Post Three', body: 'This is Post Three'})
// .then(getPosts)
// .catch(err => console.log(err));

// Async / Await
// async function init() {
//    await createPost({title: 'Post Three', body: 'This is Post Three'});

//    getPosts();
// }

// init();

// Async / Await / Fetch
async function fetchUsers() {
    const res = await fetch
    ('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();



// Promise all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
// setTimeout(resolve, 2000, 'Goodbye')
// );

// const promise4 = fetch
// ('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(values =>
//     console.log(values));




// Advanced JavaScript Pratice

// function DoSomething() {

// }

// // Arrow Function
// const DoSomething2 = () => {

// }

// // React Components
// const MyComponents = () => {
//     return 
//     <div></div>
// }

// <button
// onclick={() => {
//     console.log("hello world!");
// }}>

// </button>

// Ternery operators
// let age = 16;
// let name = age > 10 ? "Pedro" : "Jack";

// const component = () => {
//     return  
//     age > 10 ? <div>Pedro</div> :  <div>Jack</div>;
// }

// Ojects
// const person = {
//     name: "Pedro",
//     age: 20,
//     isMarried: true,
// };

// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;

// const { name, age, isMarried } = person;

// const person2 = {...person, name: "Jack"}

// const names = ["Pedro", "Jack", "Jessica"];
// const names2 = [...names, "Joel"];

// console.log(names);
// console.log(names2);

// Map function .map()
// let names = ["Pedro", "Jack", "Jessica"];

// names.map((name) => {
//                                        // return name + "1";
//     console.log(name);
// });

// Filter function .filter()
// let names = ["Pedro", "Jack", "Jessica"];

// names.filter((name) => {
//     return name !== "Pedro"
// });

// even number or odd in ternary opertor

// let number = 27;

// const result = (number % 2 == 0) ? "even"  : "odd" ;

// console.log(` ${number} is ${result} number`)



// if(number % 2 == 0) {
//     console.log(`${number} is an even number.`)
// }else {
//     console.log(`${number} is a odd number.`)
// }