const discord = require('discord.js-commando');

class CoinFlipCommand extends discord.Command{

    constructor(client){
        super(client, {
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'flip a coin bitch, heads or tails, whoever calls it right wins'
        });
    }

    async run(message, args){
        var chance = Math.floor(Math.random()*2);
        if(chance == 0){
            message.reply('heads');
        }else{
            message.reply('tails');
        }
    }
}

module.exports = CoinFlipCommand;