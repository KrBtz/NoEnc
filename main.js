// Edit Di setting.json Aja Bwang

const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const chalk = require('chalk')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))

require('./KirBotz×.js')
nocache('./KirBotz×.js', module => console.log(`${module} telah di update!`))

const starts = async (kirbotz = new WAConnection()) => {
    kirbotz.logger.level = 'warn'
    kirbotz.version = [2, 2143, 3]
    kirbotz.browserDescription = [ 'KirBotz Mengintai', '', '3.0' ]
    console.log(banner)
    kirbotz.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Silahkan Scan Kode Qr Nya...!'))
    })
      const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await kirbotz.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    kirbotz.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
  }

    fs.existsSync('./KrBtzz×.json') && kirbotz.loadAuthInfo('./KrBtzz×.json')
    kirbotz.on('connecting', () => {
        start('2', 'Menghubungkan...')
    })
    kirbotz.on('open', () => {
        success('2', '[ 𝙎𝙐𝙆𝙎𝙀𝙎 ] [■■■■■■■■■■■■■■■]')
    })
    console.log(chalk.bgHex('#FFDF00').underline(color('Hallo!! Saya Kirbotz','black')))
    console.log(chalk.bgHex('#FFDF00').underline(color('Belajar Membuat Script Bot','black')))
    console.log(chalk.bgHex('#FFDF00').underline(color('Nama : Akira','black')))
    console.log(chalk.bgHex('#FFDF00').underline(color('WA : 6287705048235','black')))
    console.log(chalk.bgHex('#FFDF00').underline(color('Subrek YT : KirBotz×','red')))
    await kirbotz.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./KrBtzz×.json', JSON.stringify(kirbotz.base64EncodedAuthInfo(), null, '\t'))

    kirbotz.on('chat-update', async (message) => {
        require('./KirBotz×.js')(kirbotz, message, _welkom)
    })
kirbotz.on("group-participants-update", async (anu) => {

    const isWelkom = _welkom.includes(anu.jid)
    try {
      groupMet = await kirbotz.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = anu.participants[0]
/*
https://api.dhamzxploit.my.id/api/canvas/welcome?pp=${pp_user}&name=${anu_user}&bg=https://telegra.ph/file/3d0c3581d7676d6cfbdd2.png&grupname=${encodeURI(mdata.subject)}&member=${memeg}
https://api.dhamzxploit.my.id/api/canvas/goodbye?pp=${pp_user}&name=${anu_user}&bg=https://telegra.ph/file/3d0c3581d7676d6cfbdd2.png&member=${memeg}
*/
      console.log(anu)
      try {
        pp_user = await kirbotz.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
      }
      try {
        pp_grup = await kirbotz.getProfilePicture(anu.jid)
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
      if (anu.action == "add" && mem.includes(kirbotz.user.jid)) {
        kirbotz.sendMessage(anu.jid, "Halo!.. saya KirBotz saya akan membatu mempermudah kehidupan..seperti membuat sticker dan lain-lain. untuk meulai silahkan ketik !menu.", "conversation")
      }
      if (!isWelkom) return
      if (anu.action == "add" && !mem.includes(kirbotz.user.jid)) {
        mdata = await kirbotz.groupMetadata(anu.jid)
        memeg = mdata.participants.length
        num = anu.participants[0]
        let v = kirbotz.contacts[num] || { notify: num.replace(/@.+/, "") }
        anu_user = v.vname || v.notify || num.split("@")[0]
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
        wel = `◧ ʜᴀʟʟᴏ ᴋᴀᴋ
□ ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ
□ *${mdata.subject}*


◧ ɪɴᴛʀᴏ ᴅᴜʟᴜ
□ ɴᴀᴍᴀ :
□ ᴜᴍᴜʀ :
□ ᴋᴇʟᴀs :
□ ᴀsᴋᴏᴛ :

Deskripsi
⌬━━━━━━━━━━━⌬
${mdata.desc}
⌬━━━━━━━━━━━⌬`
        buff = await getBuffer(
          `https://api.dhamzxploit.my.id/api/canvas/welcome?pp=${pp_user}&name=${anu_user}&bg=https://telegra.ph/file/3d0c3581d7676d6cfbdd2.png&grupname=${encodeURI(mdata.subject)}&member=${memeg}`
        )

        but = [
          { buttonId: 'add', buttonText: { displayText: 'Welcome Member Baru' }, type: 1 }
        ]
        sendButImage(mdata.id, wel, "©KirBotz", buff, but)
      }
      if (!isWelkom) return
      if (anu.action == "remove" && !mem.includes(kirbotz.user.jid)) {
        mdata = await kirbotz.groupMetadata(anu.jid)
        num = anu.participants[0]
        let w = kirbotz.contacts[num] || { notify: num.replace(/@.+/, "") }
        anu_user = w.vname || w.notify || num.split("@")[0]
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
        memeg = mdata.participants.length
        out = `Good Bye Moga Tenang Di Alam Sana😂`
        buff = await getBuffer(
          `https://api.dhamzxploit.my.id/api/canvas/goodbye?pp=${pp_user}&name=${anu_user}&bg=https://telegra.ph/file/3d0c3581d7676d6cfbdd2.png&member=${memeg}`
        )

        but = [
          { buttonId: 'remove', buttonText: { displayText: 'Selamat Tinggal' }, type: 1 }
        ]
        sendButImage(mdata.id, out, "©KirBotz", buff, but)
      }
      if (anu.action == "promote") {
        const mdata = await kirbotz.groupMetadata(anu.jid)
        anu_user = kirbotz.contacts[mem]
        num = anu.participants[0]
        try {
          ppimg = await kirbotz.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          )
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
        }
        let buff = await getBuffer(ppimg)
        teks = `@${num.split("@")[0]} Telah dipromote`
        kirbotz.sendMessage(mdata.id, teks, MessageType.text)
      }

      if (anu.action == "demote") {
        anu_user = kirbotz.contacts[mem]
        num = anu.participants[0]
        const mdata = await kirbotz.groupMetadata(anu.jid)
        try {
          ppimg = await kirbotz.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          )
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
        }

        let buff = await getBuffer(
          `https://gatauajg.yogipw.repl.co/api/demote?name=${anu_user.notify}&msg=selamat%20menjadi%20admin&mem=5&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        )
        teks = `@${num.split("@")[0]} Telah didemote`
        kirbotz.sendMessage(mdata.id, teks, MessageType.text)
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'sekarang sedang diawasi untuk perubahan')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
