let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `ππππππ ππππππ ${pesan}`
let teks = ` \n\n ${oi}\n\n\n`
for (let mem of participants) {
teks += `π±@${mem.id.split('@')[0]}\n`}
teks += `π *β«2β«β«0β«β«2β«β«3β«* π\n\nππΈπ΄πΎ ππΈπ½`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|marcar|invocacion|todos|invocaciΓ³n)$/i
handler.admin = true
handler.group = true
export default handler
