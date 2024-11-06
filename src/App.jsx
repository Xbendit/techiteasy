import './App.css';
import soldTvs from "./helpers/VerkochteTVs.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import purchasedTvs from "./helpers/IngekochteTVs.js";
import TvsToSell from "./helpers/TeVerkopenTVs.js";
import ProductName from "./helpers/ProductNaam.js";
import ProductPrice from "./helpers/ProductPrijs.js";
import Productsize from "./helpers/ProductFormaat.js";
import minuss from './assets/minus.png';
import checks from './assets/check.png';


function App() {
    return (
        <div>
            <header className="PageHead">
                <h1>Tech it easy dashboard</h1>
            </header>
            <main className="PageMain">
                <h2>Verkoop overzicht</h2>
                <p1>Aantal producten {soldTvs(inventory)}</p1>
                <p2>Aantal ingekochte producten {purchasedTvs(inventory)}</p2>
                <p3>Aantal te verkopen producten {TvsToSell(inventory)}</p3>
                <article>
                    <img src="https://image.coolblue.nl/max/500x500/products/1786196" alt="Tv"/>
                <br/>
                <p4>Product naam: {ProductName(bestSellingTv)}</p4>
                <br/>
                <p5>Product prijs: {ProductPrice(bestSellingTv)}</p5>
                <br/>
                <p6>Product Formaat: {Productsize(bestSellingTv)}</p6>
                    <br/>
                    <p7> wifi <img src={checks}/> speech <img src={minuss}/> hdr <img src={checks}/> bluethooth <img src={checks}/> ambilight <img src={minuss}/> </p7>
                </article>
            </main>
        </div>
    )
}

export default App
