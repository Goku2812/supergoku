/* Creditos a FG de Dylux-fg (Bot) */

import fg from 'api-dylux' 
import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!text) throw `*[βππππβ] π΄π½π»π°π²π΄ π³π΄ ππΈπΊππΎπΊ π΅π°π»ππ°π½ππ΄, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π½ π΄π½π»π°π²π΄/π»πΈπ½πΊ π³π΄ π°π»πΆππ½ ππΈπ³π΄πΎ π³π΄ ππΈπΊππΎπΊ*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMFb4BXVd/`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[βππππβ] π΄π½π»π°π²π΄ π³π΄ ππΈπΊππΎπΊ πΈπ½π²πΎπππ΄π²ππΎ, πΏπΎπ π΅π°ππΎπ πΈπ½πΆππ΄ππ΄ π΄π½ π΄π½π»π°π²π΄/π»πΈπ½πΊ π³π΄ π°π»πΆππ½ ππΈπ³π΄πΎ π³π΄ ππΈπΊππΎπΊ*\n\n*ββ π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command}* https://vm.tiktok.com/ZMFb4BXVd/`
let texto = `*[β] @${m.sender.split`@`[0]} π°πΆππ°ππ³π΄ ππ½ πΌπΎπΌπ΄π½ππΎ π΄π½ π»πΎ πππ΄ π΄π½ππΈπΎ ππ ππΈπ³π΄πΎ π³π΄ ππΈπΊππΎπΊ*`
try {
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'Ι’α΄α΄α΄ Κα΄α΄', body: null, thumbnail: imagen1, sourceUrl: 'https://www.instagram.com/_777charly' }, mentionedJid: [m.sender]}}}, aa)    
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
let p = await fg.tiktok(args[0]) 
let buttons = [{ buttonText: { displayText: 'β« π°ππ³πΈπΎ β«' }, buttonId: `${usedPrefix}tomp3` }]
let te = `*πππ΄ππ½π°πΌπ΄:* ${p.author || 'Indefinido'}`
await conn.sendMessage(m.chat, { video: { url: p.nowm}, caption: te, footer: wm, buttons }, { quoted: m })  
} catch {  	
try { 
let aa2 = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'Ι’α΄α΄α΄ Κα΄α΄', body: null, thumbnail: imagen1, sourceUrl: 'https://www.instagram.com/_777charly' }, mentionedJid: [m.sender]}}}, aa2)    
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })
const { author: { nickname }, video, description } = await tiktokdl(args[0]).catch(async _ => await tiktokdlv2(args[0])).catch(async _ => await tiktokdlv3(args[0]))
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
let buttons = [{ buttonText: { displayText: 'β« π°ππ³πΈπΎ β«' }, buttonId: `${usedPrefix}tomp3` }]
let cap = `*π½πΈπ²πΊπ½π°πΌπ΄:* ${nickname || 'Indefinido'}`
await conn.sendMessage(m.chat, { video: { url: url}, caption: cap, footer: wm, buttons }, { quoted: m })  
} catch {
throw `*[βππππβ] π»πΎ π»π°πΌπ΄π½ππΎ, πΎπ²ππππΈπΎ ππ½ π΄πππΎπ π°π» π³π΄ππ²π°ππΆπ°π ππ ππΈπ³π΄πΎ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*`
}}}  
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm|tt|ttnowm|tiktokaudio|prueba)$/i
export default handler
