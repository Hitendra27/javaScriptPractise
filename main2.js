// JavaScript Program to Sort Array of Objects by Property Values

const compareAge = (a, b) => a.age - b.age;

const students = [
    {
        name: 'Sara',
        age: 22
    },
    {
        name: 'John',
        age: 24
    },
    {
        name: 'Jack',
        age: 25
    }
];

console.log(students.sort(compareAge));