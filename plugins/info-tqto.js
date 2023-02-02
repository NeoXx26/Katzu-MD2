let handler = async (m, { conn }) => {
let info = `*${htki} TQTO ${htka}*

💌 Contributor Script Bot

*Credit Ori :* By Aldi 
*Recode Script :* By Xzyyo
*My Project :* 01 Oktober 2022
*Owners:* Ariel  Yansyah
`
const sections = [
   {
	title: `✃ BIG THANKS TO`,
	rows: [
	    {title: "✨ Xzyyo", rowId: '.xzyyo', description: '╰►Kang Recode sc :v' },
	    {title: "✨ Kanna", rowId: '.kanna', description: '╰►Stah' },
	{title: "✨ Nurutomo", rowId: '.Nurutomo', description: '╰►Contributor' },
	{title: "✨ Adiwajshing", rowId: '.Adiwajshing', description: '╰►Contributor' },
	{title: "✨ Amirul", rowId: '.Amirul', description: '╰►Contributor' },
	{title: "✨ Elaina", rowId: '.Bochilgaming', description: '╰►Penyedia Base' },
	{title: "✨ Syahrul", rowld: '.syahrul', description: '╰► Sepuh' },
	{title: "✨ WudySoft", rowld: '.wudy', description: '╰► Sepuh' },
	{title: "✨ Ariel A.Y", rowld: '.Ariel', description: '╰► Owners Bot' },
	]
    }, 

]

const listMessage = {
  text: info,
  footer: author,
  title: null,
  buttonText: "C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['tqto', 'contributor']
handler.tags = ['info', 'main']
handler.command = /^(tqto|thanksto|contributor|credit)$/i
handler.private = false

export default handler