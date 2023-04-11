let createTable = document.createElement("table");
createTable.setAttribute("id", "myTable");
document.body.appendChild(createTable);
let createRow = document.createElement("tr");
createRow.setAttribute("id", "myTr");
document.querySelector("#myTable").appendChild(createRow);

let createData = document.createElement("td");
for (let j = 0; j < 6; j++) {
    for (let i = 0; i < 6; i++) {
        let inputData = document.createElement("input");
        inputData.setAttribute("id", "Row" + j + "element" + i);
        createData.appendChild(inputData);
        document.querySelector("#myTr").appendChild(createData);
    }
}
var createButton = document.createElement("BUTTON");
var clickAction = document.createTextNode("Submit");
createButton.setAttribute("id", "demo");
createButton.addEventListener("click", myFunction);
createButton.appendChild(clickAction);
document.body.appendChild(createButton);
var temp;
var finalResult = 0;
function myFunction() {
    for (let j = 0; j < 6; j++) {
        for (var i = 1; i < 2; i++) {
            var cals1 = document.querySelector("#Row" + j + "element" + i).value;
            var cals2 = document.querySelector("#Row" + j + "element" + (i + 1)).value;
            var cals3 = document.querySelector("#Row" + j + "element" + (i + 2)).value;
            var cals4 = document.querySelector("#Row" + j + "element" + (i + 3)).value;
            temp = i;
        }

        let tax1 = cals1 * cals3 / 100;
        let discount1 = cals1 * cals4 / 100;
        var product1 = (cals1 * cals2) + (tax1 * cals2 - discount1 * cals2);
        finalResult += product1;
        document.querySelector("#Row" + j + "element" + (temp + 4)).value = product1;
    }
    const para1 = document.createElement("p");
    para1.innerText = "The amount is : " + finalResult;
    document.body.appendChild(para1);
}