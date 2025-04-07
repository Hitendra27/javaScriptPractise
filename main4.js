let updatedLibrary;

const library = [
  {
    title: "The Wiff of Money",
    author: "James Hadley Chase",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "The Shining",
    author: "Stephen King",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "One Shot",
    author: "Lee Child",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

updatedLibrary = JSON.stringify(library);

console.log(updatedLibrary);
