// <div>
//     <input type="text" name="" >
//     <input type="text" name="">
// </div>

function newConfiguration(data, element) {
    let itemNode = createElement(null, null, "div");
    let enabledProduct = createElement(null, null, "checkbox");
    let productNode = createElement(null, null, "text");
    let priceNode = createElement(null, null, "text");

    itemNode.appendChild(enabledProduct);
    itemNode.appendChild(productNode);
    itemNode.appendChild(priceNode);

    productNode.value = data.title;
    priceNode.value = data.price;
    enabledProduct.checked = true;

    enabledProduct.onclick = function(e){
        let display = "none";
        if (enabledProduct.checked)
            display = "block";
        element.style.display = display
    };

    productNode.addEventListener("change", (e) => {
        let value = e.target.value;
        data.title = value;
        let _imgNode = element.children[1];
        _imgNode.title = value;

    });

    priceNode.addEventListener("change", (e) => {
        let value = e.target.value;
        let newValue = parseFloat(value);
        if (isNaN(newValue)) {
            priceNode.value = data.price;
            return;
        }
        data.price = newValue;
        let _priceNode = element.children[2];
        _priceNode.innerHTML = newValue.toFixed(2);
    });

    return itemNode;
}
