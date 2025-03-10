/*
async function fetchListings() {
    const response = await fetch("https://api.airtable.com/v0/appsIFCfmbYiGKRzb/Listings", {
        headers: {
            "Authorization": "pate6rGxWkTSWdCKr.bd414c22ef6b09af25a90317ad45bc8c34395a33c3a4b63b74e2bcf652b126df"
        }
    });

    const data = await response.json();
    let html = "";

    data.records.forEach(listing => {
        html += `<div class="listing">
            <h2>${listing.fields.Address}</h2>
            <p>Price: $${listing.fields.Price}</p>
            <p>Beds: ${listing.fields.Beds} | Baths: ${listing.fields.Baths}</p>
            <a href="${listing.fields.Link}" target="_blank">View Listing</a>
        </div>`;
    });

    document.getElementById("listings").innerHTML = html;
}

// Initial Fetch
fetchListings();

// Auto-refresh every 5 minutes (300,000 ms)
setInterval(fetchListings, 300000);
*/

document.getElementById("subscribe-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const AIRTABLE_PAT = import.meta.env.AIRTABLE_PAT;
    const AIRTABLE_BASE_ID = import.meta.env.AIRTABLE_BASE_ID;

    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Subscribers`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${AIRTABLE_PAT}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fields: {
                Email: email
            }
        })
    });

    if (response.ok) {
        document.getElementById("success-message").style.display = "block";
        document.getElementById("email").value = ""; // Clear input
    } else {
        alert("Something went wrong. Try again!");
    }
});
