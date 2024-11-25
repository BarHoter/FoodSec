function sendRequest() {
    const producerID = document.getElementById('SupplierID').value;
    const barcode = document.getElementById('barcode').value;
    const quantity = document.getElementById('quantity').value;
    const statusMessage = document.getElementById('statusMessage');
  
    if (producerID && barcode && quantity) {
      // Placeholder for sending request logic (e.g., to a server or processing it locally)
      console.log(`Request sent to Supplier: ${SupplierID}, Barcode: ${barcode}, Quantity: ${quantity}`);
  
      // Display success message
      statusMessage.textContent = 'Request sent successfully!';
      statusMessage.className = 'success';
      
      // Clear the form fields after submission
      document.getElementById('requestForm').reset();
    } else {
      // Display error message
      statusMessage.textContent = 'Please fill out all fields.';
      statusMessage.className = 'error';
    }
  }
  