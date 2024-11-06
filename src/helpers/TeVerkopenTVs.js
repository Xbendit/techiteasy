import purchasedTvs from "./IngekochteTVs.js";
import soldTvs from "./VerkochteTVs.js";


function TvsToSell (inventoryObject) {

    let total = purchasedTvs(inventoryObject) - soldTvs(inventoryObject);

    return total
}
export default TvsToSell