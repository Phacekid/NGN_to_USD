const Telegraf = require('telegraf');
const axios = require('axios');

module.exports = (bot) => {
    bot.command(["USDNGN", "UsdNgn", "usdngn"], (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" "); 
        let message = ""; 
    
        if (inputArray.length == 1) { 
            message = "pls put a number after usdngn";
            bot.telegram.sendMessage(ctx.chat.id, message);   
        } else {
            inputArray.shift(); 
            message = inputArray.join(" ");
            getData();
    async function getData(){
        try{
            let ngnRes = await axios.get('https://api.binance.com/api/v1/ticker/price?symbol=USDTNGN');

            let usd0 = ngnRes.data.price;
            let usd1 = Number(usd0).toFixed(2);
            let usd3 = (usd1 * message).toFixed(2);

let total = (message + " " + 'usd' + ' ' + '=' + " " + "₦" + usd3);
            bot.telegram.sendMessage(ctx.chat.id, total, {
                parse_mode: "markdown"
            })
        }catch(err){
        console.log(err)
        }
    }
        }
    })
}