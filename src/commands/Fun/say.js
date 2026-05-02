const Discord = require ('discord.js');
const { FILE } = require('dns');

const client = new Discord.Client();

const prefix = ".";

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('alpha 0.2.9, IM ONLINE!!!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'pong'){
        client.commands.get('pong').execute(message, args);
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args, Discord);
    } else if (command == 'kill'){
        client.commands.get('kill').execute(message, args);
    } else if (command == 'quote'){
        client.commands.get('quote').execute(message, args);
    } else if (command == 'kiss'){
        client.commands.get('kiss').execute(message, args);
    } else if (command == 'hug'){
        client.commands.get('hug').execute(message, args);
    } else if (command == 'pet'){
        client.commands.get('pet').execute(message, args);   
    } else if (command == 'bruh'){
        client.commands.get('bruh').execute(message, args);
    }
})

client.login('no')
