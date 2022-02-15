let x = 18;
let i,j;
function isPrime(a){

    if(a < 2 || a % 2== 0){
        return false
    }
    else if(a == 2 ){
        return true
    }else{
        for(i = 3; i<Math.sqrt(a); i=i+2){
            if( a % i == 0){
                return false
            }
        }
        return true
    }
}

for(j = 1; j <= x; j++){
    if(isPrime(j)){
        console.log(j);
    }
}