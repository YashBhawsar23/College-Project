import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin Yash',
    email: 'yash@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Yash Bhawsar',
    email: 'ybhawsar90@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
