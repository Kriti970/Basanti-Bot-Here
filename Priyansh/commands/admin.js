module.exports.config = {
  name: "admin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "Friends Dp photos",
  commandCategory: "Random-IMG",
  usages: "bestie dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.postimg.cc/qR1hkJb8/FB-IMG-1692979661792.jpg","https://i.ibb.co/x2LmwJT/FB-IMG-1695357880964.jpg","https://i.ibb.co/0ZVfs8Q/1697610013691.jpg","https://i.ibb.co/0qshdWf/1697457570841.jpg"
    ];
     var callback = () => api.sendMessage({body:`❤️𝐀𝐃𝐌𝐈𝐍 𝐈𝐍𝐅𝐎❤️

   𝐌𝐑.𝐂𝐇𝐈𝐊𝐔 𝐁𝐀𝐁𝐔•

𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 :https://www.facebook.com/Mr.Chiku.Babu.Here 

𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : +916009815052`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
