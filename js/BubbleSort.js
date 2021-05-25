 
async function BubbleSort( arr, n)
{
    let allBars = document.querySelectorAll('.bar');
var i, j;
for (i = 0; i < n-1; i++)
{
    for (j = 0; j < n-i-1; j++)
    {
        if (arr[j] > arr[j+1])
        {
            await swap(arr,j,j+1);
        }
    }
    allBars[j].style.backgroundColor = 'rgb(50, 211, 189)';
}
seDefaultColor();
EnableBtns();
}
 