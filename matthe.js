// Sorununz olursa Matthe#0001 ulaşınız.

const Discord = require("discord.js")
const client = new Discord.Client()
const ayarlar = require("./ayarlar.json")
const moment = require("moment")//Matthe#1000
const fs = require("fs")
const db = require("quick.db")
const chalk = require("chalk")
require('./util/Loader.js')(client)

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} komut yüklenecek.`)//Youtube Matthe
  files.forEach(f => {                    
    let props = require(`./commands/${f}`)
    console.log(`${props.config.name} komutu yüklendi.`)
    client.commands.set(props.config.name, props)
    props.config.aliases.forEach(alias => {       
      client.aliases.set(alias, props.config.name)
    });
  });
})

client.on('message', async message => {
  
  if(message.content === '.tag') {
    message.channel.send(`\`${ayarlar.tag}\``)//Youtube Matthe
  }
  })

client.on("ready", () => {
    console.log(chalk.redBright(`tm`))
})

//
client.on('guildMemberAdd', async (member) => {
  /////////////////////////
     //Kanal Tanımı
     ////////////////////////////////////////
    let viruskanal = client.channels.cache.get("865459617197850644")
  ////////////////////////////////////////
  //Güvenlik TanımlarıS
  ////////////////////////////////////////
  let virususer = client.users.cache.get(member.id);
  let viruskullanıcı = client.users.cache.get(member.id)
  const virushesapkurulus = new Date().getTime()- viruskullanıcı.createdAt.getTime();
  let viruj;
  if (virushesapkurulus < 1296000000) viruj = ' Güvenilir Değil!'
  if (virushesapkurulus > 1296000000) viruj = ' Güvenilir!'
  
  /////////////////////// /////////////////
  //Embed
  ////////////////////////////////////////
    const hgembed = new Discord.MessageEmbed()
    .setDescription(`
    
     <a:hg:865487320727945256> Aramıza Hoşgeldin **${virususer.username}** !
  
     <a:hg:865487320727945256> Seninle Birlikte **${member.guild.memberCount}** Kişiyiz
  
     <a:hg:865487320727945256> <@&864909319698120745> Rolundekiler Senle En Kısa Zamanda İlgilenicek
  
     <a:hg:865487320727945256> İsmini Ve Yaşını Yazıp Kayıt Olabilirsin.

     <a:hg:865487320727945256> Hesabın Kuruluş Tarihi ${moment(member.user.createdAt).format("**DD MMMM YYYY hh:mm:ss**") }
  
     <a:hg:865487320727945256> Hesabın Güvenlik Durumu: **${viruj}**
  
     <a:hg:865487320727945256> Kurallari Okumayi Unutma
    
    `)
    .setColor("#00ff1f")
    //.setImage("https://cdn.discordapp.com/attachments/706505340417736736/794296050121965568/ezgif-6-9ab9144abf46.gif")
    .setImage("https://i.imgur.com/X9fIACG.pngn")
    .setTitle("Aramıza Yeni Birisi Katıldı !")
    .setTimestamp()
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setAuthor(member.guild.name,member.guild.iconURL({dynamic:true}))
    .setFooter("Kahve Dunyasi")
    ////////////////////////////////////////
    //Kanala Gönderme
    ////////////////////////////////////////
    viruskanal.send(`<@&864909319698120745> <@${member.id}>`, hgembed) ;
  })



client.login(process.env.TOKEN)

client.on("ready", () => {
  client.channels.cache.get(ayarlar.botSesKanal).join();
  });
//Youtube Matthe


