// defining the function
//there are 3 ways to define fun
//alt + down  se line upar neeche jump ho jaigi

//method-1

function addnums(a,b){
     var c=a+b;
     console.log(c);

    }
    
    //calling the function
    addnums(4,5);
    // console.log(c);

    //method-2

    const getAvg=function(m1,m2,m3){

    console.log(m1,m2,m3=12);
    let avg= (m1+m2+m3)/3;

    console.log(avg);
    }

    getAvg(6,3,3);


    //method-3

    const prodNums=(a,b) => {
        let p=a*b;
        
        // console.log(p);
        return p;
    }
    
        let res= prodNums(5,2);
        console.log(res);