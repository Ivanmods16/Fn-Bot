// by https://github.com/elrebelde21

let handler = m => m
handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
const user = `@${m.sender.split`@`[0]}`;
//let textodem = m.text;
if (chat.isBanned) return
if (!m.fromMe) return 
let vn = 'https://qu.ax/eGdW.mp3'
let bot = `${pickRandom([`*Hola ${user} soy un bot el que puedo ayudar? 👉👈*`, `Aqui estoy`, `bot tu abuela`, `que quiere?`, `No dispoble 🫣`, `Hola aqui estoy soy tu botsito sexy el que puedo ayudar uwu`])}
`.trim()//`
let txt = `*\`💫 Te presentamos un nuevo hosting: "CorinPlus" host propios 😎\`*

*¿Muy lento tu nokia y necesitas tener activo tu bot 24/7?*

> *Te tenemos la mejor opción para mantener activo tu bot 24/7, a precios muy accesibles. Es muy barato y todos pueden comprar.*

🟢 \`\`\`Información del Host\`\`\`

💻 *Página:*
https://dash.corinplus.com

*🟢 Dashboard:*
https://dash.corinplus.com

⚙️ *Panel*
https://panel.corinplus.com

💥 *Comunidad de WhatsApp:*
https://chat.whatsapp.com/HR3OLhsuZPqCMImzuHcuON

*🟣 Discord:*
https://discord.com/invite/bjKpRBtkHv

🧡 *Canal de WhatsApp:*
https://whatsapp.com/channel/0029VakUvreFHWpyWUr4Jr0g

🛍️ *Método de pago:*
*• PayPal (opción 1):* https://paypal.me/OfcGB
*• PayPal (opcion 2):* paypal.me/Corinplushost
*• Mercado pago, alías:* OficialGB
*• Naranja x, alías:* hostingCalidad
*• Uala, CVU:* 0000007900204304075982
*• Yape/plin (Perú) :* 976673519
*• Tigo Money (Paraguay):* +595 983 799436
*• Personal Pay (Paraguay):* +595 973 755967
*• Yape o método QR (Bolivia):* +59169082575
*• Bitcoin (binance) :* 967522575
*• Pago con tarjeta:* wa.me/390684003755

*• Link de pago:*
• _link.mercadopago.com.ar/h0sting_
• _https://payment-link.astropay.com/RbMJ_
*• Patreon:* _https://patreon.com/CorinPlus_hosting_
*• Kofi:* _https://ko-fi.com/corinplus_

🗣📲 *Contacto:*
• wa.me/5214531287294
• wa.me/573147616444
• https://www.facebook.com/elrebelde21` 

if (m.text.includes(`Bot`) || m.text.includes(`bot`) || m.text.includes(`simi`) || m.text.includes(`alexa`)) {   
if (m.text.includes('jadibot') || m.text.includes('bots') || m.text.includes('serbot') || m.text.includes('instalarbot') ||  m.text.includes('infobot')) return
//try {
await conn.sendPresenceUpdate('composing', m.chat)
async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://lumin-ai.xyz/", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result;
} catch (error) {
console.error(error);
}}

let query = m.text;
let username = `${m.pushName}`;

let syms1 = `Tomarás el rol de un bot de Whatsapp creado por elrebelde21. Tu nombre sera LoliBot, Tu idioma es el español, pero puedes responder en diferentes idiomas. tiene este rol que chat divertido con exploit incluido osea los quiere dices es que este rol solo es humor, divertido, no que tome nada real, tu respuesta sera divertida, humor, y usar mucho emojis el tu respuesta.

"general risa el chat por que este rol actúal más como simsimi" Chatbot no chatgpt. 

los quiere dices que tu respuesta sera humor puro, risa, memes.`;  

let result = await luminsesi(query, username, syms1);
await conn.reply(m.chat, result, m)
/*
let gpt = await fetch(`https://deliriusapi-official.vercel.app/tools/simi?text=${m.text}`)
let res = await gpt.json()
await m.reply(res.data.message)
} catch {
try {
if (text.includes('Hola')) text = text.replace('Hola', 'Hello');
if (text.includes('hola')) text = text.replace('hola', 'Hello');
if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO');
const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + text);
const resu = await reis.json();
const nama = m.pushName || '1';
const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0]);
const res = await api.json();
const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt);
const resu2 = await reis2.json();
m.reply(resu2[0][0][0]);
} catch {
return m.reply([`Simsimi esta durmiendo no molesta 🥱`, `Callarte`, `Api simsimi caida`, `Simsimi esta ocupado cojieron con tu hermana vuelva mas tarde 🥵`, `NO MOLESTE PUTA`, `No hay señar`, `No estoy disponible`].getRandom());
}}*/
}

if (/^CorinPlus|corinplus|infinityWa|infohost|hosting$/i.test(m.text)) {
 await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🤖 𝐂O𝐑𝐈𝐍𝐏𝐋𝐔𝐒-𝐇𝐎𝐒𝐓 🤖`,
body: `✅ Hosting de Calidad`,
"previewType": "PHOTO",
thumbnailUrl: 'https://telegra.ph/file/551d3d544d7bc607fd337.jpg', 
sourceUrl: nna}}}, { quoted: m})
} 
    
if (/^todo bien$/i.test(m.text) ) { //sin prefijo
conn.reply(m.chat, `𝑩𝒊𝒆𝒏 𝒄𝒂𝒑𝒐 😎 𝒚 𝒕𝒖`, m) }

if (/^e$/i.test(m.text) ) { //sem prefixo
conn.reply(m.chat, `𝑸𝒖𝒆 𝒃𝒖𝒆𝒏𝒐 𝒔𝒂𝒃𝒆𝒓 𝒍𝒂 𝒍𝒆𝒕𝒓𝒂 𝒆`, m)}

if (/^@5492266466080|@56964787183|@5492266613038$/i.test(m.text) ) {
conn.reply(m.chat, `*_[ ⚠ ️] No etiquetes a mi creador, si tiene alguna consulta o dudas, hablarle el pv solo por tema del bot_*`, m) }

/* if (/^Mande porno|porno|paja$/i.test(m.text) ) { //sem prefixo
    let teks = `
${pickRandom([` 𝑨𝒔𝒊́ 𝒒𝒖𝒆 𝒒𝒖𝒊𝒆𝒓𝒂 𝒉𝒂𝒈𝒂 𝒑𝒖𝒕𝒊𝒕𝒐 🧐`, `_uff mire un pajero_`, `_pagame y paso mi pack😏🥵_`, `_que_`, `_que quiere pija dice 🤣`, `_pasa el pack de tu hermana😏_`, `_mire un gilipolla_`, `_siuuu sexo sexo sexo😈_`, '_callarte putito_'])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})
}
*/

if (/^reglas|normas|Reglas$/i.test(m.text) ) {
conn.reply(m.chat, `\`⚠️ 𝙍𝙀𝙂𝙇𝘼𝙎 ⚠️\`

* 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐥𝐥𝐚𝐦𝐚𝐫 𝐚𝐥 𝐁𝐨𝐭
* 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐒𝐩𝐚𝐦 𝐚𝐥 𝐁𝐨𝐭
* 𝐍𝐨 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐚𝐥 𝐁𝐨𝐭
* 𝐑𝐞𝐬𝐩𝐞𝐭𝐚 𝐥𝐨𝐬 𝐭𝐞𝐫𝐦𝐢𝐧𝐨𝐬 𝐲 𝐜𝐨𝐧𝐝𝐢𝐜𝐢𝐨𝐧𝐞𝐬

>「 🅛🅞🅛🅘🅑🅞🅣-🅜🅓 」`, m)}

if (/^Quiero un bot|como obtengo un bot? |Quiero un bot? |quiero un bot|solicitud|solicitó bot|solicito bot|Necesito un bot|necesito un bot$/i.test(m.text) ) {
conn.reply(m.chat,  `\`⚡ ¿Quieres un bot para tu grupo?\`

Puedes solicitarlo haciendo una donación voluntaria a través de PayPal o Mercado Pago arg. 

> *🚀 El bot estará activo 24/7 para tu grupo.*

*⚡ ¿Por dónde puedo donar?*
A través de nuestro Paypal, Mercado Pago o Naranja X.

> *❇️PayPal:* 
https://paypal.me/OfcGB

> *❇️Mercado pago:*
> *• Alias :* OficialGB
> *• CVU :* 0000003100059201491917

> *❇️ Naranja X:*
> *• Alias :* OficialGL
> *• CVU :* 4530000800017922067114

\`⏩ Siguiente paso ⏩\`

Una vez realizado el pago, puedes enviar un comprobante de envío del dinero (captura de pantalla) para que pueda agregar el bot a tu grupo.
https://chat.whatsapp.com/FDRfhecUGrCEQswkg8FUYz
${fb}

\`⚡ ¿El bot estará activo 24/7?\`
> _*Sí, nuestro bot está alojado en un servidor de pago para mantenerlo activo 24/7 (por eso también solicitamos donaciones para mantenerlo en funcionamiento) 💞.*_

> 「 🅛🅞🅛🅘🅑🅞🅣-🅜🅓 」`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `Hola ${name} 👋`, body: wm, previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})}

if (/^¿que es un bot?|Que es un bot?|que es un bot?|que es un bot$/i.test(m.text) ) {
conn.reply(m.chat, `\`☆::¿𝙌𝙐𝙀 𝙀𝙎 𝙐𝙉 𝘽𝙊𝙏 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋?::☆\`

> 𝐔𝐧 𝐁𝐨𝐭 𝐞𝐬 𝐮𝐧𝐚 𝐢𝐧𝐭𝐞𝐥𝐢𝐠𝐞𝐧𝐜𝐢𝐚 𝐚𝐫𝐭𝐢𝐟𝐢𝐜𝐢𝐚𝐥 𝐪𝐮𝐞 𝐫𝐞𝐚𝐥𝐢𝐳𝐚 𝐭𝐚𝐫𝐞𝐚𝐬 𝐪𝐮𝐞 𝐥𝐞 𝐢𝐧𝐝𝐢𝐪𝐮𝐞 𝐜𝐨𝐧 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬, 𝐞𝐧 𝐞𝐥 𝐜𝐚𝐬𝐨 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐩𝐮𝐞𝐝𝐞𝐬 𝐜𝐫𝐞𝐚𝐫 𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐬, 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐦𝐮́𝐬𝐢𝐜𝐚, 𝐯𝐢𝐝𝐞𝐨𝐬, 𝐜𝐫𝐞𝐚𝐫 𝐥𝐨𝐠𝐨𝐬 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐨𝐬 𝐲 𝐦𝐮𝐜𝐡𝐨 𝐦𝐚𝐬, 𝐞𝐬𝐭𝐨 𝐝𝐞 𝐟𝐨𝐫𝐦𝐚 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐳𝐚𝐝𝐚, 𝐨 𝐬𝐞𝐚 𝐪𝐮𝐞 𝐮𝐧 𝐡𝐮𝐦𝐚𝐧𝐨 𝐧𝐨 𝐢𝐧𝐭𝐞𝐫𝐟𝐢𝐞𝐫𝐞 𝐞𝐧 𝐞𝐥 𝐩𝐫𝐨𝐜𝐞𝐬𝐨.
> 𝐏𝐚𝐫𝐚 𝐯𝐞𝐫 𝐞𝐥 𝐦𝐞𝐧𝐮́ 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐮𝐞𝐝𝐞𝐬 𝐮𝐬𝐚𝐫 #menu

> 「 🅛🅞🅛🅘🅑🅞🅣-🅜🅓 」`, m)}  
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
