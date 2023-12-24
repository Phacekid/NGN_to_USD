const Telegraf = require('telegraf');
const axios = require('axios');


module.exports = (bot) => {
    bot.command(["USD", "Usd", "usd"], (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" "); 
        let message = ""; 
    
        if (inputArray.length == 1) { 
            getData();
    async function getData(){
        try{
            let ngnRes = await axios.get('https://api.binance.com/api/v1/ticker/price?symbol=USDTNGN');

            let usd0 = ngnRes.data.price;
            let usd1 = Number(usd0).toFixed(2);
            let usd2 = ("1" + " " + "USD" + " " + "=" + " " + "₦" + usd1)
let date_ob = new Date();
let day = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
let date =(day + "-" + month + "-" + year);
let time = (hours + ":" + minutes + ":" + seconds);
let total = 
`
${usd2} as at ${date} ${time}
`;
            bot.telegram.sendMessage(ctx.chat.id, total, {
                parse_mode: "markdown"
            })
        }catch(err){
        console.log(err)
        }
    }
        } else {
            message = "pls use only the usd command";
            bot.telegram.sendMessage(ctx.chat.id, message);

        }
    })
    
}
