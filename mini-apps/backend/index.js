const dotenv = require("dotenv");
dotenv.config();

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_BOT_TOKEN;

bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatid = msg.chat.id;
  const text = msg.text;

  if (text == "/start") {
    bot.sendMessage(chatid, "Text", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Приложение",
              web_app: { url: "https://eftsoons.github.io/hackerapps/" },
            },
          ],
        ],
      },
    });
  }
});
