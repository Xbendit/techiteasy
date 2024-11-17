import {bestSellingTv} from "../constants/inventory.js";

function Productsize (){

let size =''

    for (let i = 0; i < bestSellingTv.availableSizes.length; i++) {

      size += bestSellingTv.availableSizes[i] + ' inch (' + Math.round(bestSellingTv.availableSizes[i] * 2.54)+ 'cm) | ' ;
    }

    return size
}

function Productsize2 (alltvs){

    let size =''

    for (let i = 0; i < alltvs.availableSizes.length; i++) {

        size += alltvs.availableSizes[i] + ' inch (' + Math.round(alltvs.availableSizes[i] * 2.54)+ 'cm) | ' ;
    }

    return size
}


export default (Productsize, Productsize2);