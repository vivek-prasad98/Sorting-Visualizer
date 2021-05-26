
async function MergeArray(a, l, m, h,x) {

    let n1 = (m-l)+1;
	let n2 = h - m;
	let left = new Array(n1);
	let right = new Array(n2);

    for (let i = 0; i < n1; ++i) {
        await waitforme(delay);
        x[l+i].style.backgroundColor = 'yellow';
        left[i] = a[l + i];
    }

    for (let i = 0; i < n2; ++i) {
        await waitforme(delay);
        x[m+1+i].style.backgroundColor = 'orange';
        right[i] = a[m + i + 1];
    }
    await waitforme(delay);
    let  i = 0;
    let j = 0;
    let k = l; 
    while(i < n1 && j < n2){
        await waitforme(delay);
        if(left[i] <= right[j]){
            a[k] = left[i];
            x[k].style.height = `${left[i]}px`;
            i++;
            k++;
        }
        else{
            a[k] = right[j];
            x[k].style.height = `${right[j]}px`;
            j++;
            k++;
        }
    }
    while(i < n1){
        await waitforme(delay);
        a[k] = left[i];
        await waitforme(10);
        x[k].style.height = `${left[i]}px`;
        i++;
        k++;
    }
    while(j < n2){
        await waitforme(delay);
        a[k] = right[j];
        x[k].style.height = `${right[j]}px`;
        j++;
        k++;
    }
    for(let i = l; i <= h; i++){
        x[i].style.backgroundColor = 'rgb(50, 211, 189)';
    }
}

async function mergeSortArray(a, l, r,x) {
    if (l >= r)
        return;
    let m = l +  Math.floor((r-l)/2);
    await mergeSortArray(a, l, m,x);
    await mergeSortArray(a, m + 1, r,x);
    await MergeArray(a, l, m, r,x);
}


function waitforme(time) {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve();
        }, time);
    });
}


async function MergeSort(arr, n) {
    let x = document.querySelectorAll('.bar');
    let low = 0;
    let high = n - 1;
    await mergeSortArray(arr, low, high,x);
    seDefaultColor();
    EnableBtns();
}