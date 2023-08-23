let text = document.getElementById("text")
console.log(text.textContent)

let head = document.getElementsByTagName('h1')
console.log(head);

let boxx = document.getElementsByClassName('box')
console.log(boxx)

let mm = document.querySelector('h3');

addEventListener('click', () => {
   mm.innerText=' → Hello World'
})

let hh = document.getElementsByClassName('Replace')

function callme(){
console.log(hh[0])
hh[0].innerText= " → Welcome To Elevation Academy";
}

let header =document.querySelector('#heading')

header.addEventListener('click',() => {
    heading.setAttribute('style', 'color : red')
})


let parent = document.querySelector('.parent')
let bot = document.querySelector('#h1')
let count = 0;
bot.addEventListener('click',() =>{
    if(count % 2 === 0){
        parent.setAttribute('style','flex-direction:column')
        count ++;
        console.log(count)
    }
    else{
        parent.setAttribute('style','flex-direction:row')
        count++;
        console.log(count)
        
    }

    
})



let run = document.getElementById('runtime')
let AM = document.getElementsByClassName('AM')

function time(){
    let time = new Date;
    let hours= time.getHours()
    let min = time.getMinutes()
    let secs = time.getSeconds()

    let timezone =`Hours ${hours} : Minutes ${min} : Seconds ${secs}`
    console.log(hours, min, secs)
    run.innerText= timezone
    if (hours >12){
        hours = hours-12
        AM[0].innerText = "PM"
    }
    else{
        AM[0].innerText = "AM"
    }
   
    // if(hours > 12){
    //                 hours= hours - 12
    //                 AM[0].innerText ='PM'
    //             }   
    //             else{
    //                 AM[0].innerHTML= 'AM'
    //             }

}

setInterval(() => {
time()
},1000)

// let runtime = document.getElementById("runtime")

// function clock(){
//     let time = new Date;
//     let hours = time.getHours()
//     let min = time.getMinutes()
//     let secs = time.getSecounds()

//     let timezone = `Hours ${hours} : Minutes ${min} : Secounds ${secs}`
//     console.log(hours,min,secs)
//     runtime.innerHTML=timezone

    
// }
// setInterval(()=>{
//     clock()
// },1000)