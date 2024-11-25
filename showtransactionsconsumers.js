let transactions = []; // To store the fetched data globally

// Function to create a table from JSON data
function createTableFromJSON(data) {
    const table = document.getElementById("transactionsTable");

    // Clear existing rows
    table.innerHTML = '';

    // Create table header
    const headerRow = table.insertRow();
    Object.keys(data[0]).forEach(key => {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    });

    // Create table rows
    data.forEach(item => {
        const row = table.insertRow();

        // Insert data cells
        Object.values(item).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value !== null ? value : "N/A";
        });
    });
}

// Function to filter data based on date range
function filterTransactionsByDate() {
    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        alert("Please select valid start and end dates.");
        return;
    }

    // Filter the transactions within the date range
    const filteredData = transactions.filter(item => {
        const signatureDate = new Date(item.SignatureDate);
        return signatureDate >= startDate && signatureDate <= endDate;
    });

    // Rebuild the table with filtered data
    createTableFromJSON(filteredData);
}

// Fetch the newline-delimited JSON file and parse it
fetch('Transactions.json')
    .then(response => response.text())
    .then(text => {
        // Split the text by newline and parse each line as JSON
        transactions = text.trim().split('\n').map(line => JSON.parse(line));

        // Sort data by SignatureDate
        transactions.sort((a, b) => new Date(a.SignatureDate) - new Date(b.SignatureDate));

        // Create table from sorted data
        createTableFromJSON(transactions);
    })
    .catch(error => console.error("Error fetching JSON data:", error));

// Attach filter button event listener
document.getElementById("filterButton").addEventListener("click", filterTransactionsByDate);
