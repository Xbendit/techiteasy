import {bestSellingTv} from "../constants/inventory.js";

function ProductPrice (){

    const price = '€' + bestSellingTv.price +',-'
    return price
}

function ProductPrice2 (alltvs){

    const price = '€' + alltvs.price +',-'
    return price
}

export default (ProductPrice, ProductPrice2);