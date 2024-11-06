import {bestSellingTv} from "../constants/inventory.js";

function Productsize (){

let size =''

    for (let i = 0; i < bestSellingTv.availableSizes.length; i++) {

      size += bestSellingTv.availableSizes[i] + ' inch (' + Math.round(bestSellingTv.availableSizes[i] * 2.54)+ 'cm) | ' ;
    }

    return size
}


export default Productsize;