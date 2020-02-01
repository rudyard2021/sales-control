import createElement from './helper.js';

// <div>
//     <input type="text" name="" >
//     <input type="text" name="">
// </div>

function newConfiguration(data, element){
    let itemNode = createElement(null, null, "div");
    let productNode = createElement(null, null, "input");
    let priceNode = createElement(null, null, "input");

    itemNode.appendChild(productNode);
    itemNode.appendChild(priceNode);

    productNode.value = data.title;
    priceNode.value = data.price;

    productNode.addEventListener("change", (e)=>{
        let value =  e.target.value;
        data.title = value;
        let _imgNode = element.children[1];
        _imgNode.title = value;

    });

    priceNode.addEventListener("change", (e)=>{
        let value =  e.target.value;
        data.price = parseFloat(value);
        let _priceNode = element.children[2];
        _priceNode.innerHTML = value;
    });

    return itemNode;
}
export default newConfiguration;
