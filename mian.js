function bar(tops,bots){
    for(let top=0; top<tops; top++){
        let topElm = document.createElement('div')
        topElm.className ='top'

        for(let bot=0; bot<bots; bot++ ){
            let botElm = document.createElement('div')
            botElm.id = ['cell',top,bot].join('-')
            botElm.className = 'bot'
            topElm.appendChild(botElm)
        }
        document.body.appendChild(topElm)
    }
}


async function Runcolor(){
    for(let i=0; i<10; i++){
        const bar = 0;
        const box = document.body.querySelector('#cell'+'-'+ i +'-'+bar)
        box.style.backgroundColor = "red"
        await sleep(500)
        clear()
    }
}

async function RuncolorBelow(){
    for(let i=0; i<10; i++){
        const be = 0;
        const box = document.body.querySelector('#cell'+'-'+ i +'-'+be)
        box.style.backgroundColor = "red"
        await sleep(500)
        clear()
    }
}



async function sleep(ms){
    await new Promise(res => setTimeout(res,ms))
}


function clear(){
    for(let i=0; i<10; i++){
        const bar = 0;
        const box = document.body.querySelector('#cell'+'-'+ i +'-'+bar)
        box.style.backgroundColor = "yellow"
    }
}


window.addEventListener('load',function(){
    bar(10,10)
    Runcolor()
    sleep()
    RuncolorBelow()
    
},false)

console.log(RuncolorBelow)

