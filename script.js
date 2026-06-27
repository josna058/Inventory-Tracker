let products = JSON.parse(localStorage.getItem("products")) || [];

displayProducts();

function addProduct() {

    const name = document.getElementById("productName").value;
    const quantity = document.getElementById("quantity").value;

    if (name === "" || quantity === "") {
        alert("Enter all fields");
        return;
    }

    products.push({
        name: name,
        quantity: Number(quantity)
    });

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

    document.getElementById("productName").value = "";
    document.getElementById("quantity").value = "";

    displayProducts();
}

function deleteProduct(index) {

    products.splice(index,1);

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

    displayProducts();
}

function displayProducts() {

    const table = document.getElementById("productTable");

    table.innerHTML="";

    let total=0;

    products.forEach((product,index)=>{

        total += product.quantity;

        table.innerHTML += `
        <tr>

            <td>${product.name}</td>

            <td>${product.quantity}</td>

            <td>
                <button onclick="deleteProduct(${index})">
                Delete
                </button>
            </td>

        </tr>
        `;

    });

    document.getElementById("totalQuantity").innerText=total;

}
