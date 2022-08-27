function splnum(n)
{
let q=n 
let fact=1
let result=0
while(q !=0)
{
    rem=q%10
    for(i=1; i<=rem;i++)
    {
        fact=fact*i
    }
    result=result + fact
    fact = 1
    q=parseInt(q/10)
}
if(result==n)
{
    console.log(`${n} is a special number`)
}
else
{
    console.log(`${n} is not a special number`)
}
}
splnum(40585)