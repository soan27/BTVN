function checkSymmetricNumber(){
    let n = 1012;
    let temp, sum = 0,r;
    for(temp = n; n!= 0; n = n/ 10){
        r = n %10;
        sum = sum *10 +r;
    }

    if(temp == sum){
        console.log("YES");
    }else console.log("NO");
} 

checkSymmetricNumber();