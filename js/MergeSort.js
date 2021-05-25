function MergeSort(a,n){
	if(n == 1)
		return a;
	const mid = Math.floor(a.length/2);
	const left = a.slice(0,mid);
	const right = a.slice(mid);
	return Merge(MergeSort(left,left.length),MergeSort(right,right.length));
}

function Merge(left,right){
	const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  } 
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}