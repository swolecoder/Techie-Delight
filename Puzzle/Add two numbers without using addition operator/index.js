function add(a, b) {

    return a - (-b)
}

function addMethod2(a,b){

    //a is positive
    while(a > 0){
        a--;
        b++
    }

    //a is negative
    while(a < 0){
        b--;
        a++;
    }

    return b;
}



function addMethod3(a,b){
    return Math.log(Math.exp(a)* Math.exp(b))
}



console.log(add(3,-6));
console.log(addMethod2(3,6));
console.log(addMethod3(3,6))