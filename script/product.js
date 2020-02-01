import createElement from "./helper.js";

// <div class="item">
    // <div class="add">
    //     <button id="add">+</button>
    //     <p class="counter">5</p>
    //     <button id="subtract">-</button>
    // </div>
    // <img src="#" alt="imagen">
// </div>

function newProduct(data){
    let itemNode = createElement("item", null, "div");
    let addNode = createElement("add", null, "div");
    let addButton = createElement(null, null, "button");
    let counterNode = createElement("counter", null, "p")
    let subtractButton = createElement(null, null, "button");
    let imageNode = createElement(null, null, "img");
    let priceNode = createElement("price", null, "p");

    itemNode.appendChild(addNode);
    addNode.appendChild(addButton);
    addNode.appendChild(counterNode);
    addNode.appendChild(subtractButton);
    itemNode.appendChild(imageNode);
    itemNode.appendChild(priceNode);

    counterNode.appendChild(document.createTextNode("0"));
    priceNode.innerHTML = data.price;
    addButton.innerHTML = "+";
    subtractButton.innerHTML = "-";
    imageNode.src = data.img;
    imageNode.title = data.title;

    let totalNode = document.getElementById("total");

    addButton.addEventListener("click", (e) =>{
        let value = counterNode.innerHTML;
        let newValue = parseInt(value) + 1;
        counterNode.innerHTML = newValue;

        let total = parseFloat(totalNode.innerHTML)
        total =  total + data.price;
        totalNode.innerHTML = total;
    });

    subtractButton.addEventListener("click", (e) => {
        let value = counterNode.innerHTML;
        let newValue = parseInt(value) - 1;
        if (newValue < 0)
            return
        counterNode.innerHTML = newValue;
        let total = parseFloat(totalNode.innerHTML)
        total =  total - data.price;
        totalNode.innerHTML = total;
    });
    return itemNode;
}



export default newProduct;
