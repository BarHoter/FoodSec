// Function to create a table from filtered JSON data
function createTableFromJSON(data) {
    const table = document.getElementById("transactionsTable");
    table.innerHTML = ""; // Clear the table content to handle re-rendering

    // Create table header
    const headerRow = table.insertRow();
    Object.keys(data[0]).forEach(key => {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
    });

    // Create table rows
    data.forEach((item) => {
        const row = table.insertRow();

        // Insert data cells
        Object.values(item).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value !== null ? value : "N/A";
        });
    });
}

// Fetch the newline-delimited JSON file and parse it
fetch('Transactions.json')
    .then(response => response.text())
    .then(text => {
        // Split the text by newline and parse each line as JSON
        const data = text.trim().split('\n').map(line => JSON.parse(line));

        // Retrieve the userID from localStorage
        const userID = localStorage.getItem('userID');

        if (!userID) {
            console.error("No userID found in localStorage. Redirecting to login.");
            alert("Please log in to view transactions.");
            window.location.href = "HomePage.html"; // Redirect to login or homepage
            return;
        }

        // Filter the data to include only rows where Producer matches the userID
        const filteredData = data.filter(transaction => transaction.Producer === userID);

        if (filteredData.length === 0) {
            console.log("No transactions found for this Producer.");
            const table = document.getElementById("transactionsTable");
            table.innerHTML = `
                <tr>
                    <td colspan="7" style="text-align: center;">No transactions found for Producer: ${userID}</td>
                </tr>
            `;
            return;
        }

        // Create the table with filtered data
        createTableFromJSON(filteredData);
    })
    .catch(error => console.error("Error fetching JSON data:", error));
