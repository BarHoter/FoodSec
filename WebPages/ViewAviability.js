document.getElementById("fileInput").addEventListener("change", handleFile);

function handleFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });

        // Assuming the first sheet contains the data we need
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        displayTable(jsonData);
    };
    reader.readAsArrayBuffer(file);
}

function displayTable(data) {
    const tableContainer = document.getElementById("tableContainer");
    let tableHtml = "<table>";

    // Add the first row as the header row
    tableHtml += "<thead><tr>";
    data[0].forEach((header) => {
        tableHtml += `<th>${header || ""}</th>`;
    });
    tableHtml += "</tr></thead>";

    // Add the rest of the rows as table body
    tableHtml += "<tbody>";
    data.slice(1).forEach((row) => {
        tableHtml += "<tr>";
        row.forEach((cell) => {
            tableHtml += `<td>${cell || ""}</td>`;
        });
        tableHtml += "</tr>";
    });
    tableHtml += "</tbody></table>";

    tableContainer.innerHTML = tableHtml;
}
