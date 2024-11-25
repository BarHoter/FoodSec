// Sample data for consumer requests
const requests = [
    { consumerNumber: 'C123', productBarcode: 'P001', quantity: 10 },
    { consumerNumber: 'C124', productBarcode: 'P002', quantity: 5 },
    { consumerNumber: 'C125', productBarcode: 'P003', quantity: 12 },
    // Add more requests as needed
];

// Function to display the requests in a table
function displayRequests() {
    const container = document.getElementById("requestsContainer");
    let tableHtml = "<table><thead><tr><th>Consumer Number</th><th>Product Barcode</th><th>Quantity</th><th>Actions</th></tr></thead><tbody>";

    requests.forEach((request, index) => {
        tableHtml += `<tr>
            <td>${request.consumerNumber}</td>
            <td>${request.productBarcode}</td>
            <td>${request.quantity}</td>
            <td>
                <button onclick="approveRequest(${index})">Approve</button>
                <button onclick="rejectRequest(${index})">Reject</button>
            </td>
        </tr>`;
    });

    tableHtml += "</tbody></table>";
    container.innerHTML = tableHtml;
}

// Function to approve a request
function approveRequest(index) {
    alert(`Request from Consumer ${requests[index].consumerNumber} approved.`);
    // You can also add code to handle approval, like updating a database
}

// Function to reject a request
function rejectRequest(index) {
    alert(`Request from Consumer ${requests[index].consumerNumber} rejected.`);
    // You can also add code to handle rejection, like updating a database
}

// Call the function to display requests when the page loads
window.onload = displayRequests;
