let user= { name: 'raju', email: 'raju@mail.com', password: '74hf84nd'};

console.log(user.email);
console.log(user['name']);

console.log(user.email , user.password);

user.address = 'Lucknow';
console.log(user);

user.email='rajumalhotra@gmail.com';
console.log(user);

delete user.password;
console.log(user);

console.log(object.keys(user));
console.log(object.values(user));

