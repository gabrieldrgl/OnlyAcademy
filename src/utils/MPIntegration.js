import { ACCESS_TOKEN } from "../../config.json"

export const handleIntegrationMP = async () => {
  const hoje = new Date();
  const dataFormatada = hoje.toISOString();
  hoje.setFullYear(hoje.getFullYear() + 1);
  const dataFormatada2 = hoje.toISOString();

    const preferencia = {
      "auto_recurring": {
        "frequency": 1,
        "frequency_type": "months",
        "start_date": `${dataFormatada}`,
        "end_date": `${dataFormatada2}`,
        "transaction_amount": 10,
        "currency_id": "BRL"
      },
      "payer_email": "test_user@testuser.com",
      "back_url": "https://www.mercadopago.com.ar",
      "reason": "Yoga classes",
      "card_token_id": "e3ed6f098462036dd2cbabe314b9de2a"
    }

    try {
        const response = await fetch('https://api.mercadopago.com/preapproval', {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(preferencia)
        })

        const data = await response.json()

        console.log(data)

        return data.init_point

    } catch (error) {
        console.log(error)
    }
}
