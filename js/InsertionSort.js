
async function swapBars(list,i,j) {
    return new Promise((resolve) => {
        list[i].style.backgroundColor = 'rgb(248, 239, 115)';
        list[j].style.backgroundColor = 'rgb(255, 81, 69)';
        swapEle(list[i], list[j]);
        setTimeout(()=>{
            list[i].style.backgroundColor = 'rgb(50, 211, 189)';
            list[j].style.backgroundColor = 'rgb(50, 211, 189)';
            resolve();
        },(parseInt(speedChange.getAttribute('max')) - speedChange.value) + parseInt(speedChange.getAttribute('min')));
    });
}

// async function InsertionSort(a,n){
//     let i,j;
//     let allBars = document.querySelectorAll('.bar');
// 	for(i = 1; i < n; ++i){
// 		for(j = i-1; j >= 0;--j){
// 			if(a[j] > a[i])
// 			{
//                 await swap(a,i,j); 
// 			}
            
// 		}j+=1;
//         allBars[j].style.backgroundColor = 'rgb(50, 211, 189)'; 
// 	}
// 	seDefaultColor();
//     EnableBtns();
// }

async function InsertionSort(inputArr,n) {
    let allBars = document.querySelectorAll('.bar');
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = inputArr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j+1] = inputArr[j];
                await swapBars(allBars,j+1,j);
                j--;
            }
            inputArr[j+1] = current;
            // await swapBars(allBars,j+1,i);
        }
        seDefaultColor();
        EnableBtns();
}