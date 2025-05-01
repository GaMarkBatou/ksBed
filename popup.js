document.addEventListener("DOMContentLoaded", function() {
    // Event listener for the "Search" button
    document.getElementById("searchButton").addEventListener("click", function() {
        const searchValue = document.getElementById("searchInput").value;
        const paddedSearchValue = searchValue.padStart(15, '0'); // Add leading zeros if necessary
        const url = `https://wtts.telekom.de/wtts/forms/ars-etts.telekom.de/eTTS:Main/Web/?eid=${encodeURIComponent(paddedSearchValue)}`;
        chrome.tabs.create({ url });
    });


    // Event listener for the dropdown menu (selectable input)
    document.getElementById("selectOption").addEventListener("change", function() {
        const selectedOption = document.getElementById("selectOption").value;

        // Create a temporary textarea element
        const textarea = document.createElement("textarea");
        textarea.value = selectedOption;
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px"; // Hide the textarea off-screen
        document.body.appendChild(textarea);

        // Select and copy the value to clipboard
        textarea.select();
        document.execCommand("copy");

        // Clean up: remove the temporary textarea
        document.body.removeChild(textarea);
    });
});
