let movies=['RRR', 'PK', 'RUN', '365 Days', 'KGF' , 'Ring'];

//Indexing

// console.log(movies[4]);
// console.log(movies.indexOf('RUN'));

// console.log(movies.at(-1));
// console.log(movies.length);

//slicing

// console.log(movies.slice(2,5));
// console.log(movies.slice(2));
// console.log(movies.slice(2,100));

//Adding Element

console.log([ ...movies, 'Barfi']);
// movies = [ ...movies,'Barfi'];
// upar wali line ko run ke liye movies ka const remove krke let lgana padega
console.log(['Batman', ...movies, 'Barfi']);

console.log(movies);
console.log([...movies.slice(0,4), '100Days' , ...movies.slice(4)]);
console.log(movies);

// WAP tp add el at 4th position

console.log([...movies.slice(0,3), 'work it' , ...movies.slice(3)]);
console.log(movies);
// movies= [...movies.slice(0,3), 'work it' , ...movies.slice(3)];

//to replace 4th element
movies[3]='kalank';
console.log(movies);

// five friends name
const friends=['a','b', 'wxyz', 'dddd','eeee'];
console.log(friends[2].slice(0,3));

//removing el from array

console.log(movies);
movies.pop(); //remove last el from array
console.log(movies);
movies.shift(); //remove first el from array
console.log(movies);

//   removing multiple ele from array

movies = [...movies, 'flash', 'exit14', 'NH10']
console.log(movies);
movies.splice(3, 2 ); // (index, no of ele to be del)
console.log(movies);
