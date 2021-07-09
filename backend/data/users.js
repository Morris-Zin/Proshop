const bcrypt = require('bcryptjs');

const users = [
  {
    name: "Apk",
    email: "apk@gmail.com",
    password: bcrypt.hashSync('123', 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "jon@example.com",
    password: bcrypt.hashSync('123', 10),
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync('123', 10),
  },
];

module.exports = users;