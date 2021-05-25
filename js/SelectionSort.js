
async function SelectionSort(inputArr,n) { 
    let allBars = document.querySelectorAll('.bar');
    for(let i = 0; i < n; i++) {
        allBars[i].style.backgroundColor = 'rgb(93, 142, 248)'; 
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             await swap(inputArr,i,min); 
        }
        allBars[i].style.backgroundColor = 'rgb(50, 211, 189)'; 
    }
    seDefaultColor();
    EnableBtns();
}