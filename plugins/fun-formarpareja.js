let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, π³π΄π±π΄ππΈπ°π π²π°ππ°πππ΄ π π²πΎπ½ ${toM(b)}, π·π°π²π΄π½ ππ½π° π±ππ΄π½π° πΏπ°ππ΄πΉπ° π*`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['formarpareja','formarparejas']
handler.group = true
handler.admin = true
export default handler
