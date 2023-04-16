console.log('Hello js');

marks=65;
console.log(marks);

myname=`Muskan`;
console.log(myname);

num=3393;
console.log(typeof(num));

if(num%2===0){
    console.log('even');
}else{
    console.log('odd');
}

console.log(2**3);
console.log(16 ** 0.5);


no=37;
s= no ** 0.5;
if(s*s==no){
    console.log('perfect sq');
}else{
    console.log('not perfect');
}


//16324
numm=16324;
if(numm%7===0 && numm%11===0){
     console.log('divisible by both');
}
else if(numm%7===0){
    console.log('divisible by 7');
}
else if(numm%11===0 || num%7===0){
       console.log('divisble by only 7 or only 11');
}
else{
    console.log('divisible by 11');
}

//diff
console.log(24=='24');
console.log(24==='24');
console.log(24===24);