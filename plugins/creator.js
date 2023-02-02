import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Arifzyn\nNICKNAME:👑 Owner ShunKatzu Bot\nORG: Ariel A.Y\nTITLE:soft\nitem1.TEL;waid=6283895958752:+62 838-9595-8752\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:Coming Soon\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: shunkatzu.id@mail.com\nitem3.X-ABLabel:💌 Mail Owner ShunKatzu\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 My Location\nBDAY;value=date:🔖 26 November 2006\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner Saya kak`
    await conn.sendButton(m.chat, caption, author, null, [['👨Sapa Owner', 'Huuu']], m, { quoted: fkontak, mentions: conn.parseMention(caption) })
}
if (command == 'own') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6285759681568:+62 857-5968-1568\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aku.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor ownerku , jangan di spam ya `,m)
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|own)$/i

export default handler