const Telegraf = require('telegraf');
const axios = require('axios');


require('dotenv').config();
const bot = new Telegraf(process.env.TOKEN);

const infoCommand = require('./src/commands/info');
infoCommand(bot);
const startCommand = require('./src/commands/start');
startCommand(bot);

const usdCommand = require('./src/prices/usd');
usdCommand(bot);
const ngnusdCommand = require('./src/prices/ngnusd');
ngnusdCommand(bot);
const usdngnCommand = require('./src/prices/usdngn');
usdngnCommand(bot);

exports.handler = (event, context, callback) => {
    const tmp = JSON.parse(event.body); // get data passed to us
    bot.handleUpdate(tmp); // make Telegraf process that data
    return callback(null, { //return something for webhook, so it doesn't
        statusCode: 200,
        body: '',
    });
};

bot.launch();