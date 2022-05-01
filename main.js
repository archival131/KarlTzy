const request = require('request');
const akaneko = require('akaneko');
const lmao = require('djs-chatbot');
const fs = require("fs");
const { keep_alive } = require("./keep_alive.js");
const http = require('https'); // or 'https' for https:// URLs
const login = require("fca-unofficial");
const axios = require("axios");
const YoutubeMusicApi = require('youtube-music-api')
const ytdl = require('@distube/ytdl-core');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const ffmpegs = require('fluent-ffmpeg');
ffmpegs.setFfmpegPath(ffmpeg.path);
const musicApi = new YoutubeMusicApi()
// GLOBAL MESSAGE STORAGE
let msgs = {};
let vips = ['100009830675094', '100080447539882']
let cd = {};
let threads = ""
const bot = "Eljohnzc"
//CODED BY: ELJOHN MAGO!
/*==================================== LEECH tiktok FUNC ====================================*/
/*==================================== LEECH tiktok FUNC ====================================*/

/*==================================== LEECH MP3 FUNC ====================================*/
async function conv(v, t, e) {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-Key': 'de0cfuirtgf67a'
    }
    results = await axios.post("https://backend.svcenter.xyz/api/convert-by-45fc4be8916916ba3b8d61dd6e0d6994", "v_id=" + v + "&ftype=mp3&fquality=128&token=" + t + "&timeExpire=" + e + "&client=yt5s.com", { headers: headers }).then((response) => { return response.data.d_url }).catch((error) => { return error.message });
    return results
}
async function fetch(query) {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    results = await axios.post("https://yt5s.com/api/ajaxSearch", "q=" + query + "&vt=mp3", { headers: headers }).then((response) => { return response.data }).catch((error) => { return error.message });
    return results
}
/*==================================== LEECH MP3 FUNC ====================================*/

/*==================================== RANDOM QOUTES FUNC ====================================*/

async function getWiki(q) {
  out = await axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + q).then((response) => { return response.data}).catch((error) => { return error })
  return out
}
async function qt() {
    let qoute = await axios.get("https://zenquotes.io/api/random").then((response) => { return response.data[0] }).catch((err) => { return "err " });
    return qoute
}
/*==================================== RANDOM QOUTES FUNC ====================================*/

/*======================================== BIBLE VERSE ============================================*/

async function verse(){
    let v = await axios.get("http://labs.bible.org/api/?passage=random&type=json").then((response) => {
        return response.data[0]
    }).catch((err) => {
        return "Error"
    })
    return v
}
/*====================================== BIBLE VERSE ==============================================*/

login({ appState: JSON.parse(fs.readFileSync('fbstate.json', 'utf8')) }, (err, api) => {
    if (err) return console.error(err);
    api.setOptions({ listenEvents: true });
    const listenEmitter = api.listen(async (err, event) => {
        if (err) return console.error(err);
        switch (event.type) {
            case "message_reply":
 if (vips.includes(event.senderID)) {
                     api.setMessageReaction("❤️", event.messageID, (err) => {
                  }, true);
                }
               // else {
                    // api.setMessageReaction("ðŸ˜†", //event.messageID, (err) => {
                 //   }, true);
              //  }
                let msgid = event.messageID
                let input = event.body;
                msgs[msgid] = input;
                break
            case "message":
if (vips.includes(event.senderID)) {
                     api.setMessageReaction("❤️", event.messageID, (err) => {
                  }, true);
                }
              //  else {
                    // api.setMessageReaction("ðŸ˜†", //event.messageID, (err) => {
                  //  }, true);
             //    }
                if (event.attachments.length != 0) {
                    if (event.attachments[0].type == "photo") {
                        msgs[event.messageID] = ['img', event.attachments[0].url]
                    }
                    else if (event.attachments[0].type == "animated_image") {
                        msgs[event.messageID] = ['gif', event.attachments[0].url]
                    }
                     else if (event.attachments[0].type == "sticker") {
                        msgs[event.messageID] = ['sticker', event.attachments[0].url]
                    }
                    else if (event.attachments[0].type == "video") {
                        msgs[event.messageID] = ['vid', event.attachments[0].url]
                    }
                    else if (event.attachments[0].type == "audio") {
                        msgs[event.messageID] = ['vm', event.attachments[0].url]
                    }
                } else {
                    msgs[event.messageID] = event.body
                }
                if (event.body != null) {
                    let input = event.body;
// THIS BOT WAS CREATED BY Eljohn Mago! DO NOT STEAL WITHOUT PROPER CREDITS!
if(input.startsWith(">verse")){
                                    let v = verse()
                                    v.then((response) => {
                                        api.sendMessage("From the book of " + response.bookname + " chapter " + response.chapter + " verse " + response.verse + "\n\n" + response.text, event.threadID)
                                    }).catch((err) => {
                                        console.log(err)
                                    })

                                    }

else if (input.startsWith(">animequote")) {
            axios.get('https://animechan.vercel.app/api/random')
              .then(response => {
                api.sendMessage("'" + response.data.quote + "'" + "\n\n- " + response.data.character + " (" + response.data.anime + ")", event.threadID, event.messageID);
              })
              .catch(error => {
                api.sendMessage(error, event.threadID, event.messageID);
              });
          }else if (input.startsWith("Alexa")){
var text = input;     
text = text.substring(6)
let data = input.split(" ")
                data.shift()
var res = await lmao.chat({ Message: text });
  console.log(res)
{api.sendMessage(res.embed.description,event.threadID,event.messageID)
    }
   }
                      if ((input.startsWith("!setallnn")) && !bot.includes(event.senderID)){
     if(vips.includes(event.senderID)){
        let data = input.split(" ");
 data.shift()
var threadInfo = await api.getThreadInfo(event.threadID)
    var idtv = threadInfo.participantIDs
 console.log(threadInfo)
 let name = data.join(" ");
 function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
    for(let setname of idtv) {
 await delay(5000)
 api.changeNickname(`${name}`, event.threadID,setname);
    }
        }
        }
      if (input.startsWith("!nsfw_hentai")) {
  await akaneko.nsfw.hentai().then((res)=> { const url = res;
request(url).pipe(fs.createWriteStream("./nsfwhentai.png"));
var timeleft = 1;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
 api.getUserInfo(event.senderID, (data) => {var message = {
          body:("Just a random vanilla hentai image"),
         attachment: fs.createReadStream(__dirname + "/nsfwhentai.png")}
api.sendMessage(message, event.threadID,event.messageID);})} else {    
  }
  timeleft -= 1;
}, 500); })
}
else if (input.startsWith(">play")) {
                        let data = input.split(" ");
                        if (data.length < 2) {
                            api.sendMessage("🤬Invalid Use Of Command!\n⚠️Usage: >play music_title", event.threadID);
                        } else {
                            if (!(vips.includes(event.senderID))) {
                                if (!(event.senderID in cd)) {
                                    cd[event.senderID] = Math.floor(Date.now() / 1000) + (60 * 3);
                                }
                                else if (Math.floor(Date.now() / 1000) < cd[event.senderID]) {
                                    api.sendMessage("Opps you're going to fast! Wait for " + Math.floor((cd[event.senderID] - Math.floor(Date.now() / 1000)) / 60) + " mins and " + (cd[event.senderID] - Math.floor(Date.now() / 1000)) % 60 + " seconds", event.threadID, event.messageID);
                                    return
                                }
                                else {
                                    cd[event.senderID] = Math.floor(Date.now() / 1000) + (60 * 3);
                                }
                            }
                            api.sendMessage("🤪Requesting...", event.threadID, event.messageID);
                            try {
                                data.shift();
                                await musicApi.initalize();
                                const musics = await musicApi.search(data.join(" ").replace(/[^\w\s]/gi, ''));
                                if (musics.content.length == 0) {
                                    throw new Error(`${data.join(" ").replace(/[^\w\s]/gi, '')} returned no result!`)
                                } else {
                                    if (musics.content[0].videoId === undefined) {
                                        throw new Error(`${data.join(" ").replace(/[^\w\s]/gi,'')} is not found on youtube music`)
                                    }
                                }
                                const url = `https://www.youtube.com/watch?v=${musics.content[0].videoId}`;
                                console.log(`connecting to yt`);
                                const stream = ytdl(url, {
                                    quality: "lowest"
                                });
                                const info = await ytdl.getInfo(url);
                                console.log(`converting`);
                                ffmpegs(stream)
                                    .audioBitrate(48)
                                    .save(`${__dirname}/${data.join(" ").replace(/[^\w\s]/gi, '')}.mp3`)
                                    .on("end", () => {
                                        console.log(`Playing ${data.join(" ").replace(/[^\w\s]/gi, '')}`);
                                        api.sendMessage({
                                            body: "Here's what ya ordered!\n\n🤩Song Title: " + info.videoDetails.title + "\n\nEnjoy your meal!",
                                            attachment: fs.createReadStream(`${__dirname}/${data.join(" ").replace(/[^\w\s]/gi, '')}.mp3`)
                                                .on("end", async () => {
                                                    if (fs.existsSync(`${__dirname}/${data.join(" ").replace(/[^\w\s]/gi, '')}.mp3`)) {
                                                        fs.unlink(`${__dirname}/${data.join(" ").replace(/[^\w\s]/gi, '')}.mp3`, function (err) {
                                                            if (err) console.log(err);
                                                            console.log(`${__dirname}/${data.join(" ").replace(/[^\w\s]/gi, '')}.mp3 is deleted!`);
                                                        });
                                                    }
                                                })
                                        }, event.threadID, event.messageID);
                                    });

                            } catch (err) {
                                api.sendMessage(`⚠️${err.message}`, event.threadID, event.messageID);
                            }
                        }

                    }
                    else if(input.startsWith(">wiki")) {
                        
                        let data = input.split(" ");
                        if (data.length < 2) {
                            api.sendMessage("🤬Invalid Use Of Command!\n⚠️Usage: >wiki word", event.threadID);
                        } else {
                            try {
                                data.shift()
                                var txtWiki = "";
                                let res = await getWiki(data.join(" "));
                                if(res === undefined){
                                    throw new Error(`API RETURNED THIS: ${res}`)
                                }
                                if(res.title === undefined) {
                                  throw new Error(`API RETURNED THIS: ${res}`)
                                }
                                txtWiki += `🥳You search the word ${res.title} \n\nTimeStamp: ${res.timestamp}\n\n🥳Description: ${res.description}\n\n🥳Info: ${res.extract}`
                                
                                api.sendMessage(`${txtWiki}`, event.threadID, event.messageID);
                            }
                            catch (err) {
                                api.sendMessage(`😖¸${err.message}`, event.threadID, event.messageID);
                            }
                        }
                    }
                    else if (input.startsWith(">motivation")) {
                        let rqt = qt();
                        rqt.then((response) => {
                            api.sendMessage(response.q + "\n- " + response.a, event.threadID, event.messageID);
                        })
                    }
                }
                break;
            case "message_unsend":
                if (!vips.includes(event.senderID)) {
                    let d = msgs[event.messageID];
                    if (typeof (d) == "object") {
                        api.getUserInfo(event.senderID, (err, data) => {
                            if (err) return console.error(err);
                            else {
                                if (d[0] == "img") {
                                    var file = fs.createWriteStream("photo.jpg");
                                    var gifRequest = http.get(d[1], function (gifResponse) {
                                        gifResponse.pipe(file);
                                        file.on('finish', function () {
                                            console.log('finished downloading photo..')
                                            var message = {
                                                body: data[event.senderID]['name'] + " unsent this photo: \n",
                                                attachment: fs.createReadStream(__dirname + '/photo.jpg')
                                            }
                                            api.sendMessage(message, event.threadID);
                                        });
                                    });
                                }
                                else if (d[0] == "gif") {
                                    var file = fs.createWriteStream("animated_image.gif");
                                    var gifRequest = http.get(d[1], function (gifResponse) {
                                        gifResponse.pipe(file);
                                        file.on('finish', function () {
                                            console.log('finished downloading gif..')
                                            var message = {
                                                body: data[event.senderID]['name'] + " unsent this GIF: \n",
                                                attachment: fs.createReadStream(__dirname + '/animated_image.gif')
                                            }
                                            api.sendMessage(message, event.threadID);
                                        });
                                    });
                                }
                                else if (d[0] == "sticker") {
                                    var file = fs.createWriteStream("sticker.png");
                                    var gifRequest = http.get(d[1], function (gifResponse) {
                                        gifResponse.pipe(file);
                                        file.on('finish', function () {
                                            console.log('finished downloading sticker..')
                                            var message = {
                                                body: data[event.senderID]['name'] + " unsent this Sticker: \n",
                                                attachment: fs.createReadStream(__dirname + '/sticker.png')
                                            }
                                            api.sendMessage(message, event.threadID);
                                        });
                                    });
                                }
                                else if (d[0] == "vid") {
                                    var file = fs.createWriteStream("video.mp4");
                                    var gifRequest = http.get(d[1], function (gifResponse) {
                                        gifResponse.pipe(file);
                                        file.on('finish', function () {
                                            console.log('finished downloading video..')
                                            var message = {
                                                body: data[event.senderID]['name'] + " unsent this video: \n",
                                                attachment: fs.createReadStream(__dirname + '/video.mp4')
                                            }
                                            api.sendMessage(message, event.threadID);
                                        });
                                    });
                                }
                                else if (d[0] == "vm") {
                                    var file = fs.createWriteStream("vm.mp3");
                                    var gifRequest = http.get(d[1], function (gifResponse) {
                                        gifResponse.pipe(file);
                                        file.on('finish', function () {
                                            console.log('finished downloading audio..')
                                            var message = {
                                                body: data[event.senderID]['name'] + " unsent this audio: \n",
                                                attachment: fs.createReadStream(__dirname + '/vm.mp3')
                                            }
                                            api.sendMessage(message, event.threadID);
                                        });
                                    });
                                }
                            }
                        });
                    }
                    else {
                        api.getUserInfo(event.senderID, (err, data) => {
                            if (err) return console.error(err);
                            else {
                                api.sendMessage(data[event.senderID]['name'] + " unsent this message: \n\n" + msgs[event.messageID], event.threadID);
                            }
                        });
                    }
                    break;
                }
        }
    });
});
