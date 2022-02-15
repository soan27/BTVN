let n = 3;
let i;
let sum = 0;
let calc = 0;
for(i = 1; i <= n; i++){
    calc = Math.pow(i,2);
    sum += calc; 
}
console.log(sum);