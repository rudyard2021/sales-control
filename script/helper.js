function createElement(className, idName, element) {
    let node;
    if (isInput(element)){
        node = document.createElement("input");
        node.type = element;
    } else {
        node = document.createElement(element);
    }

    if (className != null) {
        node.setAttribute("class", className)
    }
    if (idName != null) {
        node.setAttribute("id", idName)
    }

    return node;
}

function isInput(name){
    let response = false;
    switch (name.toLowerCase()) {
        case "text":
        case "radio":
        case "checkbox":
            response = true;
            break;
    }
    return response;
}
