for(let i=0;i<10;i++){
    console.log(i);
}

//number divisible  by 7 or 13

console.log('numbers are');
for(let i=1;i<=100 ;i++){
 if(i%13==0 || i%7==0){
    // by default console.log new line me aata h and comma lga ke ussi me likna padega agr same line chhaie
       console.log(i,'yes');
}
}

//fibbonacci series
console.log('fibbonacci series');

let [a,b]=[0,1];
console.log(a);
console.log(b);
for(let i=0;i<10;i++){
    let c=a+b;
    console.log(c);
    [a,b]=[b,c];
}

//factorial number


console.log('factorial no');
let num=6;
let f=1;
for(let i=2;i<=num;i++){
    console.log(f);
    f=f*i;    
}
console.log(f);

//prime no
console.log('---prime program--');

let mynum=11;
let prime=true;
 
for(let i=2;i<mynum/2;i++){
if(mynum%i == 0){
    prime=false;
    console.log('not prime');
    break;
}
}
if(prime) console.log('prime');

//While loop example

console.log('-----reverse no-----');
let n1=839392;
let rev=0;
while(n1 > 0){
    console.log(rev);
    let r = n1 % 10;
     rev=rev*10 + r;
    n1 = parseInt(n1/10);
}
console.log(rev);

console.log('palindrome no----');

let n2=1221;
 nn=n2;
let re=0;
while(n2 > 0){
    
    let r = n2 % 10;
     re=re*10 + r;
    n2 = parseInt(n2/10);
}
if(nn==re) console.log('palin');
else console.log('not palin');


//Armstrong no

let arm=153;
temp=arm;
while(arm>0){
    
}


// for automatically run--
//node --watch name.js

