

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