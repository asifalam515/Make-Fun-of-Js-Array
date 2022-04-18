const  arr=[1,2,3,4,5];
const n=arr[3];
const m=arr[2];
const x=1,y=0;
// console.log(m,n,arr[x],arr[y],arr[x]+arr[y],arr[x+y+1]) 
// array notation ba [] sign er moddhe amra jekono kisu korte pari .


// simple traverse:
for(let i=0;i<arr.length;i++){
  console.log(arr[i])
}

// arry sum and avg
/*logic
sum =0;
sum =0+1=1
sum=1+2=3
sum=3+3=6
sum=6+4=10
*/

let sum=0;
for(let i=0;i<arr.length;i++){
 sum += arr[i];// sum=sum+arr[i]
}

console.log(sum)

console.log(sum/arr.length)