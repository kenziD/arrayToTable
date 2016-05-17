var createHead = function(array) {
    var thead = document.createElement("thead");
    var thead_tr = document.createElement("tr");
    var indexKey = document.createTextNode("index");
    var theadIndexTd = document.createElement("td");
    theadIndexTd.appendChild(indexKey);
    thead_tr.appendChild(theadIndexTd);

    if (typeof array[0] == "object") {
        for (var key in array[0]) {
            if (array[0].hasOwnProperty(key)) {
                var td = document.createElement("td");
                var objProperty = document.createTextNode(key);
                td.appendChild(objProperty);
                thead.appendChild(thead_tr).appendChild(td);
            }
        }
    } else {
        var td = document.createElement("td");
        var value = document.createTextNode("value");
        td.appendChild(value);
        thead.appendChild(thead_tr).appendChild(td);
    }
    return thead
}

var createBody = function(array) {

    var tbody = document.createElement("tbody");
    for (var i = 0; i < array.length; i++) {
        var tr = document.createElement("tr");
        var oneRow = tbody.appendChild(tr);
        var index = document.createTextNode(i);
        var index_td = document.createElement("td");
        index_td.appendChild(index);

        oneRow.appendChild(index_td);
        if (typeof array[i] == "object") {
            for (var key in array[i]) {
                if (array[i].hasOwnProperty(key)) {
                    var td = document.createElement("td");
                    var text = document.createTextNode(array[i][key]);
                    oneRow.appendChild(td).appendChild(text);
                }
            }
        } else {
            var td = document.createElement("td");
            var text = document.createTextNode(array[i]);
            oneRow.appendChild(td).appendChild(text);
        }
    }
    return tbody
}
var createTable = function(array) {
    var thead = this.createHead(array);
    var tbody = this.createBody(array);
    var table = document.createElement("table");
    table.appendChild(thead);
    table.insertBefore(tbody, thead.nextSibling);
    return table
}
var renderTable = function(className, table) {
    var render = document.getElementsByClassName(className);
    render[0].appendChild(table);
}

var array2Table = {
    createHead: createHead,
    createBody: createBody,
    createTable: createTable,
    renderTable: renderTable
};
