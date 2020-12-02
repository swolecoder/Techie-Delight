let output = new Set()

function interleavings(str1, str2, res){

    if(!str1 && !str2){
        output.add(res);
        return;
    }

    if(str1){
        interleavings(str1.slice(1), str2, res + str1[0])
    }

    if(str2){
        interleavings(str1, str2.slice(1), res + str2[0])
    }
}


X = "ABC", Y = "ACB";
interleavings(X,Y,"")
console.log(output)