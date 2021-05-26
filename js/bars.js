let bar = [];
let animationSpeed = 400;
const barsContainer = document.querySelector('#bars');
const arrayBtn = document.querySelector('#newArray');
const start = document.querySelector('#start');
const sizeChange = document.querySelector('#arraySize');
const speedChange = document.querySelector('#speed');
// Class generates the bars.
class newBars{
    constructor(len,min,max){
        this.length = len;
        this.min = min;
        this.max = max;
    }
    getValues(){
        return Math.floor(Math.random() * (this.max-this.min)+this.min);
    }
    createArray(){
        bar = [];
        for(let i = 0;i < this.length; ++i)  
            bar[i] = this.getValues();
        console.log(bar);
    }
    createBar(container){
        this.createArray();
        if(bar.length>0)
            {
                container.innerHTML = "";
                container.setAttribute('style','align-items:flex-end;');
            }
            let i = 0;
        for(let ele of bar){
            let div = document.createElement("div");
            div.style.height = `${ele}px`;
            div.classList.add("bar");
            div.setAttribute("id",`${i}`)
            container.appendChild(div);
            i+=1;
        }
    }
}
function finalColors(ele,color){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            ele.style.backgroundColor = color;
            resolve();
        },10);
    })
}

async function changeColors(lists,color){
        for(let ele of lists) 
        {
            console.log(color);
            await finalColors(ele,color)
            // setTimeout(()=>{ele.style.backgroundColor = color;},50);
        }
}

function seDefaultColor(){
    console.log("Fucntion called!");
    if(lists.length > 0){
        let allBars = document.querySelectorAll('.bar');
        setTimeout(()=>{
            changeColors(allBars,'#c0c0c0');
        },10);
        setTimeout(()=>{
            changeColors(allBars,'rgb(32, 199, 171)');
        },1100);
        setTimeout(()=>{
            changeColors(allBars,'#c0c0c0');
        },3500);
    }
}


async function swapEle(el1,el2)
    {
        const temp = el1.style.height;
        el1.style.height = el2.style.height;
        el2.style.height = temp;
    }



const getFunction = () => {
    const functionsArray = [SelectionSort,BubbleSort,InsertionSort,MergeSort]
    let fn;
    lists.forEach(function(list,index){
        if(list.classList.contains('active'))
                fn = functionsArray[index];
                
    });
    return fn;
}

start.addEventListener('click',()=>{
    if(bar.length > 1){ 
        DisableBtns();
        let x = getFunction();
        console.log(x);
        // alert('Clicked!');
        x(bar,bar.length);
    }
    else
        alert("Please create array first then try to sort!");
});

arrayBtn.addEventListener('click',()=>{
    let size = sizeChange.value;
    const arr = new newBars(size,50,500);
    arr.createBar(barsContainer);
});


window.addEventListener('load',()=>{
    if(bar.length<1)
    {
        barsContainer.setAttribute('style','align-items:center');
        barsContainer.innerHTML = 'No Data available!<br>Please Click on  New Array Button'
    }
});


async function swap(arr, xp, yp)
{
    return new Promise((resolve) =>{
        let list = document.querySelectorAll('.bar');
        list[xp].style.backgroundColor = 'rgb(248, 239, 115)';
        list[yp].style.backgroundColor = 'rgb(255, 81, 69)';
        swapEle(list[xp], list[yp]);
        setTimeout(()=>{
        var temp = arr[xp];
        arr[xp] = arr[yp];
        arr[yp] = temp;
        list[xp].style.backgroundColor = '#c0c0c0';
        list[yp].style.backgroundColor = '#c0c0c0';
        resolve();
        },(parseInt(speedChange.getAttribute('max')) - speedChange.value) + parseInt(speedChange.getAttribute('min')))
    })
}


function setStyles(ele){
    ele.style.pointerEvents = 'none';
    ele.style.opacity = '0.5';
}

function DisableBtns(){
    setStyles(sizeChange);
    setStyles(start);
    setStyles(arrayBtn);
    for(let e of lists)
        setStyles(e);
    
}


function removeStyles(ele){
    ele.style.pointerEvents = 'auto';
    ele.style.opacity = '1';
}
function EnableBtns(){
    removeStyles(sizeChange);
    removeStyles(start);
    removeStyles(arrayBtn);
    for(let e of lists)
        removeStyles(e);
}

sizeChange.addEventListener('change',(e)=>{
    const arr = new newBars(e.target.value,20,500);
    arr.createBar(barsContainer);
});
speedChange.addEventListener('change',(e)=>{
    // console.log(ty);
    console.log(parseInt(speedChange.getAttribute('max')) - speedChange.value) - parseInt(speedChange.getAttribute('min'));

})
