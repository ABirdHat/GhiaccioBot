var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'venice':
                bot.sendMessage({
                    to: channelID,
                    message: 'You know Paris, France? In English, it's pronounced "Paris" but everyone else pronounces it without the "s" sound, like the French do. But with Venezia, everyone pronouces it the English way: "Venice". Like The Merchant of Venice or Death in Venice. WHY, THOUGH!? WHY ISN'T THE TITLE DEATH IN VENEZIA!? ARE YOU FUCKING KIDDING ME!? IT TAKES PLACE IN ITALY, SO USE THE ITALIAN WORD, DAMMIT! THAT SHIT PISSES ME OFF! BUNCH OF DUMBASSES!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});
