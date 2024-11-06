import {bestSellingTv} from "../constants/inventory.js";

function soldTvs (inventoryObject) {

    let total = 0;


    for (let i = 0; i < inventoryObject.length; i++) {
        total = total + inventoryObject[i].sold;

    }
    /*console.log(total)*/
    return total
}

export default soldTvs;