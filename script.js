const fetch = require('node-fetch');

async function startNieuwSpel() {
    const functionEndpoint = '<URL_van_je_Azure_Function>';

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // Optioneel: data die naar de functie wordt gestuurd
        body: JSON.stringify({ /* eventuele data */ }),
    };

    try {
        const response = await fetch(functionEndpoint, requestOptions);
        const data = await response.json();
        console.log('Response van de Azure Function:', data);
        // Verwerk de ontvangen data indien nodig
    } catch (error) {
        console.error('Fout bij het aanroepen van de Azure Function:', error);
    }
}

// Roep de functie aan om het spel te starten
startNieuwSpel();
