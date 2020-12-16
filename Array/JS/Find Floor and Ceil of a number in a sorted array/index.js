function floor(array, start, end, data) {

    if (data < array[start]) return -1;
    if (data > array[end]) return array[end];

    let middle = Math.floor((start + end) / 2);


    if (array[middle] === data) return array[middle];

    if (array[middle] > data) {
        return floor(array, start, middle - 1, data)
    } else {
        return floor(array, middle, end, data)
    }



}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
console.log(floor(array,0, array.length-1,5))


function ceil(array, start,end,data){

    if(data < array[start]) return array[start];

    if(data > array[end]) return -1;


    let middle = Math.floor((start+end)/2);

    if(array[middle] == data) return array[middle];


    if(array[middle] < data){
        return ceil(array,middle+1,end,data)
    }else{
        return ceil(array,start,middle,data)
    }

}


console.log(ceil(array,0, array.length-1,5.5))