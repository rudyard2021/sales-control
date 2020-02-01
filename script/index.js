import newProduct from "./product.js";
import newConfiguration from "./configuration.js";

var printf = console.log;

window.onload = ()=>{
    let productNode = document.getElementById("products");
    let configNode = document.getElementById("configuration");

    for(let index in datas){
        let productItem = newProduct(datas[index]);
        let elementConfig = newConfiguration(datas[index], productItem);

        productNode.appendChild(productItem);
        configNode.appendChild(elementConfig);
    }

    let productMenu = document.getElementById("productMenu");
    let configMenu = document.getElementById("configMenu");

    productMenu.addEventListener("click", (e)=>{
        configNode.style.display = "none";
        productNode.style.display = "flex";
    });

    configMenu.addEventListener("click", (e)=>{
        productNode.style.display = "none";
        configNode.style.display = "flex";
    });

};
