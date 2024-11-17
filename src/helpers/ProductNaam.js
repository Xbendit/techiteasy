import {bestSellingTv} from "../constants/inventory.js";

function ProductName (){

    const Productnametype = bestSellingTv.brand +' '+ bestSellingTv.type +' - '+bestSellingTv.name
    return Productnametype
}
/*export default ProductName;*/

function ProductName2 (alltvs) {

    const Productnametype2 = alltvs.brand + ' ' + alltvs.type + ' - ' + alltvs.name
    return Productnametype2
}

    export default (ProductName, ProductName2);