/*
Jangan jual sc ini bang
Sc ini gratis buat kalian
Gak subrek gak bakalan work
Setidaknya jan hapus nama fake nya
Hargai yang buat
Gua tiap hari gadang
Sekolah telat
Makan telat 
Demi sc nya selesai
Aku mohon tinggalkan nama ku aja dah bangga kok🥺
*/
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { Tiktokdl } = require('./lib/tiktok.js')
const { nad } = require('./language')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { dafontSearch, dafontDown } = require('./lib/dafont.js')

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const hx = require('hxz-api')
const yts = require( 'yt-search')
const imgbb = require('imgbb-uploader')
const imageToBase64 = require('image-to-base64');
const { removeBackgroundFromImageFile } = require('remove.bg')

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

cr = 'KirBotz'
owner = setting.OwnerNumber
botname = setting.BotName
lolkey = setting.LolKey
ownername = setting.OwnerName
tamnel = fs.readFileSync('./AkIrTid/kirbotz.jpg')

pulsa = setting.pulsa
gopay = setting.gopay
ovo = setting.ovo

harga1bulan = setting.harga1blnsewa
harga2bulan = setting.harga2blnsewa
harga6bulan = setting.harga6blnsewa
hargaperpanjang = setting.panjangsewa

xchillds = 'XChillDs'
HunterApi = 'Ikyy69'
XteamKey = 'MIMINETBOT'
apikey = 'RizkyxNaqib'
DapApi = 'dappauhuy'
spykey = 'SpyBotApi'
indoapi = 'Fxc7'
botxyz = 'Aprii'
rakukey = 'RakuKeyTod'
apisenku = 'SenkuApi'
valkey = 'rivalgans'

//━━━━━━━━━━━━━━━[ MODUL EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = kirbotz = async (kirbotz, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = kirbotz.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6283862323152@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await kirbotz.chats.all()
		const groupMetadata = isGroup ? await kirbotz.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? kirbotz.user.jid : kirbotz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? kirbotz.user.name : conts.notify || conts.vname || conts.name || '-'
        
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
let d = new Date
let locale = 'en'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })

		
        const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
        const hari = moment.tz("Asia/Jakarta").format("LLLL")
        const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const waktu = moment.tz('Asia/Jakarta').format('DD || MM')
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━━━//

		mess = {
			wait: 'Sabar Lagi Proses Tod...!',
			success: 'Done Jangan Lupa Subrek YT : KirBotz×',
			error: {
				stick: 'Gagal Convert Gambar To Sticker...Coba Lagi !',
				Iv: 'Linknya Error Tod !'
			},
			only: {
				admin: 'Kusus Admin Tod !',
				group: 'Khusus Group Tod !'
			}
		}
		const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = kirbotz.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","listType": "SINGLE_SELECT","sections": list}}, {})
            return kirbotz.relayWAMessage(po, {waitForAck: true})
        }
		faketeks = 'ꪶ ཻུ۪۪ꦽꦼ̷⸙𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ ཻུ۪۪ꦽꦼ̷⸙'
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        const reply = (teks) => {
            kirbotz.sendMessage(from, teks, text, {quoted:fakevo})
        }
        const sendMess = (hehe, teks) => {
            kirbotz.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? kirbotz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : kirbotz.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const krbtz = fs.readFileSync ('./AkIrTid/kirbotzthumb.jpg')
        const costum = (pesan, tipe, target, target2) => {
			kirbotz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
        const hideTag = async function(from, text){
	       let anu = await kirbotz.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       kirbotz.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./AkIrTid/kirbotzthumb.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
kirbotz.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

        const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            kirbotz.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        ///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await kirbotz.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
kirbotz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
        const sendButloc = (from, title, text, desc, button, sen, men, file) => {
return kirbotz.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: mek, contextInfo: {"mentionedJid": men ? men : []}})
}
//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━━━//
        const fakestatus = (teks) => {
            kirbotz.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./AkIrTid/kirbotz.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakevo = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    imageMessage: {
      mimetype: 'image/jpeg',
      caption: 'KirBotz',
      jpegThumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg'),
      viewOnce: true
    }
  }
}
kirbotz.updatePresence(from, Presence.recording)
kirbotz.chatRead(from, "read")
        const fakegroup = (teks) => {
            kirbotz.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./AkIrTid/kirbotz.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `ꪶ ཻུ۪۪ꦽꦼ̷⸙𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ ཻུ۪۪ꦽꦼ̷⸙`, 
                            orderTitle: `ꪶ ཻུ۪۪ꦽꦼ̷⸙𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ ཻུ۪۪ꦽꦼ̷⸙`,
                            thumbnail: krbtz, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
        
//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//
const hour_now = moment().format('HH')
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢'
if (hour_now >= '03' && hour_now <= '10') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'
} else if (hour_now >= '10' && hour_now <= '14') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'
} else if (hour_now >= '14' && hour_now <= '17') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞'
} else if (hour_now >= '17' && hour_now <= '18') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
} else if (hour_now >= '18' && hour_now <= '23') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
} else {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
}
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'gifback': 'true', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': krbtz
                        }
                       }
	                  } 
        const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${ucapanWaktu} ${pushname}`, 
                    jpegThumbnail: krbtz
                          }
                        }
                      }
        const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `KirBotz`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': krbtz
                        }
                       }
	                  }
	                  stod = `${sender}`
      for (let i = 0; i < commandsDB.length ; i++) {
      if (budy == commandsDB[i].pesan) {
      kirbotz.sendMessage(from, commandsDB[i].balasan, text, {sendEphemeral: true, quoted: fvid, contextInfo: { forwardingScore: 600, isForwarded: true, mentionedJid : [stod]}})
      
      
      }
      }
const sendWebp = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('selesai');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
fs.unlinkSync(filess)
if (err) return reply(`${err}`)
exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
if (error) return reply(`${error}`)
kirbotz.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
fs.unlinkSync(asw)
});
});
});
}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
               
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        kirbotz.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    kirbotz.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            const runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
                }
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
kirbotz.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
kirbotz.groupRemove(from, [sender])
}     


//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━━━//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
//━━━━━━━━━━━━━━━[ RUNTIME BIO ]━━━━━━━━━━━━━━━━━//


        
//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//

switch (command) {
case 'menu':
kirbotz.sendMessage(from, {"contentText": `Hai Kak *${pushname}* ${ucapanWaktu}

*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/6287705048235*
 💌EMAIL : *tesheroku123@gmail.com*
 🔎YT : *https://bit.ly/3BpBe1Z*
 🪀GROUP : *https://bit.ly/3Ene2TO*
`,"footerText": `*ꪶ ཻུ۪۪ꦽꦼ̷⸙𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ ཻུ۪۪ꦽꦼ̷⸙ || ${date}*`,
"buttons": [
{buttonId: `.allmenu`, buttonText: {displayText: '🏴‍☠️ 𝕄𝔼ℕ𝕌 🏴‍☠️'}, type: 1},
{buttonId: `.owner`, buttonText: {displayText: '👑 𝕆𝕎ℕ𝔼ℝ 👑‍️'}, type: 1},
{buttonId: `.sc`, buttonText: {displayText: '📄 𝕊ℂℝ𝕀ℙ𝕋 📄'}, type: 1}],
"headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/pdf",
            "title": "KirBotz.pdf",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "KirBotz Bot WhatsApp",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": "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"
  }}, MessageType.buttonsMessage,{ quoted: ftrol, sendEphemeral: true, contextInfo:{"forwardingScore":999,"isForwarded":true, "externalAdReply":{"title": `Hai Kak ${pushname}`, "body": `YT : KirBotz×`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/daa8e7a3280efa76acce1.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/BH4ipz4O-sQ/`}}})
  break
case 'allmenu':
    const timestampp = speed();
	const latensii = speed() - timestampp
const totalgrouppp = await kirbotz.chats.array.filter(v => v.jid.endsWith('g.us'))
const totalkontakkk = await kirbotz.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const totalchattt = await kirbotz.chats.all()
const SadGril = "6287705048235@s.whatsapp.net"
	run = process.uptime() 
    teks = `${kyun(run)}`
    try {
pic = await kirbotz.getProfilePicture(sender)
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
gambar = await getBuffer(pic)
    mhan = await kirbotz.prepareMessage(from, gambar, image, {thumbnail: gambar, quoted: ftrol, contextInfo:{"forwardingScore":999,"isForwarded":true, "mentionedJid": [SadGril],"externalAdReply": {"title": `${ucapanWaktu}`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/daa8e7a3280efa76acce1.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/aoGtvzi6ef4`}}})
    button = [
  {buttonId: '.sewabot', buttonText: {displayText: 'SEWABOT'}, type: 1},
  {buttonId: '.owner', buttonText: {displayText: 'OWNER'}, type: 1}
]
 buttons = {
imageMessage: mhan.message.imageMessage,
    contentText: `Hai Kak *${pushname}*
    
「 𝐆𝐑𝐎𝐔𝐏 」
		${prefix}promote
		${prefix}demote
		${prefix}antilink
		${prefix}welcome
		${prefix}antivirtex
		${prefix}group
		${prefix}linkgrup
		${prefix}promote
		${prefix}demote
		${prefix}add
		${prefix}kick
		${prefix}setpp
		${prefix}setdesc
		${prefix}setname
		${prefix}hidetag
		${prefix}tagall

「 𝐎𝐖𝐍𝐄𝐑 」
		${prefix}term
		${prefix}leaveall
		${prefix}shutdown
		${prefix}restart
		${prefix}culik
		${prefix}bc

「 𝐎𝐓𝐇𝐄𝐑 」
		${prefix}sewabot
		${prefix}owner
		${prefix}runtime


「 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 」
		${prefix}sticker
		${prefix}tomp3
		${prefix}tovideo
		${prefix}stickeranime
		${prefix}attp
		${prefix}doge
		${prefix}gura
		${prefix}semoji
		${prefix}bucinstick
		${prefix}dafonts
		${prefix}nulis
		${prefix}cogan
		${prefix}cecan
		${prefix}lirik
		${prefix}tourl
		${prefix}faktaunik
		${prefix}katabijak
		${prefix}pantun
		${prefix}bucin
		${prefix}animestick
		
「 𝐂𝐄𝐂𝐀𝐍 」
		${prefix}cecan
		${prefix}cogan
		${prefix}cecanvietnam 
		${prefix}cecanrandom 
		${prefix}hijaber 
		${prefix}santuy 
		${prefix}ukhti 
		${prefix}bocil 
		${prefix}ghea 
		${prefix}rika 
		${prefix}cecanmalaysia 
		${prefix}cecankorea 
		${prefix}cecanindonesia 
		${prefix}cecanjapan 
		${prefix}cecanthailand 
		${prefix}random
		
「 𝐂𝐄𝐊 」
		${prefix}jadian
		${prefix}cantik
		${prefix}ganteng
		${prefix}babi
		${prefix}beban
		
「 𝐌𝐀𝐊𝐄𝐑 」
		${prefix}maker2d2
		${prefix}maker2d3
		${prefix}maker2d4
		${prefix}maker3d
		${prefix}maker3d2
		${prefix}maker3d3
		${prefix}maker3d4
		${prefix}transformer
		${prefix}googletxt
		${prefix}battlefield
		${prefix}coffeecup
		${prefix}coffeecup2
		${prefix}neonn
		${prefix}glow
		${prefix}summer
		${prefix}flower
		${prefix}burn
		${prefix}quote
		${prefix}wetglass
		${prefix}multicolor3d
		${prefix}watercolor
		${prefix}luxurygold
		${prefix}galaxywallpaper
		${prefix}lighttext
		${prefix}beautifulflower
		${prefix}puppycute
		${prefix}royaltext
		${prefix}heartshaped
		${prefix}birthdaycake
		${prefix}galaxystyle
		${prefix}hologram3d
		${prefix}glossychrome
		${prefix}greenbush
		${prefix}metallogo
		${prefix}noeltext
		${prefix}glittergold
		${prefix}textcake
		${prefix}starsnight
		${prefix}wooden3d
		${prefix}textbyname
		${prefix}writegalacy
		${prefix}galaxybat
		${prefix}snow3d
		${prefix}birthdayday
		${prefix}goldplaybutton
		${prefix}silverplaybutton
		${prefix}freefire
		${prefix}shadow
		${prefix}cup
		${prefix}cup1
		${prefix}romance
		${prefix}smoke
		${prefix}burnpaper
		${prefix}lovemessage
		${prefix}undergrass
		${prefix}love
		${prefix}coffe
		${prefix}woodheart
		${prefix}woodenboard
		${prefix}summer3d
		${prefix}wolfmetal
		${prefix}nature3d
		${prefix}underwater
		${prefix}golderrose
		${prefix}summernature
		${prefix}letterleaves
		${prefix}glowingneon
		${prefix}fallleaves
		${prefix}flamming
		${prefix}harrypotter
		${prefix}carvedwood
		${prefix}pornhub
		${prefix}glitch
		${prefix}avenger
		${prefix}space
		${prefix}ninjalogo
		${prefix}marvelstudio
		${prefix}lionlogo
		${prefix}wolflogo
		${prefix}steel3d
		${prefix}wallgravity
		${prefix}ppcp
		${prefix}anime
		${prefix}blackpink
		${prefix}neon
		${prefix}greenneon
		${prefix}advanceglow
		${prefix}futureneon
		${prefix}sandwriting
		${prefix}sandsummer
		${prefix}sandengraved
		${prefix}metaldark
		${prefix}neonlight
		${prefix}holographic
		${prefix}text1917
		${prefix}minion
		${prefix}deluxesilver
		${prefix}newyearcard
		${prefix}bloodfrosted
		${prefix}halloween
		${prefix}jokerlogo
		${prefix}fireworksparkle
		${prefix}natureleaves
		${prefix}bokeh
		${prefix}toxic
		${prefix}strawberry
		${prefix}box3d
		${prefix}roadwarning
		${prefix}breakwall
		${prefix}icecold
		${prefix}luxury
		${prefix}cloud
		${prefix}summersand
		${prefix}horrorblood
		${prefix}thunder
		${prefix}tiktok
		${prefix}arcade8bit
		${prefix}battlefield4
		${prefix}pubg`,
    footerText: `
    *──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/6287705048235*
 💌EMAIL : *tesheroku123@gmail.com*
 🔎YT : *https://bit.ly/3BpBe1Z*
 🪀GROUP : *https://bit.ly/3Ene2TO*


*𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ || ${date}*
    `,
    buttons: button,
    headerType: 4
}
await kirbotz.sendMessage(from, buttons, MessageType.buttonsMessage, {
        jpegThumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg'),
        caption: `Hai Kak ${pushname} ${ucapanWaktu}`,
            mentionedJid: [sender]},
            {quoted: ftrol})
           	break
//m
        
//
case 'sewa1':
               list = []
               listmenu = [`waktu 1bulan`,`waktu 2bulan`,`waktu 6bulan`,`waktu panjang`]
               listmenuu = [`1 BULAN`,`2 BULAN`,`6 BULAN`,`PERPANJANG SEWA`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'LIST KE ' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `Silahkan Pilih List Yang Mau Di Sewa\n\n\n_*×××*_ KirBotz`,`  `, list)
               break
case 'waktu':
            if (args.length < 1) return reply('bukan gitu\n\nada dua pilihan\nvn\nngetik\n\ncontoh: !setbug ngetik')
            if((args[0]) == '1bulan'){
            saa =`${harga1bulan}`            
            const buttonpulsa = [{buttonId: `${prefix}via pulsa`, buttonText: {displayText: 'PULSA'}, type: 1},
                                {buttonId: `${prefix}via gopay`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            const buttonMessagep = {
			headerType: "IMAGE",
			contentText: `${saa}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonpulsa,
			headerType: 1
			}
            kirbotz.sendMessage(from, buttonMessagep, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./AkIrTid/kirbotz.jpg')}}}})
            } else
if ((args[0]) == '2bulan'){
            pay =`${harga2bulan}`            
            const buttongopay = [{buttonId: `${prefix}via pulsa`, buttonText: {displayText: 'PULSA'}, type: 1},
                                {buttonId: `${prefix}via gopay`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            const buttonMessageg = {
			headerType: "IMAGE",
			contentText: `${pay}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttongopay,
			headerType: 1
			}
            kirbotz.sendMessage(from, buttonMessageg, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./AkIrTid/kirbotz.jpg')}}}})
            } else
if ((args[0]) == '6bulan'){
            voo =`${harga6bulan}`            
            const buttonovo = [{buttonId: `${prefix}via pulsa`, buttonText: {displayText: 'PULSA'}, type: 1},
                                {buttonId: `${prefix}via gopay`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            const buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voo}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonovo,
			headerType: 1
			}
            kirbotz.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./AkIrTid/kirbotz.jpg')}}}})
            } else
if ((args[0]) == 'panjang'){
            voo =`${hargaperpanjang}`            
            const buttonovo = [{buttonId: `${prefix}via pulsa`, buttonText: {displayText: 'PULSA'}, type: 1},
                                {buttonId: `${prefix}via gopay`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            const buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voo}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonovo,
			headerType: 1
			}
            kirbotz.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./AkIrTid/kirbotz.jpg')}}}})
            }
            break
case 'via':
            if (args.length < 1) return reply('bukan gitu\n\nada dua pilihan\nvn\nngetik\n\ncontoh: !setbug ngetik')
            if((args[0]) == 'pulsa'){
            saa =`${pulsa}`            
            const buttonpulsa = [{buttonId: `${prefix}via pulsa`, buttonText: {displayText: 'PULSA'}, type: 1},
                                {buttonId: `${prefix}via gopay`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            const buttonMessagep = {
			headerType: "IMAGE",
			contentText: `${saa}`,
			footerText: 'Jika Sudah Bayar Langsung Pencet Owner Di Bawah',
			buttons: buttonpulsa,
			headerType: 1
			}
            kirbotz.sendMessage(from, buttonMessagep, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./AkIrTid/kirbotz.jpg')}}}})
            } else
if ((args[0]) == 'gopay'){
            pay =`${gopay}`            
            const buttongopay = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            const buttonMessageg = {
			headerType: "IMAGE",
			contentText: `${pay}`,
			footerText: 'Jika Sudah Bayar Langsung Pencet Owner Di Bawah',
			buttons: buttongopay,
			headerType: 1
			}
            kirbotz.sendMessage(from, buttonMessageg, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./AkIrTid/kirbotz.jpg')}}}})
            } else
if ((args[0]) == 'ovo'){
            voo =`${ovo}`            
            const buttonovo = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            const buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voo}`,
			footerText: 'Jika Sudah Bayar Langsung Pencet Owner Di Bawah',
			buttons: buttonovo,
			headerType: 1
			}
            kirbotz.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./AkIrTid/kirbotz.jpg')}}}})
                   
            }
            break
///
case 'randombokep':
              bokep = body.slice(1)
              const bo =['https://www.mediafire.com/download/8hnhjcf3pseubgy','https://www.mediafire.com/download/cty9phda3d1s62u','https://www.mediafire.com/download/8hnhjcf3pseubgy']
              const kep = bo[Math.floor(Math.random() * bo.length)]
              kirbotz.sendMessage(from, '*PERMINTAAN:* '+bokep+'\n*DOSA TANGGUNG PRIBADI*\n*NI BRO FREE BUAT KAMU DOWNLOAD SENDIRI:* '+ kep, text, { quoted: ftrol, caption: `NI BOKEP SAYA DAPAT DARI *©KirBotz* DOSA TANGGUNG SENDIRI🗿`})
              break
case 'play':
             if (args.length < 1) return reply(`Kirim perintah *${prefix}play query`)
             reply(mess.wait)
             let yut = await yts(q)
             yta(yut.videos[0].url)             
             .then(async(res) => {
             const { thumb, title, filesizeF, filesize } = res
             const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁
		     
•💬 Judul : ${yut.all[0].title}
•🎥 ID Video : ${yut.all[0].videoId}
•⏰️ Diupload Pada : ${yut.all[0].ago}
•👁️️ Views : ${yut.all[0].views}
•▶️ Durasi : ${yut.all[0].timestamp}
•📍 Channel : ${yut.all[0].author.name}
•🔗 Link Channel : ${yut.all[0].author.url}`
             ya = await getBuffer(thumb)
             py =await kirbotz.prepareMessage(from, ya, image)
             gbutsan = [{buttonId: `${prefix}buttonmusic ${yut.all[0].url}`, buttonText: {displayText: '🎵AUDIO'}, type: 1},{buttonId: `${prefix}buttonvideo ${yut.all[0].url}`, buttonText: {displayText: '🎥VIDEO'}, type: 1}]
             gbuttonan = {
             imageMessage: py.message.imageMessage,
             contentText: capti,
             footerText: 'Silahkan Pilih Jenis File Dibawah Ini☕',
             buttons: gbutsan,
             headerType: 4
}
             await kirbotz.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
             break                
case 'buttonmusic':
             if(!q) return reply('linknya?')              
             res = await yta(`${q}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Audio```')})
             sendMediaURL(from, `${res.dl_link}`,{quoted:mek})
             break         
case 'buttonvideo':
             if(!q) return reply('linknya?')            
             res = await ytv(`${q}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Video```')})
             sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
             break

//━━━━━━━━━━━━━━━[ FITUR GROUP ]━━━━━━━━━━━━━━━━━//
case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
break
case 'antilink' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiLink) return reply('anti link sudah on')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'sewabot':
        case '0':
        stod = `${sender}`
       stst = await kirbotz.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			
       menu = `0`
sendButloc(from, `*_Hai ${pushname} 👋🏻_* \n\nyakin nih mau sewa bot ? 🤔 Boong auto banned >_<`, "", {jpegThumbnail:krbtz}, [{buttonId:`${prefix}sewa1`,buttonText:{displayText:'🗿Ya'},type:1},{buttonId:`${prefix}gk`,buttonText:{displayText:'👀Tidak'},type:1}], {contextInfo: { mentionedJid: [stod]}})
break
case 'antivirtexon' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: '!grouptutup', buttonText: { displayText: 'Tutup' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
kirbotz.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
kirbotz.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
linkgc = await kirbotz.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
kirbotz.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
kirbotz.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
kirbotz.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
kirbotz.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
kirbotz.groupDemoteAdmin(from, mentioned)
}
break
case 'setgrupname':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              kirbotz.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              kirbotz.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await kirbotz.downloadMediaMessage(encmedia)
              kirbotz.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break

case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
kirbotz.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
kirbotz.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
kirbotz.groupRemove(from, mentioned)
}
break
case 'tagall':
       if (!isGroupAdmins) return reply('Admin Only')
              if (!isGroupAdmins) return reply('Khusus Admin')
              if (!isBotGroupAdmins) return reply('Jadikan Bot Admin')
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
kirbotz.groupUpdateSubject(from, `${body.slice(9)}`)
kirbotz.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
kirbotz.groupUpdateDescription(from, `${body.slice(9)}`)
kirbotz.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await kirbotz.downloadAndSaveMediaMessage(mek, './database/media_user')
await kirbotz.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'hidetag':
      if (!isOwner) return reply(`Kamu bukan owner say:v`)
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
//Download

//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//
case 'wasted':
		    var imgbb = require('imgbb-uploader')
		    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			owgi = await kirbotz.downloadAndSaveMediaMessage(ger)
			data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
			buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/wasted?url=${data.display_url}&apikey=IkyOgiwara`)
			kirbotz.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
		    } else {
			reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wasted`)
		    }
		    break

case 'maker2d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					kirbotz.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
					break
		case 'maker2d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					kirbotz.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
					break
		case 'maker2d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					kirbotz.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
					break
			case 'maker3d': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
					makell = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					kirbotz.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
					break
			case 'maker3d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					kirbotz.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
					break
			case 'maker3d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					kirbotz.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
					break
case 'meme':
ano = await fetchJson(`https://spybot-api.herokuapp.com/api/random/meme?apikey=${spykey}`)
inibaf = await getBuffer(`${ano.result.url}`, {method: 'get'})
inicapt = `${ano.result.title}`
trans = `KirTod`
but = [
          { buttonId: `${prefix}meme`, buttonText: { displayText: '🔖 Next' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '🌹 Owner' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '💰 Sewabot' }, type: 1 }
        ]
        sendButImage(from, inicapt, trans, inibaf, but)
break
case 'yuri':
reply(`Proses Ngab`)
amnu = await fetchJson(`https://spybot-api.herokuapp.com/api/nsfw/yuri?apikey=${spykey}`)
buff = await getBuffer(`${amnu.result}`, {method: 'get'})
teksz = `Siapkan Sabun:v`
trans = `KirTod`
but = [
          { buttonId: `${prefix}yuri`, buttonText: { displayText: '🔖 Next' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '🌹 Owner' }, type: 1 },
         { buttonId: `${prefix}sewabot`, buttonText: { displayText: '💰 Sewabot' }, type: 1 }
        ]
        sendButImage(from, teksz, trans, buff, but)
break
case 'neko':
reply(`Proses Ngab`)
amnu = await fetchJson(`https://spybot-api.herokuapp.com/api/nsfw/nsfwNeko?apikey=${spykey}`)
buff = await getBuffer(`${amnu.result}`, {method: 'get'})
tekss = `Siapkan Sabun:v`
trans = `KirTod`
but = [
          { buttonId: `${prefix}neko`, buttonText: { displayText: '🔖 Next' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '🌹 Owner' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '💰 Sewabot' }, type: 1 }
        ]
        sendButImage(from, tekss, trans, buff, but)
break
case 'quotes':
                    anjy = await fetchJson(`https://spybot-api.herokuapp.com/api/randomquote?apikey=${spykey}`)
                   titid = `${anjy.result.quotes}`
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT`,
            },
            type: 1,
          },]);
        break
        
case 'wallpaper':
reply(`Sedang Mencari Wallpaper ngab...`)
anoh = await fetchJson(`https://spybot-api.herokuapp.com/api/random/wallpaper?apikey=${spykey}`)
nahbaff = await getBuffer(`${anoh.result.url}`, {method: 'get'})
tekss = `Ini Bang Jan Lupa Subrek  KirBotz×`
trans = `KirTod`
but = [
          { buttonId: `${prefix}wallpaper`, buttonText: { displayText: '🔖 Next' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '🌹 Owner' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '💰 Sewabot' }, type: 1 }
        ]
        sendButImage(from, tekss, trans, nahbaff, but)
break
			case 'maker3d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					kirbotz.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
					break
			case 'transformer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					kirbotz.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
					break
               case 'googletxt':
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz|chan|kawai`)
             makell = args.join(" ")
             ll1 = makell.split("|")[0];
             ll2 = makell.split("|")[1];
             ll3 = makell.split("|")[0];
             reply(mess.wait)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             kirbotz.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
             break
       case 'battlefield': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
             makell = args.join(" ")
             ll1 = makell.split("|")[0];
             ll2 = makell.split("|")[1];
             reply(mess.wait)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             kirbotz.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
             break
       case 'coffeecup': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
             makell = args.join(" ")
             reply(mess.wait)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             kirbotz.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
             break
       case 'coffeecup2': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
             makell = args.join(" ")
             reply(mess.wait)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             kirbotz.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
             break

       case 'neonn': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
             makell = args.join(" ")
             reply(mess.wait)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             kirbotz.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
             break
case 'glow': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
             makell = args.join(" ")
             reply(mess.wait)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             kirbotz.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
             break
       case 'summer': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
             makell = args.join(" ")
             reply(mess.wait)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             kirbotz.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
             break
       case 'flower': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
             makell = args.join(" ")
             reply(mess.wait)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             kirbotz.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
             break
       case 'burn': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
             makell = args.join(" ")
             reply(mess.wait)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             kirbotz.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
             break
       case 'quote': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
             makell = args.join(" ")
             reply(mess.wait)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             kirbotz.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
             break
case 'attp':
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp KirBotz`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
					kirbotz.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case 'attp2':
if (args.length == 0) return reply(`Example: ${prefix + command} kirbotz`)
query = args.join(" ")
reply(mess.wait)
sendStickerFromUrl(from, `https://pecundang.herokuapp.com/api/attp?teks=${query}`, mek)
fs.unlinkSync('./temp/stikur.png')
break
case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=DashBot&text=${ini_txt}`).then((gambar) => {
                        kirbotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotz×`, quoted : ftrol})
                    })
                    break
case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=DashBot&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        kirbotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotz×`, quoted : ftrol})
                    })
                    break
case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=DashBot&text=${txt1}`).then((gambar) => {
                        kirbotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotz×`, quoted : ftrol}) 
                    })
                    break
case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=DashBot&text=${txt1}`).then((gambar) => {
                        kirbotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotz×`, quoted : ftrol})
                    })
                    break
case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=DashBot&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        kirbotz.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotz×`, quoted : ftrol})
                    })
                    break
case 'ppcouple':
case 'ppcp': 
			anu = await fetchJson(`https://ziyy.herokuapp.com/api/ppcouple?apikey=xZiyy`) 
			cowo = await getBuffer(anu.result.cowo_image)
			pli = `Ini Untuk »  *𝗖𝗼𝘄𝗼𝗸𝗻𝘆𝗮*`
   sendButImage(from, pli, `©KirBotz`, cowo, [                      
          {
            buttonId: `${prefix}ppcouple`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);
       cewe = await getBuffer(anu.result.cewe_image)
		    pll = `Ini Untuk » *𝗖𝗲𝘄𝗲𝗸𝗻𝘆𝗮*`
   sendButImage(from, pll, `©KirBotz`, cewe, [                      
          {
            buttonId: `${prefix}ppcouple`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break
case 'dafontsearch':
case 'dafonts':
case 'dafont':
if (args.length < 1) return reply('[ ! ] ```Contoh``` › *!dafonts <nama font>*')
teks = args.join(' ')
reply(mess.wait)
res = await dafontSearch(teks)
a = res[0]
result = `› *Title:* ${a.judul}
› *Style:* ${a.style}
› *Link:* ${a.link}
`
reply(result)
break
case 'nulis':
        case 'tulis':
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               kirbotz.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
case 'anime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            kirbotz.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break

case 'cogan':
reply(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=${lolkey}`)
wmn = `🐧KirBotz`
trans = `Subrek YT : KirBotz×`
but = [
          { buttonId: `${prefix}cogan`, buttonText: { displayText: '🔖 Next' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: '🌹 Owner' }, type: 1 },       { buttonId: `${prefix}sewabot`, buttonText: { displayText: '💰 Sewabot' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'cecan':
reply(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=${lolkey}`)
wmn = `🐧KirBotz`
trans = `Subrek YT : KirBotz×`
but = [
          { buttonId: `${prefix}cecan`, buttonText: { displayText: '🔖 Next' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '💰 Sewabot' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
// 
//
case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
case 'tourl':
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await kirbotz.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
case 'script': case 'sc':
 kirbotz.sendMessage(from,`
 ⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠁⠄⠄⠄⠄⠄⠄⠄⠄⠙⢿⣿⣿⣿
 ⣿⣿⣿⣿⣿⣿⡟⠁⠄⠄⠄⠄⣠⣤⣴⣶⣶⣶⣶⣤⡀⠈⠙⢿
 ⣿⣿⣿⣿⣿⡟⠄⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠄⠈
 ⣿⣿⣿⣿⣿⠁⠄⠄⠄⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄
 ⣿⣿⣿⣿⣿⡄⠄⠄⠄⠙⠻⠿⣿⣿⣿⣿⠿⠿⠛⠛⠻⣿⡄⠄
 ⣿⣿⣿⣿⣿⡇⠄⠄⠁ ⭕ ⠄⢹⣿⡗⠄ ⭕ ⢄⡀⣾⢀
 ⣿⣿⣿⣿⣿⡇⠘⠄⠄⠄⢀⡀⠄⣿⣿⣷⣤⣤⣾⣿⣿⣿⣧⢸
 ⣿⣿⣿⣿⣿⡇⠄⣰⣿⡿⠟⠃⠄⣿⣿⣿⣿⣿⡛⠿⢿⣿⣷⣾
 ⣿⣿⣿⣿⣿⣿⡄⠈⠁⠄⠄⠄⠄⠻⠿⢛⣿⣿⠿⠂⠄⢹⢹⣿
 ⣿⣿⣿⣿⣿⣿⣿⡐⠐⠄⠄⣠⣀⣀⣚⣯⣵⣶⠆⣰⠄⠞⣾⣿
 ⣿⣿⣿⣿⣿⣿⣿⣷⡄⠄⠄⠈⠛⠿⠿⠿⣻⡏⢠⣿⣎⣾⣿⣿
 ⣿⣿⣿⣿⣿⣿⡿⠟⠛⠄⠄⠄⠄⠙⣛⣿⣿⣵⣿⡿⢹⡟⣿⣿
 ⣿⠿⠿⠋⠉⠄⠄⠄⠄⠄⠄⠄⣀⣠⣾⣿⣿⣿⡟⠁⠹⡇⣸⣿
 ⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⠿⠿⠛⠋⠄⣸⣦⣠⣿⣿

Script Bot? Cek Yt Link Di Bawah ↓↓
•• https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg
`, text, { thumbnail: krbtz, sendEphemeral: true, quoted: fdoc, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "📄 𝕊ℂℝ𝕀ℙ𝕋 📄",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./AkIrTid/kirbotz.jpg'),sourceUrl:"https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg"}}} )

		break
case 'take':
       case 'colong':   
              if (!isQuotedSticker) return reply('Stiker aja om')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await kirbotz.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : `${pushname}`
              dua = typeof anu[1] !== 'undefined' ? anu[1] : `UwU`
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, kirbotz, mek, from)
              break
      case 'doge':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'patrick':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'gura':
       case 'gawgura':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'semoji':
       case 'emoji':
              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch { 
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=DashBot`)
              await kirbotz.sendMessage(from, ini_buffer, sticker, { quoted: ftrol })
              break
case 'bucinstick':
           case'bucinsticker':{
         
    var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
    var wifegerak = ano.split('\n')
    var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
    var isGif = wifegerakx.endsWith('.gif') ? true : false
    if (!isGif) {
    var ngebuff = await getBuffer(wifegerakx)
    var media = getRandom('.png')
    fs.writeFileSync(media, ngebuff)
    await ffmpeg(`${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
    if (error) return reply(mess.error.api)
									kirbotz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftrol})
									
    fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
    } else {
     var ngebuff = await getBuffer(wifegerakx)
 	let media = `./sticker/${sender}.gif`
    fs.writeFileSync(media, ngebuff)
					reply(mess.wait)
        await ffmpeg(`${media}`)
							.inputFormat(media.split('.')[4])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(err)
								fs.unlinkSync(media)
								let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.api)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
									if (error) return reply(mess.error.api)
									kirbotz.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftrol})
									
    fs.unlinkSync(media)
									fs.unlinkSync(`./sticker/${sender}.webp`)
})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
    }
    }
    break
case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=DashBot`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT`,
            },
            type: 1,
          },]);
        break
case 'animestick':
       case 'stickeranime':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break

// jadian
case 'jadian':
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee... Yang Lagi Jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
case 'cantik':
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
//cecan
case 'cecanvietnam':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=ZeroYT7`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
kirbotz.sendMessage(from, goo, image, {quoted: fvid, caption: 'Nih Jangan Lupa Subscribe YT : KirBotz×'})
break
case 'cecanrandom':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=ZeroYT7`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
kirbotz.sendMessage(from, buffer, image, {quoted: fvid, caption: ''})
break
case 'hijaber':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=ZeroYT7`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
kirbotz.sendMessage(from, buffer, image, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'santuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=ZeroYT7`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
kirbotz.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'ukhti':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=ZeroYT7`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
kirbotz.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'bocil':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=ZeroYT7`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
kirbotz.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'ghea':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=ZeroYT7`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
kirbotz.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'rika':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=ZeroYT7`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
kirbotz.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
//━━━━━━━━━━━━━━━[ FITUR CECAN ]━━━━━━━━━━━━━━━━━//
case 'cecanmalaysia':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/malaysia?apikey=ZeroYT7`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
kirbotz.sendMessage(from, goo, image, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecankorea':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/korea?apikey=ZeroYT7`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
kirbotz.sendMessage(from, goo, image, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanindonesia':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/indonesia?apikey=ZeroYT7`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
kirbotz.sendMessage(from, goo, image, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanjapan':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/japan?apikey=ZeroYT7`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
kirbotz.sendMessage(from, goo, image, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanthailand':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/thailand?apikey=ZeroYT7`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
kirbotz.sendMessage(from, goo, image, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break

case 'random':
if (!isGroup) return reply(mess.only.group)
reply(mess.wait)
kau = (`https://hardianto-chan.herokuapp.com/api/asupan?apikey=hardianto`)
kon = await getBuffer(kau)
kirbotz.sendMessage(from, kon, video, { quoted: mek, thumbnail: fs.readFileSync('./AkIrTid/kirbotz.jpg')})
break
//
case 'culik':
if (!isOwner && !mek.key.fromMe) return reply('Lu Owner?')
if (args.length < 1) return reply('_*Masukin id grupnya tolol*_')
let pantek = []
for (let i of groupMembers) {
pantek.push(i.jid)
}
kirbotz.groupAdd(args[0], pantek)
break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await kirbotz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jangan Lupa Subrek YT : KirBotz×`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await kirbotz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 Detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await kirbotz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
kirbotz.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'stikerwm':
       case 'stickerwm':
       case 'swm':
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await kirbotz.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              kirbotz.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: ftrol })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              kirbotz.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: ftrol })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              const media = await kirbotz.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              kirbotz.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: ftrol })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              kirbotz.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: ftrol })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
              break
case 'toimg':
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await kirbotz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subrek YT : KirBotz×`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
kirbotz.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await kirbotz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
kirbotz.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await kirbotz.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
kirbotz.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Jangan Lupa Subrek YT : KirBotz×' })
fs.unlinkSync(ran)
})
break
case 'gk':
 kirbotz.sendMessage(from,`⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠁⠄⠄⠄⠄⠄⠄⠄⠄⠙⢿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⡟⠁⠄⠄⠄⠄⣠⣤⣴⣶⣶⣶⣶⣤⡀⠈⠙⢿\n⣿⣿⣿⣿⣿⡟⠄⠄⠄⠄⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠄⠈\n⣿⣿⣿⣿⣿⠁⠄⠄⠄⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄\n⣿⣿⣿⣿⣿⡄⠄⠄⠄⠙⠻⠿⣿⣿⣿⣿⠿⠿⠛⠛⠻⣿⡄⠄\n⣿⣿⣿⣿⣿⡇⠄⠄⠁ ⭕ ⠄⢹⣿⡗⠄ ⭕ ⢄⡀⣾⢀⣿\n⣿⣿⣿⣿⣿⡇⠘⠄⠄⠄⢀⡀⠄⣿⣿⣷⣤⣤⣾⣿⣿⣿⣧⢸\n⣿⣿⣿⣿⣿⡇⠄⣰⣿⡿⠟⠃⠄⣿⣿⣿⣿⣿⡛⠿⢿⣿⣷⣾\n⣿⣿⣿⣿⣿⣿⡄⠈⠁⠄⠄⠄⠄⠻⠿⢛⣿⣿⠿⠂⠄⢹⢹⣿\n⣿⣿⣿⣿⣿⣿⣿⡐⠐⠄⠄⣠⣀⣀⣚⣯⣵⣶⠆⣰⠄⠞⣾⣿\n⣿⣿⣿⣿⣿⣿⣿⣷⡄⠄⠄⠈⠛⠿⠿⠿⣻⡏⢠⣿⣎⣾⣿⣿\n⣿⣿⣿⣿⣿⣿⡿⠟⠛⠄⠄⠄⠄⠙⣛⣿⣿⣵⣿⡿⢹⡟⣿⣿\n⣿⠿⠿⠋⠉⠄⠄⠄⠄⠄⠄⠄⣀⣠⣾⣿⣿⣿⡟⠁⠹⡇⣸⣿\n⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠙⠿⠿⠛⠋⠄⣸⣦⣠⣿⣿   

_*Anak Ngentod Php Doank >_<*_
`, text, { thumbnail: krbtz, sendEphemeral: true, quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Subrek YT : KirBotz×",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./AkIrTid/kirbotz.jpg'),sourceUrl:"https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfMHZ"}}} )

		break
//━━━━━━━━━━━━━━━[ FITUR OWNER ]━━━━━━━━━━━━━━━━━//

case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
kirbotz.sendMessage(from, {displayName: `Creator ${ownername}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('TUHH NOMER OWNER KU')
break
case 'bc':
      case 'broadcast':
             if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
             if (args.length < 1) return reply('teks?')
             anu = await kirbotz.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await kirbotz.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             kirbotz.sendMessage(_.jid, bc, image, {quoted:ftrol,caption: `「 𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ 」\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
kirbotz.sendMessage(_.jid, 
	    {"contentText": `「 𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ 」\n\n${body.slice(4)}`,
	    "footerText": `*𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ || ${date}*`,
	    "buttons": [
	    {"buttonId": `.menu`,
	    "buttonText": {"displayText": "MENU"
	    },"type": "RESPONSE"}
	    ], "headerType": 1,
	    }, MessageType.buttonsMessage, {quoted:ftrol})
}
             reply('Suksess broadcast')
}
             break
case 'runtime':
              reply(`${runtime(process.uptime())}`)
              break
      case 'term':
             if (!isOwner) return reply('LU BUKAN OWNER NGENTOD')
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
      case 'shutdown':
             if (!isOwner) return reply('LU BUKAN OWNER NGENTOD')
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
             if (!isOwner) return reply('LU BUKAN OWNER NGENTOD')
             reply(mess.wait)
             exec(`node main`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
             if (!isOwner) return  reply('LU BUKAN OWNER NGENTOD')
             let totalgroup = kirbotz.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             kirbotz.groupLeave(id)
}
             break
case 'report':
const pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = mek.participant
const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
kirbotz.sendMessage(`6285157740529@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
default:
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return kirbotz.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
