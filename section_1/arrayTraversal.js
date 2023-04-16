let nums = [11,33,64,31,88,52];

for(let i=0;i<nums.length;i++){
    if(nums[i] % 2 == 0){
        console.log(nums[i]);
    }
}

let newArr=[];
console.log('-----------');
//for each loop: for-of loop


for(let n of nums){
    if(n%2==0){
        console.log(n);
        newArr.push(n);
    }
}
console.log(newArr);

// Filtering in array

// ek fun ko dusre fun me call krne ko concave func kehte h
// ye sirf filter krta h, changes nhi krta h as compared to map
let res=nums.filter( (n) => {return n%2!=0});
console.log(res);

// map sbme kuch na kuch changes kr denga
let res2=nums.map( (a) => { return a*2 });
console.log(res2);

const prices = [1200 , 350, 3250, 5890 , 3990];

let ans=prices.map( (b) => { return b-b/10 });
console.log(ans);


