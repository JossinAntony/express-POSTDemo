module.exports.findSmallestAndLargest = (num1, num2 ,num3)=>{
    if( num1 >= num2){
        if( num1 >= num3){
            s = num1 + ' is the largest of the lot.';
            //console.log(num1 + ' is the largest of the lot.');
        }else {
            s = num3 + ' is the largest of the lot.';
            //console.log(num3 + ' is the largest of the lot.')
        }
    }else if(num2 >= num3){
        s = num2 + ' is the largest of the lot.';
        //console.log(num2 + ' is the largest of the lot.')
    }else{
        s = num3 + ' is the largest of the lot.';
        //console.log(num3 + ' is the largest of the lot.')
    }
    
    if( num1 <= num2){
        if( num1 <= num3){
            s1 = num1 + ' is the smallest of the lot.';
            //console.log(num1 + ' is the smallest of the lot.')
        }else {
            s1 = num3 + ' is the smallest of the lot.';
            //console.log(num3 + ' is the smallest of the lot.')
        }
    }else if(num2 <= num3){
        s1 = num2 + ' is the smallest of the lot.';
        //console.log(num2 + ' is the smallest of the lot.')
    }else{
        s1 = num2 + ' is the smallest of the lot.';
        //console.log(num3 + ' is the smallest of the lot.')
    }

    return (s + ' ' + s1);

}

module.exports.evenOrOdd = (num)=>{
    if(((num % 2) == 0) || (num == 0)){
        s = num + ' is even.';
        //console.log(num + ' is even.');
    }else{
        s = num + ' is odd.';
        //console.log(num + ' is odd.');
    }
    return s;
}

module.exports.divisibilityby8 = (num)=>{
    if(((num % 8) == 0) || (num == 0)){
        s = num + ' is divisible by 8.';
    }else{
        s = num + ' is not divisible by 8.';
    }
    return s;
}
