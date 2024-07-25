module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
    description: "Notification of bots or people entering groups with random gif/photo/video",
    dependencies: {
        "fs-extra": "",
        "path": "",
        "pidusage": ""
    }
};
 
module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
 
    const path = join(__dirname, "cache", "joingif");
    if (existsSync(path)) mkdirSync(path, { recursive: true }); 
 
    const path2 = join(__dirname, "cache", "joingif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });
 
    return;
}
 
 
module.exports.run = async function({ api, event }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
        const fs = require("fs");
        return api.sendMessage("🌿🍒𝐇𝐄𝐋𝐋𝐎 𝐄𝐕𝐄𝐑𝐘𝐎𝐍𝐄💝🌿", event.threadID, () => api.sendMessage({body: `🍒💙•••Ɓ❍ʈ Ƈøɳɳɛƈʈɛɗ•••💞🌿
        
🕊️🌸...Ɦɛɭɭ❍ Ɠɣus Ɱɣ Ɲɑɱɛ Is 🍒💙•••✦${global.config.BOTNAME}✦•••💞🌿




 ✨💞Ɱɣ Ꭾɽɛfɪᵡ ɪs ${global.config.PREFIX}


\n\nƬɣƥɛ${global.config.PREFIX}ꞪɛɭᎮ Ƭ❍ søø Ɱɣ Ƈøɱɱɑɳɗ ɭɪsʈ...🤍💫\n
\nƐxɑɱƥɭɛ :\n

${global.config.PREFIX}Sɧɑɣɽɪ..💜(Ƭɛxʈ)\n${global.config.PREFIX} (Ƥɧøʈø)🌬️🌳🌊

🦋🌸Ƭɣƥɛ${global.config.PREFIX}Ɦɛɭƥ2 (Ɑɭɭ Ƈøɱɱɑɳɗʂ)...☃️💌

${global.config.PREFIX} ɪɳfø (ɑɗɱɪɳ Iɳføɽɱɑʈɪøɳ)👀✍️
...🍫🥀Ɱɣ ❍wɳɛɽ ɪs Ɱɽ 𝐂┣┫ῙƘƲ ß𝐀ßƲ🥀🌎...🕊️☃️

${global.config.PREFIX}🌺🍃Ƈɑɭɭɑɗ føɽ Ɑɳɣ ɪʂʂuɛ 
<<<<<------------------------------>>>>>
A̸N̸D̸ F̸O̸R̸ A̸N̸Y̸ R̸E̸P̸O̸R̸T̸ O̸R̸ C̸O̸N̸T̸A̸C̸T̸ B̸O̸T̸ D̸E̸V̸A̸L̸O̸P̸A̸R̸....💙🍫

💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞𝐌𝐑..𝐂𝐇𝐈𝐊𝐔 𝐁𝐀𝐁𝐔  ☜ 💫\n\n🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝗠𝗿.𝗖𝗵𝗶𝗸𝘂🖤\n\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞ https://www.facebook.com/Mr.Chiku.Babu.Here\n
━
┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓
🌸✦✧✧✧✧✰🍒𝗠𝗥.𝗖𝗛𝗜𝗞𝗨🌿✰✧✧✧✧✦🌸  
┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛
`, attachment: fs.createReadStream(__dirname + "/cache/admin.jpg")} ,threadID));
    }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);
 
            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "cache", "joinvideo");
            const pathGif = join(path, `${threadID}.video`);
 
            var mentions = [], nameArray = [], memLength = [], i = 0;
            
            for (id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);
            }
            memLength.sort((a, b) => a - b);
            
            (typeof threadData.customJoin == "undefined") ? msg = "𝗛𝗲𝗹𝗹𝗼 𝗠𝗿/𝗠𝗶𝘀𝘀 {name},\n─────────────────\n 𝗬𝗼𝘂 𝗮𝗿𝗲 𝘁𝗵𝗲 {soThanhVien}th 𝗠𝗲𝗺𝗯𝗲𝗿 ─────────────────\n𝗼𝗳 {threadName} 𝗚𝗿𝗼𝘂𝗽\n─────────────────\n𝗣𝗹𝗲𝗮𝘀𝗲 𝗘𝗻𝗷𝗼𝘆 𝗬𝗼𝘂𝗿 𝗦𝘁𝗮𝘆\n─────────────────\n𝗔𝗻𝗱 𝗠𝗮𝗸𝗲 𝗟𝗼𝘁 𝗮 𝗙𝗿𝗶𝗲𝗻𝗱 =)\n──────-°°__𝗧𝗿𝘂𝘀𝘁 𝗺𝗲 🔐 °__!!>☁️\n\n✨❤️ 𝗠𝘆 𝗢𝘄𝗻𝗲𝗿 ✦͙͙͙͙❥≛⃝𝐂┣┫ῙƘƲ ß𝐀ßƲ🍀🍒⁎∗❥⃝**͙✦͙͙͙ \n\n❤️ Love you 😘 ummmmah ❤️😍" : msg = threadData.customJoin;
            msg = msg
            .replace(/\{name}/g, nameArray.join(', '))
            .replace(/\{type}/g, (memLength.length > 1) ?  'Friends' : 'Friend')
            .replace(/\{soThanhVien}/g, memLength.join(', '))
            .replace(/\{threadName}/g, threadName);
 
            if (existsSync(path)) mkdirSync(path, { recursive: true });
 
            const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));
 
            if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathvideo), mentions }
            else if (randomPath.length != 0) {
                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
            }
            else formPush = { body: msg, mentions }
 
            return api.sendMessage(formPush, threadID);
        } catch (e) { return console.log(e) };
    }
    }
