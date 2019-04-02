var Discord = require("discord.js");
var botname = require("./package.json);
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = "f!" //The text before commands, you can put anything that you prefer

    if(message.author.id != "562479467533041674" && message.channel.id === "562488645282693130"){
        if(msg.startsWith('f!', 0)){
            if(msg === prefix + "bang" && message.channel.id === "562488645282693130"){
                message.channel.send('BOOM!!!!!') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, I only understand f!bang right now. More will be added when my creator is free. :) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with 'f!' dot.");
        }
    }
});

bot.login(process.env.BOT_TOKEN)
