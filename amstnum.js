function amstrong_num(number)
{
let temp=number
let sum=0
while(temp>0)
{
    let digit =temp%10
    sum += digit**3
    temp=parseInt(temp/10)
}
if(sum==number)
{
    console.log(`${number}is an amstrong number`)
}
else{
    console.log(`${number}is not an amstrong number`)
}
}
amstrong_num(142)