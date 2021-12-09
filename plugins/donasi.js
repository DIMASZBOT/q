let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
 〔 Donasi • Pulsa 〕
☯ 089527393988
☯ 08566732166

`.trim(), '© 𝕯𝖆𝖗𝖐 𝕬𝖓𝖌𝖊𝖑', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
