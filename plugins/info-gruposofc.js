let media = imagen4
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*π·πΎπ»π° ππππ°ππΈπΎ ππ», ππ΄ πΈπ½ππΈππΎ π° ππ½πΈπππ΄ π° π»πΎπ πΆπππΏπΎπ πΎπ΅πΈπ²πΈπ°π»π΄π π³π΄ ππ·π΄ ππ·π°π³πΎπ π±ππΎπΊπ΄ππ - ππ΄π°πΌ πΏπ°ππ° π²πΎπ½ππΈππΈπ π²πΎπ½ π»π° π²πΎπΌππ½πΈπ³π°π³ :D*

*β€ πΆπππππ πππππππππ πππ π±ππ:*
*1.-* https://chat.whatsapp.com/FWmPWnVqpiQ4XNpLN98g3G

*2.-* https://chat.whatsapp.com/DbXBmsydWBE1ZN3EoY0hRs

*3.-* https://chat.whatsapp.com/BW0P22xx7EGBTdH5IM851F

*4.-* https://chat.whatsapp.com/CjexkGVr37J6GuSdDVAHzC

*5.-* https://chat.whatsapp.com/H7NUXdrGlFg20ae3bqgwlb
`.trim(), wm, media, [['π πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π» π', '#menu']], m)
handler.command = /^linkgc|grupos$/i
handler.rowner = true
export default handler
