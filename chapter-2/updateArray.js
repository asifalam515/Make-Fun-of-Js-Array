const arr1=new Array(10)
// console.log(arr1); 
// update array elements and fill array
const arr2=new Array(10);
arr2.fill(0) //10 element er array ta 0 dara fill hoye jaabe
// console.log(arr2)
const names=["asif","najmul","sourov"]
names[0]=false;// 0 index e false dara update hoye jaabe
// console.log(names);

//Fill Array and Update
const response= new Array(9);
response.fill(false)
for (let i=0;i<response.length;i++){
  const rand=Math.floor(Math.random()*10+1)
  response[i]=rand >6? "X" : "O"
}
// console.log(response); 
// Array is mutable
function update(arr){
  for (let i=0;i<arr.length;i++){
    arr[i]=`${i+1}. ${arr[i]}`
  }
  return arr;
}
const updatedNames=update(names)
console.log(names)
console.log(updatedNames)
// duita object ba duita array kknoi same hote pare na

const x=[]
const y=[]
console.log(x==y)
