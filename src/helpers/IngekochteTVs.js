
function purchasedTvs (inventoryObject){

    let total = 0

    for (let i = 0; i < inventoryObject.length; i++) {

        total = total + inventoryObject[i].originalStock;

    }
    return total
}
export default purchasedTvs;
