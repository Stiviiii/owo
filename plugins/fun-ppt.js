import { performance } from 'perf_hooks'
let handler = async (m, { text, usedPrefix, command }) => {
let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg' 
if (command == 'ppt') {
let salah = `𝙋𝙄𝙀𝘿𝙍𝘼, 𝙋𝘼𝙋𝙀𝙇, 𝙊 𝙏𝙄𝙅𝙀𝙍𝘼\n\n𝙋𝙪𝙚𝙙𝙚𝙨 𝙪𝙨𝙖𝙧 𝙡𝙤𝙨 𝘽𝙊𝙏𝙊𝙉𝙀𝙎 𝙥𝙖𝙧𝙖 𝙟𝙪𝙜𝙖𝙧 𝙤 𝙩𝙖𝙢𝙗𝙞𝙚𝙣 𝙥𝙪𝙚𝙙𝙚𝙨 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨:\n${usedPrefix + command} 𝙥𝙞𝙚𝙙𝙧𝙖\n${usedPrefix + command} 𝙥𝙖𝙥𝙚𝙡\n${usedPrefix + command} 𝙩𝙞𝙟𝙚𝙧𝙖\n\n𝙐𝙨𝙚 𝙚𝙣 𝙢𝙞𝙣𝙪𝙨𝙘𝙪𝙡𝙖𝙨\n\n${wm}`
 
conn.sendHydrated(m.chat, wm, salah, pp, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝙋𝙞𝙚𝙙𝙧𝙖 🥌', `${usedPrefix + command} piedra`],
['𝙋𝙖𝙥𝙚𝙡 📄', `${usedPrefix + command} papel`],
['𝙏𝙞𝙟𝙚𝙧𝙖 ✂️', `${usedPrefix + command} tijera`]
], m,)}
  
//  conn.sendHydrated(m.chat, salah, wm, null, md, '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
//['𝙈𝙚𝙣𝙪 𝙅𝙪𝙚𝙜𝙤𝙨 | 𝙂𝙖𝙢𝙚𝙨 𝙈𝙚𝙣𝙪 🎡', '#juegosmenu'],
//['𝙊𝙩𝙧𝙖 𝙫𝙚𝙯 | 𝘼𝙜𝙖𝙞𝙣 🤭', `ds`],
//['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
//], m,)
                  
//if (!text) throw salah
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`*🔰 Empate!*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Puntos +500 XP*`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ Puntos -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ Puntos -300 XP*`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ Puntos -300 XP*`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ Puntos -300 XP*`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Tú ganas! 🎉*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*🎁 Puntos +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Tú pierdes! ❌*\n\n*👉🏻 Usted: ${text}*\n*👉🏻 El Bot: ${astro}*\n*❌ Puntos -300 XP*`)
}
} else {
throw INTROJUEGO
}}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler
