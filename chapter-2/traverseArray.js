const  arr=[12,34,35,676,343,7676];
const n=arr[3];
const m=arr[2];
const x=1,y=0;
console.log(m,n,arr[x],arr[y],arr[x]+arr[y],arr[x+y+1]) 
// array notation ba [] sign er moddhe amra jekono kisu korte pari .


// simple traverse:
for(let i=0;i<arr.length;i++){
  // console.log(arr[i])
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

// console.log(sum)

// console.log(sum/arr.length)

// find out the maximum number form an array
// first e amra ekta number ke boro dhore nibo..tarpor setar steh baki sob number ke compare korbo.compare kore je boro hobe seti hobe new largest number.evabe colte thake
let largestNumber=arr[0]
for (let i=0;i<arr.length;i++){
  if(arr[i]>largestNumber){
    largestNumber=arr[i]
  }
}
console.log(largestNumber);


// Task
//find out  1.smallest number,second smallest number,second highest number in an array