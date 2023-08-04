
 function fib(num) {
  let n1=1,
  temp=0,arr=[];
  let n2=0;
  let oddnumsum=0 ;
while(temp<=num)
{
  arr.push(temp);
  n2=n1;
  n1=temp;
  temp=n2+n1;
}
for(let i=0;i<arr.length;i++)
{
  if(arr[i]%2===1)
    {
      oddnumsum +=arr[i];
    } 
}
return(oddnumsum);
   console.log(e);
}
