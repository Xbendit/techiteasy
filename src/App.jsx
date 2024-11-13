import './App.css';
import soldTvs from "./helpers/VerkochteTVs.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";
import purchasedTvs from "./helpers/IngekochteTVs.js";
import TvsToSell from "./helpers/TeVerkopenTVs.js";
import ProductName from "./helpers/ProductNaam.js";
import ProductName2 from "./helpers/ProductNaam.js";
import ProductPrice from "./helpers/ProductPrijs.js";
import ProductPrice2 from "./helpers/ProductPrijs.js";
import Productsize from "./helpers/ProductFormaat.js";
import Productsize2 from "./helpers/ProductFormaat.js";
import minuss from './assets/minus.png';
import checks from './assets/check.png';
import './constants/oefening.js';


function App() {
    return (
        <div>
            <header className="PageHead">
                <h1>Tech it easy dashboard</h1>
            </header>
            <main className={"PageMain"}>
                <h2>Verkoop overzicht</h2>
                <div className={"devider"}>
                    <article className={"productdash1"}>
                        <nav className={"nav1"}>
                            <h3>Aantal verkochte producten</h3>
                            <p1 className={"soltv"}>{soldTvs(inventory)}</p1>
                        </nav>
                    </article>
                    <article className={"productdash2"}>
                        <nav className={"nav2"}>
                            <h3>Aantal ingekochte producten</h3>
                            <p1>{purchasedTvs(inventory)}</p1>
                        </nav>
                    </article>
                    <article className={"productdash3"}>
                        <nav className={"nav3"}>
                            <h3>Aantal te verkopen producten</h3>
                            <p1> {TvsToSell(inventory)}</p1>
                        </nav>
                    </article>
                </div>
                <h2>Best verkochte tv</h2>
                <div className={"devider2"}>
                <article className={"BestTV"}>
                    <img src="https://image.coolblue.nl/max/500x500/products/1786196" alt="Tv" className={"Bestetv"}/>
                    <br/>
                    <div className={"gegevens"}>
                        <p4>{ProductName(bestSellingTv)}</p4>
                        <p5>{ProductPrice(bestSellingTv)}</p5>
                        <p6>{Productsize(bestSellingTv)}</p6>
                        <p7> wifi <img src={checks}/> speech <img src={minuss}/> hdr <img src={checks}/> bluethooth <img
                            src={checks}/> ambilight <img src={minuss}/></p7>
                    </div>
                </article>
                </div>
                <article>
                    <h2>Alle tvs</h2>
                    <button className={"MostSoldFirst"} type="button">Meest verkochte eerst</button>
                    <button className={"CheapestFirst"} type="button">Goedkoopste eerst</button>
                    <button className={"BestforSports"} type="button">Meest geschikte voor sport eerst</button>
                    <div className={"tvlist"}>
                    <ul>
                        {inventory.map((alltvs)=> {
                            /*console.log(alltvs)*/
                         return (
                             <li key={alltvs.type}>
                                 <div className={"gegevens2"}>
                                     <img src={(alltvs.sourceImg)} alt="Tvs" className={"AlltvsImg"}/>
                                     <div className={"gegevens3"}>
                                         <p>{ProductName2(alltvs)}</p>
                                         <p>{ProductPrice2(alltvs)}</p>
                                         <p>{Productsize2(alltvs)}</p>
                                         {alltvs.options.map((alloptions)=> {
                                             console.log(alloptions)
                                             if (alloptions.applicable === true){
                                                 return alloptions.name + <img src={checks}/>
                                             }else{
                                                 return alloptions.name + <img src={minuss}/>
                                             }
                                         })}
                                     </div>
                                 </div>
                             </li>
                         )
                             })}
                    </ul>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default App
