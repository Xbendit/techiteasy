import {bestSellingTv} from "../constants/inventory.js";

function ProductName (){

    const Productnametype = bestSellingTv.brand +' '+ bestSellingTv.type +' - '+bestSellingTv.name
    return Productnametype
}
export default ProductName;
