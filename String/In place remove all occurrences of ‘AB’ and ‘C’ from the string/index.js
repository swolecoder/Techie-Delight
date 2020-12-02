function remove(s) {

    let i=0;
    let j = 0;


    while(i < s.length){

        if(j > 0 && s[i]=="B"&& s[j-1]=="A"){
            i++;
            j--
        }else if(s[i]=="C"){
            i +=1
        }else{
            s[j++] = s[i++]
        }
    }

    return s.slice(0, j).join("")
}

let str = "CBAABCAB".split("");
console.log(remove(str));

str = "ABACB".split("");
console.log(remove(str) == "")