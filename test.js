//const logger = require('./logger');
const discord = require('discord.js-commando');
const bot = new discord.Client;
const token = 'NTQ2Njk1NzAyMDQ3MDk2ODYy.D0r-Jw.YmG_y5u07I_bti9MaOSIvU898fk';

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function (message){
    if (message.content == 'hello'){
        message.channel.send('Sup ' + message.author);
    }
});

bot.on('ready', function(message){
    console.log('Ready');
    
});

bot.login(token);

//logger.log('message');