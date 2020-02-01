var printf = console.log;

window.onload = () => {
    let productNode = document.getElementById("products");
    let configNode = document.getElementById("configuration");

    for (let index in datas) {
        let productItem = newProduct(datas[index]);
        let elementConfig = newConfiguration(datas[index], productItem);

        productNode.appendChild(productItem);
        configNode.appendChild(elementConfig);
    }

    let productMenu = document.getElementById("productMenu");
    let configMenu = document.getElementById("configMenu");
    let totalContainer = document.getElementById("total-container");
    let applySticky = true;

    productMenu.addEventListener("click", (e) => {
        configNode.style.display = "none";
        productNode.style.display = "flex";
        applySticky = true;
    });

    configMenu.addEventListener("click", (e) => {
        productNode.style.display = "none";
        configNode.style.display = "flex";
        applySticky = false;
    });

    let resetNode = document.getElementById("reset");
    resetNode.addEventListener("click", (e) => {
        let priceNodes = document.getElementsByClassName("counter");
        for (let index in priceNodes) {
            priceNodes[index].innerHTML = "0";
        }
        document.getElementById("total").innerHTML = "0.00";
    });

    let topTotalContainer = totalContainer.offsetTop;
    let morePageY = document.body.clientHeight - topTotalContainer;


    window.onscroll = function () {
        let topNode = configMenu.offsetTop;
        if (applySticky && window.pageYOffset > topNode) {
            totalContainer.classList.add("sticky");
        } else {
            totalContainer.classList.remove("sticky");
        }
    };

    window.onresize = function () {
        topTotalContainer = totalContainer.offsetTop;
        morePageY = document.body.clientHeight - topTotalContainer;
    }
};
