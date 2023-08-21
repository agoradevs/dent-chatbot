const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');

const flowPrincipal = addKeyword(['hola', 'ole', 'alo'])
    .addAnswer([
        '🙌 ¡Bienvenido a Decodex! Somos una empresa especializada en el desarrollo de software y automatización de procesos para negocios y empresas pequeñas',
        'Estamos aquí para brindarte soluciones personalizadas que satisfagan las necesidades únicas de tu negocio.'
    ])
    .addAnswer(
        [
            '¿En qué podemos asistirte hoy?',
            '(Te aconsejamos ver de la opcion 1 a la 3 antes de consultar para un servicio)',
        ]
    )
    .addAnswer(
        [
            '👉 1.- Beneficios para tu negocio',
            '👉 2.- Consultar precios',
            '👉 3.- Atención al cliente',
        ]
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
