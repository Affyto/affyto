const AT_PAT = import.meta.env.AT_PAT;
const AT_LISTING_BASE = import.meta.env.AT_LISTING_BASE;
const AT_EMAIL_BASE = import.meta.env.AT_EMAIL_BASE;

document.getElementById("subscribe-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    
    if (!email) {
        alert("Please enter a valid email.");
        return;
    }

    const AIRTABLE_PAT = "your_airtable_personal_access_token";  // Replace this with your actual Airtable PAT
    const AIRTABLE_BASE_ID = "your_airtable_base_id";  // Replace this with your actual Airtable Base ID
    const AIRTABLE_TABLE_NAME = "Subscribers";  // Make sure this matches your table name in Airtable

    const response = await fetch(`https://api.airtable.com/v0/${AT_EMAIL_BASE}/Emails`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${AT_PAT}`,
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



/*
async function fetchListings() {
    const response = await fetch(f"https://api.airtable.com/v0/{AT_BASE}/Listings", {
        headers: {
            "Authorization": "AT_PAT"
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