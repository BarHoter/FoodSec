// Sample data to represent existing requests
const requests = [
    { producerNumber: 'P101', productBarcode: 'PB001', quantity: 20 },
    { producerNumber: 'P102', productBarcode: 'PB002', quantity: 15 },
    // Add more initial requests if needed
];

// Function to display requests in a table
function displayRequests() {
    const container = document.getElementById("requestsContainer");
    let tableHtml = "<table><thead><tr><th>Producer Number</th><th>Product Barcode</th><th>Quantity</th></tr></thead><tbody>";

    requests.forEach((request) => {
        tableHtml += `<tr>
            <td>${request.producerNumber}</td>
            <td>${request.productBarcode}</td>
            <td>${request.quantity}</td>
        </tr>`;
    });

    tableHtml += "</tbody></table>";
    container.innerHTML = tableHtml;
}

// Function to add a new request
function addRequest() {
    const producerNumber = document.getElementById("producerNumber").value;
    const productBarcode = document.getElementById("productBarcode").value;
    const quantity = parseInt(document.getElementById("quantity").value, 10);

    if (producerNumber && productBarcode && quantity) {
        requests.push({ producerNumber, productBarcode, quantity });
        displayRequests(); // Update the table display
        document.getElementById("newRequestForm").reset(); // Clear the form
    } else {
        alert("Please fill in all fields correctly.");
    }
}

// Display existing requests when the page loads
window.onload = displayRequests;
