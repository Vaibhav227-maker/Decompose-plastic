// Function to generate Excel Sheet
function generateExcelSheet(data, fileName) {
    const wb = XLSX.utils.book_new(); // Create a new workbook
    const ws = XLSX.utils.json_to_sheet(data); // Convert data to worksheet
    XLSX.utils.book_append_sheet(wb, ws, "Users"); // Append worksheet to workbook
    XLSX.writeFile(wb, fileName); // Download the Excel file
}

// Handle Signup Form
document.querySelector("#signup-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Collect form data
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const timestamp = new Date().toLocaleString();

    // Store user data
    const userData = [
        {
            Name: name,
            Email: email,
            Password: password,
            Timestamp: timestamp,
        },
    ];

    // Generate Excel file
    generateExcelSheet(userData, "users.xlsx");

    alert("Signup successful! Excel file generated.");
    window.location.href = "login.html"; // Redirect to login page
});