import { post } from 'axios';

const token = 'TU_TOKEN_DE_ACCESO';
const phoneNumberId = 'TU_PHONE_NUMBER_ID';
const recipientPhoneNumber = 'NUMERO_DEL_DESTINATARIO';
const message = 'Este es el mensaje chido que quieres enviar';

post(`https://graph.facebook.com/v15.0/${phoneNumberId}/messages`, {
    messaging_product: "whatsapp",
    to: recipientPhoneNumber,
    type: "text",
    text: { body: message }
}, {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
})
.then(response => {
    console.log('Mensaje enviado:', response.data);
})
.catch(error => {
    console.error('Error al enviar mensaje:', error);
});
