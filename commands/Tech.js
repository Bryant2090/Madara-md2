"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "developer2", reaction: "🥲", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Yes you called me whats up Ok anyway support me by following my channel and subscribing on my youtube channel 🙏 \n\n ' + "║❒ 𝙒𝘼𝘾𝙃𝘼𝙉𝙉𝙀𝙇 https://whatsapp.com/channel/0029VacpEdXIt5rqKLB9nC1L";
    let d = '                                     ║❒ 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 https://www.youtube.com/@BryantXtech';
    let varmess = z + d;
    var mp4 = 'https://telegra.ph/file/234811e25f5e4e7f72b10.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *BMW-MD-REPO* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *BMW-MD-REPO*'
      let varmess=z+d
      var img='https://telegra.ph/file/13d63c21c1a665bfd8324.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
