let user= { name: 'raju', email: 'raju@mail.com', password: '74hf84nd'};

console.log(user.email);
console.log(user['name']);

console.log(user.email , user.password);

// add an address

user.address = 'Lucknow';
console.log(user);

// modify email

user.email='rajumalhotra@gmail.com';
console.log(user);

// remove a password from an array

delete user.password;
console.log(user);

// how to find all the keys in an array

console.log(Object.keys(user));

// how to find all the values in an array

console.log(Object.values(user));

//another example

let smartphone = {
    brand: 'samsung',
    model: 's23 ultra',
    price: 78000,
    color: 'white' 

}

console.log(smartphone.color);

smartphone.color= ['white', 'red', 'black'];

console.log(smartphone);
console.log(smartphone.color[1]);

//add a color in smartphone

smartphone.color.push('blue');

console.log(smartphone);




