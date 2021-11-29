let myItems = [];
let total = 0;
let genearlTotal = 0;

function addItemToList() {
    const name = document.getElementById("itemName").value;
    const price = Number(document.getElementById("itemPrice").value);
    let displayList = document.getElementById("list");
    let displayTotal = document.getElementById("total");


    if (name == "") {
        alert("Item name can't be empty");
        return;
    }

    if (price == 0) {
        alert("Price can't be empty or 0");
        return;
    }

    myItems.push({ name: name, price: price });

    displayList.innerHTML = "";

    let total = 0;

    for (let i = 0; i < myItems.length; i++) {
        displayList.innerHTML +=
            "<p><b>Name</b> " +
            myItems[i].name +
            ", <br>Price:</b> R" +
            myItems[i].price +
            "</p>";

        total += myItems[i].price;
    }

    generalTotal = total;
    displayTotal.innerHTML = "Total: R" + total;
    removeClear();
}

function CalculateClientChange() {
    const ClientMoney = Number(document.getElementById("ClientMoney").value);
    let ClientDisplay = document.getElementById("ClientChange");

    if (ClientMoney == 0) {
        alert("Give me the money");
        return;
    }

    if (ClientMoney < generalTotal) {
        alert("Your money is not enough, add money");
        return;
    }

    ClientDisplay.innerHTML = "Client Change: R" + (ClientMoney - generalTotal);
}

function removeClear() {
    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
}
