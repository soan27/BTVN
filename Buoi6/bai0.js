let a = 18;
let i;
if(a < 2 || a % 2== 0){
    console.log("No");
    return
}
else if(a == 2 ){
    console.log("Yes");
    return
}else{
    for(i = 3; i<Math.sqrt(a); i=i+2){
        if( a % i == 0){
            console.log("No");
            return
        }
    }
    console.log("Yes");
}