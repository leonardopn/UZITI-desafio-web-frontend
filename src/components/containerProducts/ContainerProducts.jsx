import React from 'react';
import CardProduct from "../cardProduct/CardProduct"
import "./containerProducts.css"

const ContainerProducts = (props) => {
    return (
        <div className="container_products">
            <CardProduct img={"https://shopfacil.vteximg.com.br/arquivos/ids/3713830-430-430/imagem1.jpg?v=636128647728930000"} title="Modelo Negra" details={{ unit: 12, desc: "33oz Bottle"}} price={32} promotion={"Buy 3, get 1 free."}></CardProduct>
            <CardProduct img={"https://lh3.googleusercontent.com/proxy/Jq_a8BYmhYDEwSTmea_vg7OLL6BDcNevptEPj4LyKOnoI-ntWtcjBe0C05aOSv5DB9VlUIlokH4HRb-I7Bm7cagHfj8cBoyoCY9u4AcSbNV88kl-p_Ce02UUD0073bl4wobtyQ"} title="Presidente Light" details={{ unit: 16, desc: "330ml Bottle", recycle: true }} price={43} promotion={"Buy 3, get 1 free Red Bull or 2 Pepsi Black."}></CardProduct>
            <CardProduct img={"https://lh3.googleusercontent.com/proxy/dflswRWATFwWxcJITv88axvWlPBXTruVp2unkdqNbI_SOMu95D6fjXQ0qXGTElCoYnfrR1iTWHZLH5neBB9Z6AnSm7PM9UUSQUybjuczZS_uzZKTiyDrYnFYaLlbPdxy"} title="Brahma Light very very light 33onz - Caja [12 Botellas]" details={{ unit: 16, desc: "330ml Bottle", recycle: true }} price={43} promotion={"For every 5 you buy, get up to 2 free."}></CardProduct>
            <CardProduct img={"https://cdn.awsli.com.br/300x300/1719/1719421/produto/73408801/54f8e33690.jpg"} title="Budweiser" details={{ unit: 16, desc: "330ml Bottle and extra long summary on multiple lines", recycle: true }} price={26} promotion={"For every 5 you buy, get up to 3 free Red Bull or 2 free Pepsi Black."}></CardProduct>
        </div>
    );
}

export default ContainerProducts;