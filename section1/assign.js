//  given array ['₹3400', '₹845', '₹20', '₹940', '₹3700'] convert all the elements to number

let n1 = ['₹3400', '₹845', '₹20', '₹940', '₹3700'];
let new1= n1.map((p) => {return  parseInt(p.slice(1))})

console.log(new1);

//  WAP to filter all non-perfect squares from an array.

let arr=[12,4,26,119,15,16,199,36];
// let res1=arr.filter((n) => { return n**0.5})
 let res= arr.filter ((n) => { return (n!= (n**0.5)*(n**0.5) )});
 console.log(res);

// Create a function that takes an array and index as parameter and removes the single element on that index and returns the array.

const eleRem = (array,i) => {
    arr.splice(i,1);
    return arr;
}

let anss=eleRem(arr,3);
console.log(anss);
