// Sample data for demonstration purposes
const requests = [
    { supplierID: "S123", barcode: "B001", quantity: 10 },
    { supplierID: "S124", barcode: "B002", quantity: 20 },
    { supplierID: "S125", barcode: "B003", quantity: 15 }
  ];
  
  // Function to load requests data into the table
  function loadRequests() {
    const tableBody = document.querySelector("#requestsTable tbody");
  
    requests.forEach(request => {
      const row = document.createElement("tr");
  
      // Create cells for Supplier ID, Barcode, and Quantity
      const supplierIDCell = document.createElement("td");
      supplierIDCell.textContent = request.supplierID;
      row.appendChild(supplierIDCell);
  
      const barcodeCell = document.createElement("td");
      barcodeCell.textContent = request.barcode;
      row.appendChild(barcodeCell);
  
      const quantityCell = document.createElement("td");
      quantityCell.textContent = request.quantity;
      row.appendChild(quantityCell);
  
      // Create cell for Accept/Decline buttons
      const actionCell = document.createElement("td");
      
      const acceptButton = document.createElement("button");
      acceptButton.textContent = "Accept";
      acceptButton.classList.add("accept-button");
      acceptButton.onclick = () => handleAction("Accepted", request);
      
      const declineButton = document.createElement("button");
      declineButton.textContent = "Decline";
      declineButton.classList.add("decline-button");
      declineButton.onclick = () => handleAction("Declined", request);
  
      actionCell.appendChild(acceptButton);
      actionCell.appendChild(declineButton);
      row.appendChild(actionCell);
  
      // Append the row to the table
      tableBody.appendChild(row);
    });
  }
  
  // Function to handle the accept/decline action
  function handleAction(action, request) {
    alert(`${action} request from SupplierID: ${request.supplierID}, Barcode: ${request.barcode}, Quantity: ${request.quantity}`);
    // Here, you can add additional code to handle accepted/declined requests
  }
  
  // Load requests on page load
  window.onload = loadRequests;
  