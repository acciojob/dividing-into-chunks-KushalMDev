const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result=[]
let sum=0
let ind=[]
for(let val of arr){
sum+=val
if(sum<=n){
ind.push(val)
}
else{
sum=val
result.push(ind)
ind=[]
if(sum<=n){
    ind.push(val)
}
}
}
if(sum<=n){
    result.push(ind)
}
	return result
	
}

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
