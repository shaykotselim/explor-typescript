/*
let money = 5000;
let honey = '';
let funny = false;
*/
let money: number = 66;
let honey: string = 'O my sweet heart';
let funny: boolean= true;
let age: number = 25;


function add4 (first:number, second:number):number {
        const result = first + second;
        return result ;

}
const output: number = add(44, 12);

function doubleConsole (number:number):void {
    console.log(2 * number);
    
}

/*
//Multi purpose

function add (first:number | string, second:number | string):number | string {
        const result = first + second;
        return result  ;

}
const output: number = add(44, 12);
const fullName = add ('adam', 'sand')
*/