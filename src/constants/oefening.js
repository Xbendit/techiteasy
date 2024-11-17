import {inventory} from "./inventory.js";



/*-----OPDRACHT 1A-----
const newArray = inventory.map((NAAM)=>{
    return NAAM.type;
})
console.log(newArray)*/

/*/!*-----Opdracht 1B------*!/
const soldoutArray = inventory.filter((Soldout)=>{
   return Soldout.originalStock === Soldout.sold;
})
console.log(soldoutArray)*/

/*
/!*-----Opdracht 1C-----*!/
const selectorArray = inventory.find((selector)=>{
    return selector.type === 'NH3216SMART';
})
console.log(selectorArray)*/

/*/!*----Opdracht 1D---- *!/
const fullArray = inventory.map((full)=>{
    if (full.refreshRate >= 100){
        return 'name: ' + full.brand +' '+ full.name + ' suitable: true'
    }
    else{
        return 'name: ' +full.brand +' '+ full.name + ' suitable: false'
    }
})
console.log(fullArray)*/


