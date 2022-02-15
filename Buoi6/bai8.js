let n = 10;
let check = 1;
while(n /= 10){
    if((n % 10) % 2 == 0){
        check = 0;
        break;
    }
}
if(check = 1){
    console.log("Yes");
}else{
    console.log("No");
}       