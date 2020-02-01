function createElement(className, idName, element){
    let node = document.createElement(element);
    if (className != null) {
        node.setAttribute("class", className)
    }
    if(idName != null) {
        node.setAttribute("id", idName)
    }

    return node;
}

export default createElement;
