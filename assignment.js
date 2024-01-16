// count down 30 to 0

// for(let i = 30; i > -1; i--){
//     console.log(i)
// }

//Time it takes between a setTimeout call and the inner function running

let start = Date.now()
// let startTimeSec = now.getSeconds();
// let startTimeMilliSec = now.getMilliseconds();
// console.log(`start ${startTimeSec} seconds ${startTimeMilliSec} millisec`);
setTimeout(()=>{
    let end = Date.now();
    console.log(`${end-start} milliseconds.`)
    // let endTimeSec = now.getSeconds();
    // let endTimeMillSec = now.getMilliseconds();
    // console.log(`end ${endTimeSec} seconds ${endTimeMillSec} millisec`);
    // console.log(`time taken is ${endTimeMillSec - sta} milliseconds.`)
}, 1000)


