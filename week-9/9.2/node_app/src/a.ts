let x: number = 101;

console.log(x);

function greet(firstName: string){
    console.log(`Hello ${firstName}`);
    
}

function sum(a:number, b:number): number{
    return a+b;
}




function isLegal(age: number): boolean{
    return age>18?true:false
}

function afterOneSecond(fn:() => void){
    setTimeout(fn ,1000)
}